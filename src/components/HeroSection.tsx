import { useState, useEffect } from "react";
import finalIntro from "@/assets/Final intro.mp4";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const scale = 1 + scrollY * 0.0003;

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      <video
        src={finalIntro}
        className="absolute inset-0 w-full h-full object-cover origin-center"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${Math.min(scale, 1.15)})`,
        }}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroSection;
