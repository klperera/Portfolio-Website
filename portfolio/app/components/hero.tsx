"use client";

import { ArrowDown, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative top-20 min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Strategically Cropped Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Cropped Image - Shows right half of a portrait */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-96 overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=400')`,
              backgroundPosition: "60% center", // Shows right side of face/portrait
              clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 40% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Right Cropped Image - Shows left half of a different image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=400')`,
              backgroundPosition: "40% center", // Shows left side of face/portrait
              clipPath: "polygon(0% 0%, 60% 0%, 60% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Top Cropped Image - Shows bottom half */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-64 overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              backgroundPosition: "center 70%", // Shows bottom portion
              clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Bottom Cropped Image - Shows top half */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              backgroundPosition: "center 30%", // Shows top portion
              clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="space-y-24"
        >
          {/* Large Typography */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="overflow-hidden"
            >
              <h1 className="text-9xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-extralight text-black tracking-tighter leading-none">
                KALPA PERERA
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto" />

              <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-light tracking-wide leading-relaxed">
                CREATIVE DEVELOPER
              </p>

              <p className="text-lg sm:text-xl text-black/60 font-light tracking-wider max-w-2xl mx-auto">
                Crafting exceptional digital experiences through innovative
                design and cutting-edge technology
              </p>
            </motion.div>
          </div>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-28 justify-center items-center pt-3"
          >
            {/* Animated Explore Button */}
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="group relative overflow-hidden bg-black text-white px-12 py-5 text-lg font-medium tracking-wide transition-all duration-500 hover:bg-white hover:text-black border-2 border-black"
            >
              <span className="relative z-10 flex items-center gap-5">
                EXPLORE WORK
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={25} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            {/* Animated Download Button */}
            <a href="200515904580 Kalpa Perera CV.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-5 text-black/70 hover:text-black text-lg font-light tracking-wide transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center group-hover:border-black/40 transition-colors duration-300"
                >
                  <Download size={20} />
                </motion.div>
                DOWNLOAD CV
              </motion.button>
            </a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
            className="grid grid-cols-3 gap-12 pt-16 max-w-xl mx-auto"
          >
            {[
              { number: "5+", label: "Projects" },
              { number: "3+", label: "Years" },
              { number: "100%", label: "Passion" },
            ].map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 2 + index * 0.1,
                }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.2 + index * 0.1,
                  }}
                  className="text-3xl lg:text-4xl font-light text-black mb-2"
                >
                  {state.number}
                </motion.div>
                <div className="text-xs text-black/50 font-medium tracking-widest uppercase">
                  {state.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-22 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-3 text-black/40 hover:text-black/70 transition-colors duration-300 group"
          >
            <span className="text-xs font-light tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-black/30 to-transparent" />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute top-1/4 left-20 w-2 h-2 bg-black rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute top-1/3 right-24 w-2 h-2 bg-black rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-black rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1, delay: 3.6 }}
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-black rounded-full"
      />
    </section>
  );
}
