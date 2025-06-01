"use client";

import { Code, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong team player and communicator",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Passionate about creating
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
              digital excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Im a passionate full-stack developer with over 3 years of
                experience creating innovative web applications and digital
                solutions. My journey in technology began with a fascination for
                how code can transform ideas into reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in modern technologies including Spring-Boot,
                Django, ReactJS, Angular, and cloud platforms. I believe in
                writing clean, maintainable code and creating user experiences
                that are both beautiful and functional.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers in the community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {highlights.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon
                        className="text-blue-600"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed ml-16">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img src="/profile_picture.jpg" alt="profile picture" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 blur-xl"></div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl text-gray-900 mb-1 font-bold">5+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
