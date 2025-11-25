import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onCartOpen: () => void;
  cartItemCount: number;
}

export const Navigation = ({ onCartOpen, cartItemCount }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            DAB'N'KLEAN
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("quality")} className="text-foreground hover:text-primary transition-colors">
              Quality & Sustainability
            </button>
            <button onClick={() => scrollToSection("b2b")} className="text-foreground hover:text-primary transition-colors">
              B2B / Bulk
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={onCartOpen} variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Enquiry Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button onClick={onCartOpen} variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              Products
            </button>
            <button onClick={() => scrollToSection("quality")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              Quality & Sustainability
            </button>
            <button onClick={() => scrollToSection("b2b")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              B2B / Bulk
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors py-2">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
