import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ChevronDown } from "lucide-react";
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
  onAddToEnquiry: (
    product: Product,
    variant: string,
    quantity: number
  ) => void;
}

export const ProductCard = ({ product, onAddToEnquiry }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleAddToEnquiry = () => {
    onAddToEnquiry(product, selectedVariant, quantity);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div
      className="
        glass-card rounded-2xl overflow-hidden
        transition-all duration-300 hover:scale-105
        h-full flex flex-col
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4">
          {product.description}
        </p>

        {/* Key Features dropdown */}
        <div className="mb-4 border border-border/60 rounded-xl bg-background/70">
          <button
            type="button"
            onClick={() => setFeaturesOpen((prev) => !prev)}
            className="
              w-full flex items-center justify-between
              px-3 sm:px-4 py-2 sm:py-3
            "
          >
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Key Features
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                featuresOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {featuresOpen && (
            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-[11px] sm:text-xs md:text-sm text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2 mt-[2px]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Ideal For chips */}
        {/* <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
            Ideal For:
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.uses.map((use, index) => (
              <span
                key={index}
                className="
                  text-[11px] sm:text-xs bg-accent text-accent-foreground
                  px-3 py-1 rounded-full
                "
              >
                {use}
              </span>
            ))}
          </div>
        </div> */}

        {/* Push controls to bottom */}
        <div className="flex-1" />

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

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={decrementQuantity}
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="flex-1 text-center">
              <span className="text-lg font-semibold text-foreground">
                {quantity}
              </span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={incrementQuantity}
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleAddToEnquiry}
            className="w-full"
            style={{ opacity: isHovered ? 1 : 0.9 }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};
