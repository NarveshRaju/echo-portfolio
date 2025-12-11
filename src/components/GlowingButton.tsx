import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface GlowingButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const GlowingButton = ({ children, to, onClick, variant = "primary", className = "" }: GlowingButtonProps) => {
  const baseStyles = "relative px-8 py-3 font-mono text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover-glow",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10",
  };

  const content = (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${className} inline-block`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-accent/30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
};

export default GlowingButton;
