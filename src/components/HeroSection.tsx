import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
const HeroSection = () => {
  return <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none">
                2025
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-none">
                Portfolio
              </h2>
            </div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="aspect-square overflow-hidden">
                
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=600&fit=crop" alt="Building exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>
            
            <motion.a href="#work" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="inline-flex items-center justify-center w-full px-8 py-4 border border-foreground text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;