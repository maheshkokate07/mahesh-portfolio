import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default function HeroSection({ scrollToSection }) {
  const [ref, hasIntersected] = useIntersectionObserver()

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.VITE_FRONTEND_URL}/resume.pdf`;
    link.download = "Mahesh_Kokate_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const socialLinks = [
    {
      href: "mailto:kokatemahesh2004@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-red-500 dark:hover:text-red-500 transition",
    },
    {
      href: "https://linkedin.com/in/maheshkokate",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-600 transition",
    },
    {
      href: "https://github.com/maheshkokate07",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-black transition",
    },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div ref={ref} className="container mx-auto text-center">
        <div className={`max-w-4xl mx-auto section-enter ${hasIntersected ? "visible" : ""}`}>
          <div className="mb-6 sm:mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold text-white shadow-lg hover-lift cursor-pointer">
              MK
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-gradient">Mahesh Kokate</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-4">
            Associate Software Developer |{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">MERN + TypeScript</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Passionate full-stack developer specializing in scalable web applications with modern technologies. Building
            efficient, user-centric solutions with React, Node.js, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-6 sm:mb-8">
            <button className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover-lift transition-all duration-200 flex items-center justify-center"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer w-full sm:w-auto border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </button>
          </div>

          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-200 shadow-sm hover-lift`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
