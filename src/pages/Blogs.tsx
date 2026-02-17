import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Personal Brand That Actually Sells",
    excerpt: "Your personal brand is more than a logo. Learn the strategies I used to turn my online presence into a revenue-generating machine.",
    category: "Branding",
    readTime: "6 min read",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Why Threads Is the Best Platform for Creators in 2026",
    excerpt: "Threads has quietly become a powerhouse for creators. Here's why you should be paying attention — and how to get started.",
    category: "Social Media",
    readTime: "4 min read",
    date: "Feb 5, 2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "The Art of Working 12-Hour Days Without Burning Out",
    excerpt: "Long hours don't have to mean burnout. Discover the mindset shifts and routines that keep me energized and productive.",
    category: "Productivity",
    readTime: "8 min read",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Designing Digital Products People Actually Want to Buy",
    excerpt: "Most digital products fail because they solve problems no one has. Here's my framework for creating products that sell themselves.",
    category: "Business",
    readTime: "5 min read",
    date: "Jan 20, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Minimalism in Design: Less Really Is More",
    excerpt: "In a world of visual noise, minimalism stands out. Explore how stripping things back can make your designs more impactful.",
    category: "Design",
    readTime: "3 min read",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    featured: false,
  },
];

const categories = ["All", "Branding", "Social Media", "Productivity", "Business", "Design"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const Blogs = () => {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

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
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-6 md:px-12 lg:px-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Blog
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
              Thoughts, stories
              <br />
              <span className="text-primary">& insights</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Articles on branding, productivity, design, and the creator economy. Real lessons from real experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-12 lg:px-24 pb-8">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-foreground text-background"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-6 md:px-12 lg:px-24 pb-12">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <motion.img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="container-narrow">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 gap-8"
          >
            {rest.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-5">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
