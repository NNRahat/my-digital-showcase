import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Ultimate Notion Dashboard",
    description: "All-in-one productivity system with 50+ templates for life and business management",
    price: "$49",
    originalPrice: "$79",
    rating: 4.9,
    reviews: 324,
    category: "Notion Templates",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Creator's Content Toolkit",
    description: "100+ Canva templates for social media, thumbnails, and marketing materials",
    price: "$39",
    originalPrice: "$59",
    rating: 4.8,
    reviews: 198,
    category: "Design Templates",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Digital Product Masterclass",
    description: "Learn how to create, launch, and scale digital products from scratch",
    price: "$199",
    originalPrice: "$299",
    rating: 5.0,
    reviews: 89,
    category: "Online Course",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Email Marketing Swipe File",
    description: "50+ proven email templates that convert subscribers into customers",
    price: "$29",
    originalPrice: "$49",
    rating: 4.7,
    reviews: 156,
    category: "Marketing",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Freelancer Finance Tracker",
    description: "Google Sheets template to track income, expenses, and taxes effortlessly",
    price: "$19",
    originalPrice: "$29",
    rating: 4.9,
    reviews: 412,
    category: "Spreadsheets",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "YouTube Growth Blueprint",
    description: "Step-by-step guide to grow your channel from 0 to 100K subscribers",
    price: "$79",
    originalPrice: "$129",
    rating: 4.8,
    reviews: 267,
    category: "eBook",
    featured: true,
    image: "/placeholder.svg",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Shop
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3">
            Digital Products Collection
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Premium resources to level up your productivity, creativity, and business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card border border-border overflow-hidden shadow-soft card-hover">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold text-sm">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-display">{product.price}</span>
                      <span className="text-muted-foreground line-through text-sm">
                        {product.originalPrice}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-card transition-all"
                    >
                      Get it
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
