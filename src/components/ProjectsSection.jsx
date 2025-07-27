import { ExternalLink, Github } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default function ProjectsSection() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  const projectsData = [
    {
      name: "YouTube Clone",
      description:
        "A full-featured YouTube-like application with video streaming, real-time interactions, and secure authentication.",
      tech: ["React.js", "Node.js", "MongoDB", "WebSocket", "Cloudinary", "Redux Toolkit"],
      features: [
        "Secure user authentication with JWT",
        "Video upload and streaming with Cloudinary",
        "Real-time notifications using WebSocket",
        "Like, subscribe, and comment functionality",
        "Progress tracking and session management",
        "Protected routes and role-based access",
      ],
      liveDemo: "https://youtube-clone-frontend-bkxd.onrender.com",
      github: "https://github.com/maheshkokate07/youtube-clone",
      image: "https://via.placeholder.com/500x300/3B82F6/FFFFFF?text=YouTube+Clone",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className={`grid gap-6 sm:gap-8 stagger-children ${hasIntersected ? "visible" : ""}`}>
            {projectsData.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md hover-lift transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-48 sm:h-64 lg:h-auto overflow-hidden order-1 lg:order-none">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 order-2 lg:order-none">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {project.name}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.tech.map((technology, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-600"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md hover-lift transition-all duration-200 flex items-center justify-center text-sm"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center text-sm"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
