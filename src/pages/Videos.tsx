import { motion } from "framer-motion";
import { Play, ArrowUpRight, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: "PXScuHz-7hw",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/PXScuHz-7hw/maxresdefault.jpg",
  },
  {
    id: "pEV2SuckQYM",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/pEV2SuckQYM/maxresdefault.jpg",
  },
  {
    id: "9uvq7BMP5t4",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/9uvq7BMP5t4/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
  {
    id: "LXb3EKWsInQ",
    title: "Latest Video",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
  },
];

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

const Videos = () => {
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Youtube className="w-3.5 h-3.5" />
              Videos
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
              Watch, learn
              <br />
              <span className="text-primary">& grow</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Video content on branding, business, and the creator journey. Subscribe on YouTube for the latest drops.
            </p>
            <motion.a
              href="https://www.youtube.com/@conrevin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YouTube
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 pt-8">
        <div className="container-narrow">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video) => (
              <motion.a
                key={video.id}
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                  <div className="absolute inset-0 bg-foreground/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-0.5" />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">Watch on YouTube</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
