"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { title } from "process";
import { useState } from "react";

const projects = [
  {
    title: "REAL-TIME TICKETING SYSTEM",
    category: "Web Application",
    description:
      "Accomplished efficient backend and frontend development for a real-time ticketing system as measured by optimized performance and automated ticket pools by implementing JPA for data management, multithreading for performance, and an Angular frontend for user interactions. ",
    technologies: [
      "Angular",
      "Spring-Boot",
      "PostgreSql",
      "Hibernate",
      "Tailwind CSS",
    ],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/klperera/Ticketing-System",
    featured: true,
  },
  {
    title: "WONDERSRI - LOCATION-BASED MOBILE APPLICATION (Group work)",
    category: "Full-Stack Development",
    description:
      "Led backend development for a Flutter-based tourism app with real-time geofencing. Developed geofence detection, location updates, and landmark data with real-time communication. Gained experience in handling real-time data, geospatial queries, and WebSocket integration.",
    technologies: [
      "Flutter",
      "Django",
      "Supabase",
      "GDAL",
      "GIS",
      "WebSockets",
      "CI/CD",
    ],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/WonderSri-Development-Team",
    featured: true,
  },
  {
    title: "BOOK MANAGEMENT SYSTEM",
    category: "Web Application",
    description:
      "Developed a full-stack book management application with CRUD operations for books, featuring a clean Angular frontend styled with Tailwind CSS and a RESTful ASP.NET Core Web API backend. Implemented efficient state management using standalone Angular components and ensured secure cross-origin access with CORS setup in .NET.",
    technologies: ["ASP.NET", "Angular", "Tailwind CSS", "TypeScript", "C#"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/klperera/BookStore-full-stack",
    featured: true,
  },
  {
    title: "MACHINE LEARNING-BASED BREAST CANCER SURVIVAL PREDICTION",
    category: "Machine Learning Model",
    description:
      "Developing predictive models for breast cancer mortality and survival months using classification, regression, and ensemble methods. Applied data preprocessing, feature selection, and hyperparameter tuning to enhance accuracy.",
    technologies: [
      "Python",
      "Pandas",
      "GridSearchCV",
      "Scikit-learn",
      "Matplotlib",
      "Ensemble Learning",
    ],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    title: "WEATHER-APP",
    category: "Web Application",
    description:
      "Built a weather app integrating a public API for real-time data.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category.toLowerCase().includes(filter));

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-4 block">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A showcase of my recent work, demonstrating expertise in modern web
            technologies and creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["all", "featured", "full-stack", "web application"].map(
            (filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {project.featured && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/klperera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium group"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
