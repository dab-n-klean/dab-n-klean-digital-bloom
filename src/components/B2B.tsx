import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Building2, Truck, Package, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface B2BProps {
  onEnquiryOpen: () => void;
}

export const B2B = ({ onEnquiryOpen }: B2BProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".b2b-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="b2b" ref={sectionRef} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              B2B & Bulk Orders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by hotels, restaurants, cafés, offices, and distributors across
              the region. Premium quality at scale.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Why Choose DAB'N'KLEAN for Your Business?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="b2b-item">
                <div className="flex items-start">
                  <Package className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Competitive Bulk Pricing
                    </h4>
                    <p className="text-muted-foreground">
                      Get the best rates for high-volume orders. The more you buy, the
                      more you save.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Truck className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Reliable Supply Chain
                    </h4>
                    <p className="text-muted-foreground">
                      Never run out. We ensure consistent, on-time delivery to keep
                      your operations running smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Building2 className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Custom Pack Sizes
                    </h4>
                    <p className="text-muted-foreground">
                      Flexible packaging options tailored to your business needs and
                      space requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Private Label Options
                    </h4>
                    <p className="text-muted-foreground">
                      Available for large orders. Put your brand on premium quality
                      tissue products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4 text-center">
                Industries We Serve
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Hotels
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Restaurants & Cafés
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Offices
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Healthcare Facilities
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Retail Stores
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Distributors
                </span>
                <span className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium">
                  Catering Services
                </span>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={scrollToContact} className="mr-4">
                Request Bulk Quote
              </Button>
              <Button size="lg" variant="outline" onClick={onEnquiryOpen}>
                Open Enquiry Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
