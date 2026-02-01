import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "How I Made $100K Selling Notion Templates",
    thumbnail: "/placeholder.svg",
    views: "245K views",
    duration: "18:42",
    url: "https://youtube.com/watch?v=example1",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Digital Products in 2024",
    thumbnail: "/placeholder.svg",
    views: "189K views",
    duration: "24:15",
    url: "https://youtube.com/watch?v=example2",
  },
  {
    id: 3,
    title: "5 Mistakes That Kill Your Online Business",
    thumbnail: "/placeholder.svg",
    views: "156K views",
    duration: "12:30",
    url: "https://youtube.com/watch?v=example3",
  },
  {
    id: 4,
    title: "My Morning Routine as a Full-Time Creator",
    thumbnail: "/placeholder.svg",
    views: "98K views",
    duration: "15:20",
    url: "https://youtube.com/watch?v=example4",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              YouTube
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3">
              Latest Videos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Tips, tutorials, and behind-the-scenes of building a digital business
            </p>
          </div>
          <motion.a
            href="https://youtube.com/@alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-semibold hover:shadow-card transition-all self-start md:self-auto"
          >
            Subscribe on YouTube
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-elevated">
                      <Play className="w-6 h-6 text-destructive-foreground fill-current ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-foreground/80 text-background text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold font-display group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">{video.views}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
