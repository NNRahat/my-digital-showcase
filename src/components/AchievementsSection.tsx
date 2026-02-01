import { motion } from "framer-motion";
import { Trophy, Target, Rocket, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Product Hunt #1",
    description: "Featured as Product of the Day with 1,200+ upvotes",
    year: "2024",
  },
  {
    icon: Target,
    title: "$500K+ Revenue",
    description: "Generated from digital products in the last 2 years",
    year: "2023",
  },
  {
    icon: Rocket,
    title: "100K+ YouTube Subs",
    description: "Building a community of creators and entrepreneurs",
    year: "2024",
  },
  {
    icon: Zap,
    title: "Top 1% Creator",
    description: "Recognized as a top creator on Gumroad marketplace",
    year: "2023",
  },
];

const AchievementsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A few highlights from my journey as a digital creator
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-soft card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-accent">{achievement.year}</span>
                <h3 className="text-xl font-bold font-display mt-1 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
