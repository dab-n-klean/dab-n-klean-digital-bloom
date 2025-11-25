import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductCard, Product } from "./ProductCard";
import kitchenTowelsImg from "@/assets/kitchen-towels.jpg";
import facialTissuesImg from "@/assets/facial-tissues.jpg";
import butterPaperImg from "@/assets/butter-paper.jpg";
import toiletRollImg from "@/assets/toilet-roll.jpg";
import napkinsImg from "@/assets/napkins.jpg";

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onAddToEnquiry: (product: Product, variant: string) => void;
}

export const Products = ({ onAddToEnquiry }: ProductsProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const products: Product[] = [
    {
      id: "kitchen-towels",
      name: "Kitchen Towels",
      description: "Ultra-absorbent, strong paper towels perfect for every kitchen task.",
      features: [
        "3-ply ultra-absorbent design",
        "Extra strong when wet",
        "Ideal for spills and cleaning",
        "Food-safe and hygienic",
      ],
      uses: ["Kitchen", "Everyday Use", "HoReCa"],
      image: kitchenTowelsImg,
      variants: ["Single Roll", "Pack of 4", "Pack of 12", "Bulk (48 rolls)"],
    },
    {
      id: "facial-tissues",
      name: "Facial Tissues",
      description: "Gentle, soft tissues that care for sensitive skin with every use.",
      features: [
        "Dermatologically tested",
        "Ultra-soft 3-ply layers",
        "Hypoallergenic",
        "Strong yet gentle",
      ],
      uses: ["Household", "Travel", "Office"],
      image: facialTissuesImg,
      variants: ["Box of 100", "Box of 200", "Pack of 5 boxes", "Family Pack (10 boxes)"],
    },
    {
      id: "butter-paper",
      name: "Butter Paper",
      description: "Food-safe parchment paper for baking, cooking, and food wrapping.",
      features: [
        "100% food-safe certified",
        "Non-stick surface",
        "Heat resistant",
        "Grease-proof and moisture-resistant",
      ],
      uses: ["Kitchen", "Baking", "Food Wrapping"],
      image: butterPaperImg,
      variants: ["Roll (10m)", "Roll (25m)", "Pack of 3 rolls", "Bulk (20 rolls)"],
    },
    {
      id: "toilet-roll",
      name: "Toilet Roll",
      description: "Soft, strong, and dependable toilet tissue for ultimate comfort.",
      features: [
        "2-ply premium softness",
        "Highly absorbent",
        "Gentle on skin",
        "Long-lasting rolls",
      ],
      uses: ["Bathroom", "Everyday Use", "HoReCa"],
      image: toiletRollImg,
      variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
    },
    {
      id: "napkins",
      name: "Paper Napkins",
      description: "Elegant, absorbent napkins perfect for dining and entertaining.",
      features: [
        "Premium quality paper",
        "Soft and absorbent",
        "Elegant fold design",
        "Available in multiple sizes",
      ],
      uses: ["Dining", "HoReCa", "Events"],
      image: napkinsImg,
      variants: ["Pack of 100", "Pack of 500", "Dispenser Pack", "Bulk (5000 pcs)"],
    },
    {
      id: "wrapping-paper",
      name: "Wrapping Paper",
      description: "Versatile food-grade wrapping paper for safe food storage and packaging.",
      features: [
        "Food-safe certified",
        "Strong and tear-resistant",
        "Grease and moisture resistant",
        "Eco-friendly materials",
      ],
      uses: ["Food Wrapping", "Kitchen", "HoReCa"],
      image: butterPaperImg,
      variants: ["Roll (15m)", "Roll (50m)", "Pack of 5 rolls", "Bulk (30 rolls)"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of premium tissue and hygiene products,
            designed for comfort, strength, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} onAddToEnquiry={onAddToEnquiry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
