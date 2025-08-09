import { User, MapPin, Phone } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default function AboutSection() {
  const [ref, hasIntersected] = useIntersectionObserver()

  return (
    <section id="about" className="py-16 sm:py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">About Me</span>
          </h2>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12"> */}
          <div className="text-center">
            {/* <div className={`lg:col-span-1 flex justify-center section-enter-left ${hasIntersected ? "visible" : ""}`}>
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg hover-lift">
                  <User className="h-20 w-20 sm:h-24 sm:w-24" />
                </div>
              </div>
            </div> */}

            <div
              className={`lg:col-span-2 space-y-4 sm:space-y-6 section-enter-up ${hasIntersected ? "visible" : ""}`}
            >
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I’m a passionate Software Engineer specializing in the MERN stack and TypeScript, with a focus on building scalable, high-performance web applications using modern technologies.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My background includes developing responsive UIs with React.js, building robust backend services with
                Node.js and Express.js, and implementing secure authentication systems. I'm experienced in microservices
                architecture, real-time communication, and cloud deployment.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a fast learner with a strong interest in system scalability and enterprise architecture. Currently
                open to full-time opportunities where I can contribute to innovative projects and continue growing as a
                developer.
              </p>

              <div className="flex justify-center items-center flex-row gap-3 text-sm text-gray-600 dark:text-gray-300 pt-4">
                <div className="flex items-center bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-sm hover-lift">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  Pune, Maharashtra
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-sm hover-lift">
                  <Phone className="h-4 w-4 mr-2 text-green-600" />
                  +91 8830080946
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
