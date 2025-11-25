import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-tissue.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          subheadRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".value-card",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 240, 245, 0.9), rgba(240, 240, 245, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            DAB'N'KLEAN — Softness You Feel.{" "}
            <span className="text-primary">Hygiene You Trust.</span>
          </h1>

          <p
            ref={subheadRef}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Premium tissue and hygiene products for every need. From kitchens to
            bathrooms, offices to restaurants — experience the perfect blend of
            comfort and cleanliness.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-lg"
            >
              Explore Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("b2b")}
              className="text-lg"
            >
              Bulk Order Enquiry
            </Button>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="value-card glass-card rounded-lg p-6 hover:scale-105 transition-transform">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Ultra Soft</h3>
              <p className="text-sm text-muted-foreground">
                Gentle on sensitive skin
              </p>
            </div>

            <div className="value-card glass-card rounded-lg p-6 hover:scale-105 transition-transform">
              <Droplets className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Highly Absorbent
              </h3>
              <p className="text-sm text-muted-foreground">
                Maximum cleaning power
              </p>
            </div>

            <div className="value-card glass-card rounded-lg p-6 hover:scale-105 transition-transform">
              <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Dermatologically Tested
              </h3>
              <p className="text-sm text-muted-foreground">
                Safe for all skin types
              </p>
            </div>

            <div className="value-card glass-card rounded-lg p-6 hover:scale-105 transition-transform">
              <Leaf className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Eco-Conscious
              </h3>
              <p className="text-sm text-muted-foreground">
                Responsibly sourced materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
