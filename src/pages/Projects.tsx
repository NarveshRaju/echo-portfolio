import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Github, Layers, Star } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Healthcare Platform",
      description: "An AI-powered platform for early disease detection using machine learning models and patient health data analysis.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      category: "web",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "Scalable messaging application with end-to-end encryption, file sharing, and video calling capabilities.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600",
      category: "web",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "IoT Smart Home System",
      description: "Complete IoT ecosystem for home automation with mobile app control and voice assistant integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      category: "iot",
      technologies: ["Arduino", "React Native", "Firebase", "MQTT"],
      github: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology for tamper-proof elections.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600",
      category: "blockchain",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "ML Stock Predictor",
      description: "Machine learning model for stock market prediction using historical data and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
      category: "ai",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      github: "#",
      live: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI / ML" },
    { id: "web", label: "Web Apps" },
    { id: "iot", label: "IoT" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <PageLayout title="Projects" subtitle="A collection of things I've built with passion and creativity">
      {/* Filters */}
      <ScrollReveal className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-lg font-mono text-sm transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <motion.div
              className="glass-card overflow-hidden group h-full flex flex-col"
              whileHover={{ y: -10 }}
              layout
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-mono text-primary-foreground">Featured</span>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-mono uppercase">{project.category}</span>
                </div>

                <h3 className="text-xl font-mono font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/70 rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground text-lg">No projects found in this category.</p>
        </motion.div>
      )}
    </PageLayout>
  );
};

export default Projects;
