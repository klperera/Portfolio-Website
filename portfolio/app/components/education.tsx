import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "Informatics Institute of Technology",
    location: "Colombo, Sri Lanka",
    period: "2023 - 2027",
    gpa: " - ",
    description:
      "Comprehensive foundation in computer science principles, engineering practices, and mathematics.",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning & Data Mining",
      "Client-Server Architectures",
      "Object Oriented Programming",
      "Database Systems",
      "Web Design and Development",
    ],
    achievements: [],
  },
  {
    degree: "Foundation Certificate in Higher Education - IT",
    institution: "Informatics Institute of Technology",
    location: "Colombo, Sri Lanka",
    period: "2022 - 2023",
    gpa: "Distinction",
    description:
      "Comprehensive foundation in computer science principles, engineering practices, and mathematics.",
    coursework: [
      "Data Structures",
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
      "Web Development",
    ],
    achievements: [],
  },
];

const certifications = [
  {
    name: "Foundation Certificate in Higher Education",
    issuer: "Informatics Institute Of Technology",
    date: "Sep 2023",
    icon: "📑",
  },
  {
    name: "Learning Spring with Spring Boot",
    issuer: "LinkedIn Learning Certificate of Completion",
    date: "Nov 2024",
    icon: "🍃",
  },
  {
    name: "IEEEXtreme 18.0 certificate",
    issuer: "IEEE",
    date: "Oct 2024",
    icon: "🌐",
  },
  {
    name: "Python for beginners",
    issuer: "University of Moratuwa, Sri Lanka ",
    date: "May 2023",
    icon: "🏃",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Education &
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            My academic journey and professional certifications that have shaped
            my expertise in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">
                Education
              </h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                  )}

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                    <div className="ml-8">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                            {edu.degree}
                          </h4>
                          <h5 className="text-xl text-blue-600 font-medium mb-3">
                            {edu.institution}
                          </h5>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen size={18} />
                            Relevant Coursework
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Award size={18} />
                            Achievements
                          </h6>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                                <span className="text-gray-700 text-sm font-medium">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-4">
                Continuous Learning
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                I believe in lifelong learning and regularly update my skills
                through online courses, workshops, and industry conferences.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Coursera", "Udemy", "Pluralsight", "Tech Conferences"].map(
                  (platform, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {platform}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
