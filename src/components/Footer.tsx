import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="section-padding border-t border-border"
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Let's work together
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="space-y-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Follow
            </h3>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with precision
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
