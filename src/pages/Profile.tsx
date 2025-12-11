import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import GlowingButton from "@/components/GlowingButton";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";

const Profile = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <PageLayout title="Profile" subtitle="Get to know me better">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <ScrollReveal className="md:col-span-1">
          <motion.div
            className="glass-card p-8 text-center"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-mono font-bold text-gradient">YN</span>
              </div>
            </motion.div>

            <h2 className="text-2xl font-mono font-bold text-foreground mb-2">
              Your Name
            </h2>
            <p className="text-primary font-mono text-sm mb-4">Full Stack Developer</p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>City, Country</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-6">
              <Calendar className="w-4 h-4" />
              <span>Active since 2021</span>
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* About & Skills */}
        <div className="md:col-span-2 space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-mono font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">&lt;</span> About Me <span className="text-primary">/&gt;</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate developer with a keen eye for creating elegant solutions to complex problems. 
                My journey started in 2021, and since then, I've been on an incredible path of learning, 
                building, and winning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise spanning from frontend to backend technologies, I thrive in environments 
                that challenge me to push boundaries and deliver exceptional results. Whether it's a 
                hackathon or a production-grade application, I bring the same level of dedication and creativity.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-mono font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">&lt;</span> Skills <span className="text-primary">/&gt;</span>
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, groupIndex) => (
                  <div key={skillGroup.category}>
                    <p className="text-sm text-primary font-mono uppercase tracking-wider mb-3">
                      {skillGroup.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-secondary rounded-lg text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex gap-4">
              <GlowingButton to="/achievements">View Achievements</GlowingButton>
              <GlowingButton to="/projects" variant="secondary">See Projects</GlowingButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
