"use client";

import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "ReactJS", color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", color: "from-blue-600 to-blue-700" },
      { name: "Next.js", color: "from-gray-700 to-gray-900" },
      { name: "Tailwind CSS", color: "from-teal-500 to-cyan-600" },
      { name: "Angular", color: "from-green-500 to-emerald-600" },
      { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Java", color: "from-green-600 to-green-700" },
      { name: "Python", color: "from-blue-500 to-yellow-500" },
      { name: "Spring-Boot", color: "from-gray-600 to-gray-800" },
      { name: "Django", color: "from-blue-600 to-cyan-600" },
      { name: "ASP.NET", color: "from-red-500 to-pink-600" },
      { name: "PostgreSQL", color: "from-blue-600 to-indigo-700" },
      { name: "MongoDB", color: "from-green-500 to-green-700" },
      { name: "WebSockets", color: "from-pink-500 to-purple-600" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", color: "from-orange-500 to-red-600" },
      { name: "Docker", color: "from-blue-500 to-blue-700" },
      { name: "AWS", color: "from-orange-400 to-yellow-500" },
      { name: "Figma", color: "from-purple-500 to-pink-600" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Skills &
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
              Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive overview of my technical proficiencies and the tools
            I use to create exceptional digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: "100%",
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`,
                    }}
                  ></div>
                </div>

                <div
                  className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-md transition-all duration-1000 ease-out"
                  style={{
                    left: "100%",
                    transform: "translateX(-50%)",
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`,
                  }}
                ></div>
              </div>

              {/* Proficiency Label */}
              {/* <div className="mt-3 text-sm text-gray-500 font-medium">
                {skill.level >= 90
                  ? "Expert"
                  : skill.level >= 80
                  ? "Advanced"
                  : skill.level >= 70
                  ? "Intermediate"
                  : "Beginner"}
              </div> */}
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Agile/Scrum",
              "RESTful APIs",
              "Microservices",
              "CI/CD",
              "Testing",
              "Performance Optimization",
              "SEO",
              "Accessibility",
              "ORM",
              "Machine Learning",
              "GIS",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
