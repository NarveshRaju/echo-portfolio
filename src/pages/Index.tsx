import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlowingButton from "@/components/GlowingButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, Code, Trophy, Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const y = useTransform(smoothProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Trophy, label: "Achievements", value: "50+", color: "text-accent" },
    { icon: Code, label: "Projects", value: "30+", color: "text-primary" },
    { icon: Briefcase, label: "Experience", value: "3+ Years", color: "text-accent" },
    { icon: GraduationCap, label: "Certifications", value: "25+", color: "text-primary" },
  ];

  return (
    <div ref={containerRef} className="min-h-[300vh] gradient-bg relative">
      <InteractiveBackground />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        style={{ scale, opacity, y }}
        className="min-h-screen flex items-center justify-center relative z-10 px-6"
      >
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          >
            <motion.p
              className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my universe
            </motion.p>

            <motion.h1
              className="text-6xl md:text-8xl font-mono font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-gradient glow-text">Creative</span>
              <br />
              <span className="text-foreground">Developer</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Crafting digital experiences through code, innovation, and relentless pursuit of excellence since 2021.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <GlowingButton to="/achievements">View Achievements</GlowingButton>
              <GlowingButton to="/projects" variant="secondary">
                Explore Projects
              </GlowingButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-gradient">
              By The Numbers
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-8 text-center hover-glow cursor-pointer"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                  <p className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
              <span className="text-foreground">Ready to explore</span>
              <br />
              <span className="text-gradient">my journey?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              From hackathons to industry projects, dive into a timeline of achievements, skills, and creative solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <GlowingButton to="/profile">About Me</GlowingButton>
              <GlowingButton to="/experience" variant="secondary">
                My Experience
              </GlowingButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
