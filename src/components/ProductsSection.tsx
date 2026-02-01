import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Ultimate Notion Dashboard",
    description: "All-in-one productivity system with 50+ templates for life and business management",
    price: "$49",
    category: "Notion Templates",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Creator's Content Toolkit",
    description: "100+ Canva templates for social media, thumbnails, and marketing materials",
    price: "$39",
    category: "Design Templates",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Digital Product Masterclass",
    description: "Learn how to create, launch, and scale digital products from scratch",
    price: "$199",
    category: "Online Course",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "YouTube Growth Blueprint",
    description: "Step-by-step guide to grow your channel from 0 to 100K subscribers",
    price: "$79",
    category: "eBook",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
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
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-lg font-display font-medium whitespace-nowrap">
            Digital Products
          </h2>
          <div className="divider-line flex-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href="#"
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
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
