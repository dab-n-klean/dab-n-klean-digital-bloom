import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-content text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
            About DAB'N'KLEAN
          </h2>

          <div className="about-content glass-card rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              DAB'N'KLEAN was born from a simple belief: everyday hygiene products
              should be exceptional. We understand that tissues aren't just paper —
              they're an essential part of comfort, cleanliness, and care in your
              daily life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From households to hotels, from kitchen counters to office desks,
              we've made it our mission to deliver premium quality that you can
              feel in every touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="about-content glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide the highest quality tissue and hygiene products that
                combine exceptional softness, strength, and sustainability. We're
                committed to making premium hygiene accessible to every home and
                business.
              </p>
            </div>

            <div className="about-content glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Values
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Uncompromising quality and hygiene standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comfort and care in every product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sustainable and responsible practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reliable consistency you can trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
