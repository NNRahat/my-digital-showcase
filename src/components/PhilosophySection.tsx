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
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=1000&fit=crop"
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
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-light leading-relaxed text-muted-foreground">
              I believe that good architectural design is not just about creating an intelligent blend of style, form and function. It is also a form of storytelling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
