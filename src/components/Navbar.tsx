import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Achievements", path: "/achievements" },
  { name: "Projects", path: "/projects" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6"
    >
      <div className="glass-card px-8 py-3 flex items-center gap-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <NavLink
              to={item.path}
              className="nav-link font-mono text-sm uppercase tracking-wider"
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
