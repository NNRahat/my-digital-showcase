import { motion } from "framer-motion";
import { Award, Users, Download, Star } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const stats = [
  { icon: Download, value: "50K+", label: "Downloads" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Products Created" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const HeroSection = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                Digital Creator & Entrepreneur
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Hi, I'm <span className="text-gradient">Alex Morgan</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                I create premium digital products that help creators and entrepreneurs 
                build better businesses. From templates to courses, I've got you covered.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-card hover:shadow-elevated transition-all duration-300"
              >
                Browse Products
              </motion.a>
              <motion.a
                href="#videos"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-300"
              >
                Watch Videos
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <span className="text-2xl font-bold font-display">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <img
                  src={heroPortrait}
                  alt="Alex Morgan - Digital Creator"
                  className="w-full h-full object-cover rounded-3xl bg-card"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
