import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const navLinks = [{
  label: "Home",
  href: "#"
}, {
  label: "Products",
  href: "/products",
  isRoute: true
}, {
  label: "Videos",
  href: "/videos",
  isRoute: true
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return <motion.nav initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="fixed top-0 left-0 right-0 z-50 bg-[#161616] border-b border-white/10">
      <div className="container-narrow px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-xl md:text-2xl font-bold font-display text-white hover:text-white/90 transition-colors">
            Conrevin<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.label} href={link.href} onClick={(e) => { if ((link as any).isRoute) { e.preventDefault(); navigate(link.href); } }} className="text-white/90 hover:text-white font-medium transition-colors">
                {link.label}
              </a>)}
            {/* <motion.a href="/blogs" onClick={(e) => { e.preventDefault(); navigate("/blogs"); }} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
              Blogs
            </motion.a> */}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="md:hidden py-4 border-t border-white/10 bg-[#161616]">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.label} href={link.href} onClick={(e) => { if ((link as any).isRoute) { e.preventDefault(); navigate(link.href); } setIsOpen(false); }} className="text-white/90 hover:text-white font-medium transition-colors py-2">
                  {link.label}
                </a>)}
              <a href="/blogs" onClick={(e) => { e.preventDefault(); navigate("/blogs"); setIsOpen(false); }} className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center mt-2">
                Blogs
              </a>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;