import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Trophy, Calendar, Award, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  event: string;
  date: string;
  year: number;
  category: "hackathon" | "competition" | "recognition" | "certification";
  description: string;
  certificate?: string;
  position?: string;
}

const Achievements = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    { id: 1, title: "National Hackathon Winner", event: "HackNation 2024", date: "Nov 2024", year: 2024, category: "hackathon", description: "Led a team of 4 to build an AI-powered healthcare solution that won first place among 500+ teams.", position: "1st Place", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 2, title: "Best Innovation Award", event: "TechFest 2024", date: "Sep 2024", year: 2024, category: "recognition", description: "Recognized for developing a novel approach to sustainable tech solutions.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 3, title: "Smart India Hackathon", event: "SIH 2024", date: "Aug 2024", year: 2024, category: "hackathon", description: "Finalist at the national level Smart India Hackathon with a gov-tech solution.", position: "Finalist", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 4, title: "Google Cloud Champion", event: "Google Cloud", date: "Jul 2024", year: 2024, category: "certification", description: "Achieved Google Cloud Champion status with expertise in cloud architecture.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 5, title: "International Coding Contest", event: "CodeForces", date: "Jun 2024", year: 2024, category: "competition", description: "Ranked in top 100 globally in international programming contest.", position: "Top 100", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 6, title: "Research Paper Published", event: "IEEE Conference", date: "Mar 2024", year: 2024, category: "recognition", description: "Published research on machine learning optimization techniques.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 7, title: "State Level Hackathon", event: "HackState 2023", date: "Dec 2023", year: 2023, category: "hackathon", description: "Won first place in state-level hackathon with a fintech solution.", position: "1st Place", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 8, title: "AWS Solutions Architect", event: "Amazon AWS", date: "Oct 2023", year: 2023, category: "certification", description: "Earned AWS Solutions Architect Associate certification.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 9, title: "Hackathon Runner-up", event: "DevHack 2023", date: "Aug 2023", year: 2023, category: "hackathon", description: "Second place in 36-hour hackathon building an EdTech platform.", position: "2nd Place", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 10, title: "Open Source Contributor Award", event: "Hacktoberfest", date: "Oct 2023", year: 2023, category: "recognition", description: "Top contributor badge for significant open source contributions.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 11, title: "Coding Bootcamp Champion", event: "CodeKata", date: "Jun 2023", year: 2023, category: "competition", description: "Won coding bootcamp competition among 200+ participants.", position: "Champion", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 12, title: "Meta Frontend Certificate", event: "Meta/Coursera", date: "Apr 2023", year: 2023, category: "certification", description: "Completed Meta Frontend Developer Professional Certificate.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 13, title: "College Tech Fest Winner", event: "TechnoVIT", date: "Feb 2023", year: 2023, category: "hackathon", description: "First place in inter-college technical festival hackathon.", position: "1st Place", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 14, title: "Best Project Award", event: "University", date: "Nov 2022", year: 2022, category: "recognition", description: "Awarded for best semester project in department.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 15, title: "Regional Hackathon", event: "HackRegion 2022", date: "Sep 2022", year: 2022, category: "hackathon", description: "Won regional hackathon with an IoT-based solution.", position: "Winner", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 16, title: "Python Certification", event: "HackerRank", date: "Jul 2022", year: 2022, category: "certification", description: "Achieved Gold level in Python certification.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 17, title: "Intra-College Coding", event: "CodeWars", date: "May 2022", year: 2022, category: "competition", description: "First place in college coding competition.", position: "1st Place", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 18, title: "Web Dev Bootcamp", event: "Udemy", date: "Mar 2022", year: 2022, category: "certification", description: "Completed comprehensive web development bootcamp.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 19, title: "First Hackathon Win", event: "Freshman Hack", date: "Nov 2021", year: 2021, category: "hackathon", description: "Won first hackathon as a freshman with a productivity app.", position: "Winner", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
    { id: 20, title: "Dean's List", event: "University", date: "Sep 2021", year: 2021, category: "recognition", description: "Made it to Dean's List in first semester.", certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800" },
  ];

  const years = [2024, 2023, 2022, 2021];
  
  const categoryColors = {
    hackathon: "bg-primary/20 text-primary",
    competition: "bg-accent/20 text-accent",
    recognition: "bg-emerald-500/20 text-emerald-400",
    certification: "bg-amber-500/20 text-amber-400",
  };

  const categoryIcons = {
    hackathon: Trophy,
    competition: Award,
    recognition: Award,
    certification: Award,
  };

  const filteredAchievements = selectedYear 
    ? achievements.filter(a => a.year === selectedYear)
    : achievements;

  return (
    <PageLayout title="Achievements" subtitle="A timeline of wins, recognitions, and milestones from 2021 to present">
      {/* Year Filter */}
      <ScrollReveal className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => setSelectedYear(null)}
            className={`px-6 py-3 rounded-lg font-mono text-sm transition-all ${
              selectedYear === null 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-foreground hover:bg-primary/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All ({achievements.length})
          </motion.button>
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                selectedYear === year 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-foreground hover:bg-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year} ({achievements.filter(a => a.year === year).length})
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative">
        <div className="timeline-line" />

        <div className="space-y-8">
          {filteredAchievements.map((achievement, index) => {
            const Icon = categoryIcons[achievement.category];
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal 
                key={achievement.id} 
                direction={isLeft ? "left" : "right"}
                delay={index * 0.05}
              >
                <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <motion.div
                    className={`w-[calc(50%-2rem)] ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="glass-card p-6 cursor-pointer hover-glow"
                      onClick={() => setSelectedAchievement(achievement)}
                      layoutId={`card-${achievement.id}`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                        <span className={`px-2 py-1 rounded-full text-xs font-mono ${categoryColors[achievement.category]}`}>
                          {achievement.category}
                        </span>
                        {achievement.position && (
                          <span className="px-2 py-1 bg-primary/30 text-primary rounded-full text-xs font-mono">
                            {achievement.position}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-mono font-bold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.event}</p>
                      <div className={`flex items-center gap-1 text-xs text-muted-foreground ${isLeft ? "justify-end" : "justify-start"}`}>
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-card border-4 border-primary flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        boxShadow: ["0 0 10px hsl(var(--primary) / 0.4)", "0 0 20px hsl(var(--primary) / 0.6)", "0 0 10px hsl(var(--primary) / 0.4)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selectedAchievement.id}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono mb-3 ${categoryColors[selectedAchievement.category]}`}>
                    {selectedAchievement.category}
                  </span>
                  <h2 className="text-3xl font-mono font-bold text-foreground mb-2">
                    {selectedAchievement.title}
                  </h2>
                  <p className="text-lg text-primary">{selectedAchievement.event}</p>
                  <p className="text-muted-foreground">{selectedAchievement.date}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedAchievement(null)}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {selectedAchievement.position && (
                <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg font-mono text-lg mb-4">
                  {selectedAchievement.position}
                </div>
              )}

              <p className="text-muted-foreground text-lg mb-6">
                {selectedAchievement.description}
              </p>

              {selectedAchievement.certificate && (
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="bg-secondary/50 px-4 py-2 flex items-center justify-between">
                    <span className="text-sm font-mono text-muted-foreground">Certificate</span>
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div className="aspect-video bg-secondary/30 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Award className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                      <p className="font-mono">Certificate Preview</p>
                      <p className="text-sm">Upload your certificate image here</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Achievements;
