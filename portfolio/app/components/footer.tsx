import { Linkedin, Mail, Heart, GithubIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-light mb-4 tracking-wide">
              Kalpa Perera
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Full-Stack Developer passionate about creating exceptional digital
              experiences that make a meaningful impact.
            </p>
            <h4 className="text-xl font-semibold text-gray-200 mb-6">
              Follow Me
            </h4>
            <div className="flex space-x-6">
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/klperera",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://lk.linkedin.com/in/kalpa-perera-32a374293",
                  label: "LinkedIn",
                },
                // {
                //   icon: Twitter,
                //   href: "https://twitter.com",
                //   label: "Twitter",
                // },
                {
                  icon: Mail,
                  href: "mailto:klperera660@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Projects", "Skills", "Education", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Web Development</li>
              {/* <li>Mobile Apps</li> */}
              <li>UI/UX Design</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 items-center gap-1">
              © {currentYear} Kalpa Perera.
              <span className="flex gap-2 mt-2">
                Made with
                <Heart size={18} className="text-red-500" fill="currentColor" />
                and lots of coffee.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
