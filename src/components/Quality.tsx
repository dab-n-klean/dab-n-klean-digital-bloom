import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Heart, Leaf, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Quality = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quality-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quality" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Quality & Sustainability
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="quality-item glass-card rounded-2xl p-8">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Uncompromising Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every DAB'N'KLEAN product undergoes rigorous quality control and
                hygiene testing. We maintain the highest standards throughout our
                manufacturing process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>ISO-certified manufacturing facilities</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Strict hygiene protocols at every stage</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular third-party quality audits</span>
                </li>
              </ul>
            </div>

            <div className="quality-item glass-card rounded-2xl p-8">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Skin-Friendly & Safe
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our tissues are dermatologically tested and safe for even the most
                sensitive skin. Food-contact products meet international safety
                standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dermatologically tested formulations</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Food-safe certified butter and wrapping paper</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hypoallergenic materials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="quality-item glass-card rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Leaf className="h-12 w-12 text-primary mr-4" />
              <h3 className="text-2xl font-semibold text-foreground">
                Our Commitment to Sustainability
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe in responsible manufacturing. DAB'N'KLEAN is committed to
              reducing our environmental impact while delivering exceptional products.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Responsible Sourcing
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sustainably sourced pulp and fibers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Partnership with eco-certified suppliers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Responsible forest management practices</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Eco-Friendly Practices
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reduced plastic packaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Recyclable and compostable materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Energy-efficient manufacturing processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
