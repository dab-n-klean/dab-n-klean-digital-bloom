import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import tissueBoxImg from "@/assets/tissue-box-anim.png";

gsap.registerPlugin(ScrollTrigger);

export const TissueBoxAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);
  const tissueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      // Animate tissue pulling out on scroll
      gsap.to(tissueRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: -100,
        ease: "none",
      });

      // Subtle float animation for the box
      gsap.to(boxRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, boxRef);

    return () => ctx.revert();
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={boxRef}
      className="fixed bottom-6 right-6 z-40 glass-card rounded-2xl p-4 w-32 h-32 md:w-40 md:h-40 overflow-hidden"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1 right-1 h-6 w-6 opacity-60 hover:opacity-100"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className="relative w-full h-full flex items-end justify-center">
        <div
          ref={tissueRef}
          className="absolute bottom-0 w-full h-full transition-transform"
          style={{
            backgroundImage: `url(${tissueBoxImg})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};
