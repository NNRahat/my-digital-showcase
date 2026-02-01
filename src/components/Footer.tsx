import { motion } from "framer-motion";
import { Twitter, Youtube, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@alexmorgan", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/alexmorgan", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/alexmorgan", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexmorgan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@alexmorgan.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="section-padding bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Let's Connect
            </h2>
            <p className="text-background/70 mt-3 text-lg">
              Follow me for daily tips and updates
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-background/10">
            <p className="text-sm text-background/60 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Alex Morgan
            </p>
            <p className="text-xs text-background/40 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
