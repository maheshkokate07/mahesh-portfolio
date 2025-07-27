import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default function ExperienceSection() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  const experienceData = [
    {
      type: "work",
      title: "Associate Software Developer",
      organization: "Tekhnologia Innovations India Pvt. Ltd.",
      duration: "Jan 2025 - Present",
      location: "Pune, Maharashtra",
      description: [
        "Built responsive UIs using React.js with TypeScript, Redux Toolkit, and Context API",
        "Improved frontend performance via lazy loading, memoization, and API caching with React Query",
        "Developed scalable microservices using Node.js, Express.js, and MongoDB (Mongoose)",
        "Implemented secure JWT auth with access/refresh tokens and Role Based Access",
        "Integrated Redis for caching, session management, and rate limiting",
        "Used RabbitMQ for async job handling and decoupled microservice communication",
      ],
      bgColor: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 dark:border-blue-700",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      organization: "Ashoka Center For Business and Computer Studies, Nashik",
      duration: "2021 - 2024",
      location: "Nashik, Maharashtra",
      details: "CGPA: 8.52",
      bgColor: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600",
      borderColor: "border-green-200 dark:border-green-700",
      icon: GraduationCap,
    },
    {
      type: "certification",
      title: "Professional Certifications",
      organization: "Various Platforms",
      duration: "2023 - 2024",
      location: "Online",
      certifications: [
        { name: "Full Stack Web Development", provider: "Internshala Trainings", year: "2024" },
        { name: "Data Structures & Algorithms in Java", provider: "Apna College", year: "2023" },
      ],
      bgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200 dark:border-purple-700",
      icon: Award,
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-4xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Experience & Education</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

            <div className={`space-y-6 sm:space-y-8 stagger-children ${hasIntersected ? "visible" : ""}`}>
              {experienceData.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-2 sm:left-6 w-4 h-4 ${item.bgColor} ${item.borderColor} border-2 rounded-full z-10`}
                    ></div>

                    <div className="ml-12 sm:ml-20">
                      <div
                        className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover-lift border-l-4 ${item.borderColor}`}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className={`${item.bgColor} p-2 sm:p-3 rounded-lg flex-shrink-0 shadow-sm`}>
                            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.iconColor}`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {item.title}
                            </h3>

                            <p className={`${item.iconColor} font-medium text-sm sm:text-base mb-2`}>
                              {item.organization}
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                {item.duration}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                {item.location}
                              </div>
                            </div>

                            {item.description && (
                              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                {item.description.map((desc, itemIndex) => (
                                  <li key={itemIndex}>{desc}</li>
                                ))}
                              </ul>
                            )}

                            {item.details && (
                              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                                {item.details}
                              </p>
                            )}

                            {item.certifications && (
                              <div className="mt-3 space-y-2">
                                {item.certifications.map((cert, certIndex) => (
                                  <div
                                    key={certIndex}
                                    className="flex flex-col sm:flex-row sm:justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <span className="font-medium text-sm sm:text-base">{cert.name}</span>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-xs sm:text-sm">
                                      <span className={`${item.iconColor} font-medium`}>{cert.provider}</span>
                                      <span className="text-gray-500 dark:text-gray-400">({cert.year})</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
