import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Latest Video",
    views: "Watch on YouTube",
    duration: "",
    thumbnail: "https://img.youtube.com/vi/PXScuHz-7hw/hqdefault.jpg",
    url: "https://youtu.be/PXScuHz-7hw",
  },
  {
    id: 2,
    title: "Latest Video",
    views: "Watch on YouTube",
    duration: "",
    thumbnail: "https://img.youtube.com/vi/pEV2SuckQYM/hqdefault.jpg",
    url: "https://youtu.be/pEV2SuckQYM",
  },
  {
    id: 3,
    title: "Latest Video",
    views: "Watch on YouTube",
    duration: "",
    thumbnail: "https://img.youtube.com/vi/9uvq7BMP5t4/hqdefault.jpg",
    url: "https://youtu.be/9uvq7BMP5t4",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="section-padding bg-secondary/50">
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
              Latest Videos
            </h2>
            <div className="divider-line flex-1" />
          </div>
          <motion.a
            href="https://www.youtube.com/@conrevin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.7 }}
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                      <Play className="w-5 h-5 text-foreground fill-current ml-0.5" />
                    </div>
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-foreground text-background text-xs font-medium">
                      {video.duration}
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-display font-semibold group-hover:opacity-70 transition-opacity line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{video.views}</p>
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
