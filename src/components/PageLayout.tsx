import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import InteractiveBackground from "./InteractiveBackground";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen gradient-bg relative">
      <InteractiveBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-gradient mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
