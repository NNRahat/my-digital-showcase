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
                href="mailto:conrevin936@gmail.com"
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                conrevin936@gmail.com
              </a>
              {/* <a
                href=""
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a> */}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="space-y-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Follow
            </h3>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.threads.com/@conrevin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Threads
              </a>
              <a
                href="https://www.instagram.com/conrevin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@conrevin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                TikTok
              </a>
              <a
                href="https://www.youtube.com/@conrevin"
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
            © 2026 All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Be the guy who gives it all
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
