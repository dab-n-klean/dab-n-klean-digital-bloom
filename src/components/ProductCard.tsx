import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  uses: string[];
  image: string;
  variants: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToEnquiry: (product: Product, variant: string) => void;
}

export const ProductCard = ({ product, onAddToEnquiry }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToEnquiry = () => {
    onAddToEnquiry(product, selectedVariant);
  };

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Ideal For:</h4>
          <div className="flex flex-wrap gap-2">
            {product.uses.map((use, index) => (
              <span
                key={index}
                className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select pack size" />
            </SelectTrigger>
            <SelectContent>
              {product.variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleAddToEnquiry}
            className="w-full"
            style={{
              opacity: isHovered ? 1 : 0.9,
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};
