import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Shield, Leaf } from "lucide-react";
import heroImage from "/images/dnk.jpg";

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
      className="relative min-h-screen pt-20 bg-[#FFE7E8] overflow-hidden"
    >
      {/* TOP IMAGE BLOCK – fixed height, anchored from bottom */}
      <div className="w-full bg-[#FFE7E8]">
        <div
          className="
            relative w-full
            h-[460px] sm:h-[520px] md:h-[700px] lg:h-[740px]
          "
        >
          <div
            className="absolute inset-0 bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
        </div>
      </div>

      {/* FULL-WIDTH GLASS BAR – overlaps the image */}
      <div
        className="
          relative w-full
          -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-64
         
          
          
        "
      >
        {/* Inner content container (centers text/cards) */}
        <div className="container mx-auto px-4 pb-6 pt-8 md:pt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              ref={headlineRef}
              className="text-3xl md:text-[43px] font-bold text-foreground mb-7"
            >
              DAB&apos;N&apos;KLEAN — Softness You Feel.{" "} <br />
              <span className="text-primary">Hygiene You Trust.</span>
            </h1>

            {/* <p
              ref={subheadRef}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Premium tissue and hygiene products for every need. From kitchens
              to bathrooms, offices to restaurants — experience the perfect
              blend of comfort and cleanliness.
            </p> */}

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="text-base sm:text-lg w-full sm:w-auto"
              >
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("b2b")}
                className="text-base sm:text-lg w-full sm:w-auto"
              >
                Bulk Order Enquiry
              </Button>
            </div>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5"
            >
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
      </div>
    </section>
  );
};
