import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Sparkles, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const GUMROAD_STORE = "https://conrevin.gumroad.com/";

const products = [
  {
    id: 1,
    title: "Hacks on Threads: 30 Days to Grow Faster and start selling + Notion template",
    description: "Grow faster on Threads and start selling. Includes a Notion template to track your 30-day journey.",
    price: "$13",
    category: "PDF + Notion Template",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    url: GUMROAD_STORE,
    icon: Sparkles,
    accent: "from-primary/20 to-accent/30",
  },
  {
    id: 2,
    title: "Canva Pro - $2.99 (Per month)",
    description: "Get Canva Pro at an affordable monthly rate for all your design needs.",
    price: "$2.99/mo",
    category: "Subscription",
    image: "https://images.unsplash.com/photo-1561070791-2526d30794bc?w=800&h=600&fit=crop",
    url: GUMROAD_STORE,
    icon: Palette,
    accent: "from-accent/20 to-primary/30",
  },
  {
    id: 3,
    title: "How I Learned to Love 12–14 Hour Workdays",
    description: "A personal guide to finding balance and purpose in long workdays. Pay what you want.",
    price: "$0+",
    category: "eBook",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    url: GUMROAD_STORE,
    icon: BookOpen,
    accent: "from-primary/10 to-accent/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container-narrow px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold font-display text-foreground hover:text-foreground/80 transition-colors"
          >
            Conrevin<span className="text-primary">.</span>
          </Link>
          <motion.a
            href={GUMROAD_STORE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Visit Shop
          </motion.a>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-12 lg:px-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Digital Products
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
              Tools to level
              <br />
              <span className="text-primary">up your game</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Curated digital resources — eBooks, templates, and subscriptions designed to help you grow faster and work smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="container-narrow">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.a
                  key={product.id}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group block relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-500 hover:shadow-elevated"
                >
                  <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-60 z-10 group-hover:opacity-30 transition-opacity duration-700`} />
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                            {product.category}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                          {product.title}
                        </h2>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
                          {product.price}
                        </span>
                        <motion.div
                          className="flex items-center gap-2 text-sm font-semibold text-primary"
                          whileHover={{ x: 4 }}
                        >
                          Get it now
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <div className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="container-narrow">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
