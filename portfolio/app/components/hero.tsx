"use client";

import { ArrowDown, Download, ArrowRight } from "lucide-react";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Image from "next/image";

const infiniteScrollItems = [
  {
    content: (
      <Image
        src="/file.svg"
        alt="File Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/globe.svg"
        alt="Globe Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/globe.svg"
        alt="Globe Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/next.svg"
        alt="Next.js Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/profile_picture.jpg"
        alt="Profile Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/profile_picture.jpg"
        alt="Profile Project"
        width={48}
        height={48}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/vercel.svg"
        alt="Vercel Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/vercel.svg"
        alt="Vercel Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/window.svg"
        alt="Window Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/window.svg"
        alt="Window Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
  {
    content: (
      <Image
        src="/window.svg"
        alt="Window Project"
        width={48}
        height={48}
        style={{
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      />
    ),
  },
];

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
      className="relative top-40 min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* InfiniteScroll Background */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.08 }}
      >
        <InfiniteScroll
          width="40rem"
          maxHeight="80vh"
          negativeMargin="-1em"
          items={infiniteScrollItems}
          itemMinHeight={60}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.7}
          autoplayDirection="down"
          pauseOnHover={false}
        />
      </div>
      {/* Strategically Cropped Images */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Left Cropped Image - Shows right half of a portrait */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 h-96 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=400')`,
              backgroundPosition: "60% center", // Shows right side of face/portrait
              clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 40% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-60" />
        </div>

        {/* Right Cropped Image - Shows left half of a different image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=400')`,
              backgroundPosition: "40% center", // Shows left side of face/portrait
              clipPath: "polygon(0% 0%, 60% 0%, 60% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-60" />
        </div>

        {/* Top Cropped Image - Shows bottom half */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-64 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              backgroundPosition: "center 70%", // Shows bottom portion
              clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-60" />
        </div>

        {/* Bottom Cropped Image - Shows top half */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              backgroundPosition: "center 30%", // Shows top portion
              clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-12 text-center">
        <div className="space-y-24">
          {/* Large Typography */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-9xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-extralight text-black tracking-tighter leading-none">
                KALPA PERERA
              </h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto" />

              <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-light tracking-wide leading-relaxed">
                CREATIVE DEVELOPER
              </p>

              <p className="text-lg sm:text-xl text-black/60 font-light tracking-wider max-w-2xl mx-auto">
                Crafting exceptional digital experiences through innovative
                design and cutting-edge technology
              </p>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-28 justify-center items-center pt-3">
            {/* Animated Explore Button */}
            <button
              onClick={scrollToAbout}
              className="group relative overflow-hidden bg-black text-white px-12 py-5 text-lg font-medium tracking-wide transition-all duration-500 hover:bg-white hover:text-black border-2 border-black"
            >
              <span className="relative z-10 flex items-center gap-5">
                EXPLORE WORK
                <div>
                  <ArrowRight size={25} />
                </div>
              </span>
              <div />
            </button>

            {/* Animated Download Button */}
            <a href="200515904580 Kalpa Perera CV.pdf" download>
              <button className="group flex items-center gap-5 text-black/70 hover:text-black text-lg font-light tracking-wide transition-all duration-300">
                <div className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center group-hover:border-black/40 transition-colors duration-300">
                  <Download size={20} />
                </div>
                DOWNLOAD CV
              </button>
            </a>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-12 pt-16 max-w-xl mx-auto">
            {[
              { number: "5+", label: "Projects" },
              { number: "3+", label: "Years" },
              { number: "100%", label: "Passion" },
            ].map((state, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-black mb-2">
                  {state.number}
                </div>
                <div className="text-xs text-black/50 font-medium tracking-widest uppercase">
                  {state.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-50 -right-20 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-3 text-black/40 hover:text-black/70 transition-colors duration-300 group"
          >
            <span className="text-xs font-light tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-black/30 to-transparent" />
            <div className="w-8 h-8 border border-black/20 rounded-full flex items-center justify-center group-hover:border-black/40 transition-colors duration-300">
              <ArrowDown size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-black rounded-full" />
      <div className="absolute top-1/3 right-24 w-2 h-2 bg-black rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-black rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-black rounded-full" />
    </section>
  );
}
