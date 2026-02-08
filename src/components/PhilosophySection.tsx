import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left - Title with Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <h2 className="text-lg font-display font-medium whitespace-nowrap">
              My Philosophy
            </h2>
            <div className="divider-line flex-1" />
          </motion.div>

          {/* Right - Empty for layout */}
          <div className="hidden lg:block" />

          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src="src\assets\487035bb-8d09-4870-830e-973b0551fd1d.png?w=800&h=1000&fit=crop"
              // src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=1000&fit=crop"
              alt="Architectural interior"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right - Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative pl-14">
              <img
                src="src/assets/pngwing.com.png"
                alt="Quotation mark"
                className="absolute -left-12 -top-12 w-24 h-24 opacity-60"
                aria-hidden="true"
              />
              <p className="text-xl md:text-2xl lg:text-3xl merriweather font-light leading-relaxed text-muted-foreground">
                I believe the internet rewards those who learn how to communicate, create, and sell. My goal is to help people turn simple skills into real income, real growth, and long-term freedom.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
