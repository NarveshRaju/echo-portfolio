import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "City, Country",
      period: "2021 - 2025",
      gpa: "9.0 CGPA",
      highlights: [
        "Dean's List - All Semesters",
        "Technical Club Lead",
        "Organized 10+ Tech Events",
        "Research Publication in AI",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream (PCM)",
      institution: "Your School Name",
      location: "City, Country",
      period: "2019 - 2021",
      gpa: "95%",
      highlights: [
        "School Topper in Computer Science",
        "Science Club President",
        "National Level Quiz Winner",
      ],
    },
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2024" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2023" },
    { name: "Meta Frontend Developer", issuer: "Meta", year: "2023" },
    { name: "IBM Data Science", issuer: "IBM", year: "2022" },
  ];

  return (
    <PageLayout title="Education" subtitle="My academic journey and continuous learning">
      <div className="space-y-12">
        {/* Main Education */}
        {education.map((edu, index) => (
          <ScrollReveal key={edu.degree} delay={index * 0.1}>
            <motion.div
              className="glass-card p-8 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.field}</p>
                  <p className="text-lg text-foreground mb-3">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-accent font-medium">
                      <Award className="w-4 h-4" />
                      {edu.gpa}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Certifications */}
        <ScrollReveal delay={0.3}>
          <h2 className="text-3xl font-mono font-bold text-center mb-8 text-gradient">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="glass-card p-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
};

export default Education;
