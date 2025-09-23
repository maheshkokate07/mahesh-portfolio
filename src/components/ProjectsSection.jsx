import { ExternalLink, Github } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default function ProjectsSection() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  const projectsData = [
    {
      name: "React Query Hands-On Series",
      description:
        "A series of 12 live demos demonstrating advanced React Query features for building scalable and high-performance React applications.",
      tech: [
        "React.js",
        "React Query",
        "TypeScript",
        "Custom Hooks",
        "Optimistic Updates",
        "Infinite Scrolling",
        "Pagination",
        "Error Boundaries",
      ],
      features: [
        "Implemented caching, mutations, optimistic updates, and dependent/parallel queries for efficient data fetching",
        "Built reusable custom hooks reducing network calls by ~40% and improving UI responsiveness",
        "Demonstrated error boundaries and production-ready patterns for scalable React apps",
        "Provided interactive, real-world demos for developers to learn best practices",
      ],
      liveDemo: "https://github.com/maheshkokate07/react-query-tanstack",
      github: "https://github.com/maheshkokate07/react-query-tanstack",
    },
    {
      name: "YouTube Clone",
      description:
        "A full-featured YouTube-like platform with secure authentication, video upload, streaming, and real-time user interactions.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "WebSocket",
        "Cloudinary",
        "Redux Toolkit",
        "React Router",
        "JWT",
      ],
      features: [
        "Implemented secure user authentication using JWT with access/refresh tokens",
        "Enabled video uploads and streaming using Cloudinary for scalable media hosting",
        "Built real-time notifications and interactions with WebSocket",
        "Developed likes, subscriptions, and comment system with Redux Toolkit",
        "Tracked video progress and session state for seamless user experience",
        "Protected routes and role-based access control for secure navigation",
      ],
      liveDemo: "https://youtube-clone-frontend-bkxd.onrender.com",
      github: "https://github.com/maheshkokate07/youtube-clone",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto max-w-4xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className={`grid gap-6 sm:gap-8 stagger-children ${hasIntersected ? "visible" : ""}`}>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md hover-lift transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 p-6"
              >
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
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="ml-1">
                        {feature}
                      </li>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}