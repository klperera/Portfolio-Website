"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  const { scrollY } = useScroll();
  const islandScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const islandOpacity = useTransform(scrollY, [0, 50], [0.9, 1]);
  const islandY = useTransform(scrollY, [0, 200], [0, 5]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      style={{ scale: islandScale, opacity: islandOpacity, y: islandY }}
    >
      {/* Dynamic Island Container */}
      <motion.div
        layout
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Main Island */}
        <motion.nav
          layout
          className={`relative overflow-hidden transition-all duration-700 ease-out ${
            isMenuOpen ? "rounded-3xl px-8 py-6" : "rounded-full px-6 py-3"
          }`}
          style={{
            background: isScrolled
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: `1px solid ${
              isScrolled
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(255, 255, 255, 0.2)"
            }`,
            boxShadow: isScrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)"
              : "0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.05)",
          }}
          whileHover={{
            scale: 1.02,
            y: -2,
            boxShadow: isScrolled
              ? "0 12px 40px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              : "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col items-center px-4 py-3 rounded-2xl text-xs font-medium tracking-wide transition-all duration-300 group cursor-pointer ${
                    activeSection === item.id
                      ? isScrolled
                        ? "text-white bg-white/20"
                        : "text-black bg-black/20"
                      : isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-black/70 hover:text-black hover:bg-black/10"
                  }`}
                >
                  <IconComponent
                    size={18}
                    className={`mb-1 transition-all duration-300 ${
                      activeSection === item.id
                        ? isScrolled
                          ? "text-white"
                          : "text-black"
                        : isScrolled
                        ? "text-white/70 group-hover:text-white"
                        : "text-black/70 group-hover:text-black"
                    }`}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Active dot indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center justify-between min-w-[200px]">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">KP</span>
              </div>
              <span
                className={`text-sm font-medium ${
                  isScrolled ? "text-white/90" : "text-black/90"
                }`}
              >
                Portfolio
              </span>
            </motion.div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-black/80 hover:text-black hover:bg-black/10"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Items */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden mt-6 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-3 gap-4">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center space-y-2 p-4 rounded-2xl transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                            : isScrolled
                            ? "text-white/70 hover:text-white hover:bg-white/10"
                            : "text-black/70 hover:text-black hover:bg-black/10"
                        }`}
                      >
                        <IconComponent size={20} />
                        <span className="text-xs font-medium">
                          {item.label}
                        </span>

                        {activeSection === item.id && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Ambient Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.3 : 1.1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Top Reflection Effect */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-md"
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Activity Indicators */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className={`w-1 h-1 rounded-full ${
                isScrolled ? "bg-white/40" : "bg-black/30"
              }`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Side Connection Lines */}
        <motion.div
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-white/20"
          animate={{
            opacity: isHovered ? 1 : 0,
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-l from-transparent to-white/20"
          animate={{
            opacity: isHovered ? 1 : 0,
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Top Anchor Line */}
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-t from-white/20 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0,
            scaleY: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Notch Simulation */}
        <motion.div
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black/20 rounded-full"
          animate={{
            opacity: isScrolled ? 0.3 : 0,
            scaleX: isScrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating Status Indicator */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Haptic Feedback Simulation */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/10"
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
          opacity: isHovered ? [0, 0.3, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />

      {/* Screen Edge Integration */}
      <motion.div
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-gradient-to-b from-black/5 to-transparent"
        animate={{
          opacity: isScrolled ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Header;
