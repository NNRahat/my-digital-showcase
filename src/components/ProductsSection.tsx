import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GUMROAD_STORE = "https://conrevin.gumroad.com/";

const products = [
  {
    id: 1,
    title: "Hacks on Threads: 30 Days to Grow Faster and start selling + Notion template",
    description: "Grow faster on Threads and start selling. Includes a Notion template to track your 30-day journey.",
    price: "$13",
    category: "PDF + Notion Template",
    image: "src/assets/hacks on threads.png",
    url: "https://conrevin.gumroad.com/l/HacksonThreads",
  },
  {
    id: 2,
    title: "Canva Pro - $2.99 (Per month)",
    description: "Get Canva Pro at an affordable monthly rate for all your design needs.",
    price: "$2.99/mo",
    category: "Subscription",
    image: "src/assets/canva pro.png",
    url: "https://conrevin.gumroad.com/l/canvapro",
  },
  {
    id: 3,
    title: "How I Learned to Love 12–14 Hour Workdays",
    description: "A personal guide to finding balance and purpose in long workdays. Pay what you want.",
    price: "$0+",
    category: "eBook",
    image: "src/assets/Consistency.png",
    url: "https://conrevin.gumroad.com/l/workfor12to14",
  },
];

const ProductsSection = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-6 mb-16"
        >
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-lg font-display font-medium whitespace-nowrap">
              Digital Products
            </h2>
            <div className="divider-line flex-1" />
          </div>
          <motion.a
            href={GUMROAD_STORE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.7 }}
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            Visit Shop
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold group-hover:opacity-70 transition-opacity">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-lg font-display font-bold">{product.price}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
