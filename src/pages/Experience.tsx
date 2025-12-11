import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, Calendar, Building, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tech Company A",
      type: "Internship",
      period: "Jun 2024 - Present",
      location: "Remote",
      description: "Building scalable microservices and contributing to core product features that serve millions of users.",
      responsibilities: [
        "Developed REST APIs handling 10K+ requests/minute",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams in an Agile environment",
        "Led code reviews and mentored junior developers",
      ],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Startup B",
      type: "Part-time",
      period: "Jan 2024 - May 2024",
      location: "Hybrid",
      description: "End-to-end development of web applications from concept to deployment.",
      responsibilities: [
        "Built responsive React applications with modern UI/UX",
        "Designed and implemented database schemas",
        "Integrated third-party APIs and payment gateways",
        "Optimized application performance by 40%",
      ],
      technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      type: "Volunteer",
      period: "2022 - Present",
      location: "Remote",
      description: "Active contributor to open source projects with merged PRs in popular repositories.",
      responsibilities: [
        "Contributed to 20+ open source repositories",
        "Fixed critical bugs in production codebases",
        "Improved documentation and developer experience",
        "Participated in Hacktoberfest 2022, 2023",
      ],
      technologies: ["JavaScript", "Python", "React", "Django", "Git"],
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      type: "Freelance",
      period: "2021 - 2023",
      location: "Remote",
      description: "Delivered custom web solutions for small businesses and startups.",
      responsibilities: [
        "Developed 15+ websites for clients",
        "Managed projects from requirement gathering to delivery",
        "Maintained long-term client relationships",
        "Provided ongoing support and maintenance",
      ],
      technologies: ["WordPress", "React", "Node.js", "Firebase", "Figma"],
    },
  ];

  return (
    <PageLayout title="Experience" subtitle="My professional journey and contributions">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/0" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={exp.title + exp.company}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <div className={`flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="timeline-dot"
                    whileHover={{ scale: 1.5 }}
                    animate={{ boxShadow: ["0 0 10px hsl(var(--primary) / 0.4)", "0 0 20px hsl(var(--primary) / 0.6)", "0 0 10px hsl(var(--primary) / 0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`glass-card p-8 ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono uppercase rounded-full mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-mono font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
