import { Code, Server, Database, Wrench } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiBuildingOffice } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { SiRedux, SiRabbitmq, SiPostman, SiReactrouter, SiMongoosedotws, SiPostgresql, SiRedis, SiReactquery, SiExpress, SiMongodb, SiJsonwebtokens, SiSocketdotio, SiAmazonapigateway } from "react-icons/si";

export default function SkillsSection() {
  const [ref, hasIntersected] = useIntersectionObserver()

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      skills: [
        { name: "JavaScript", icon: <FaJs color="#f7e025" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#3ebff8" /> },
        { name: "React.js", icon: <FaReact color="#08d7ff" /> },
        { name: "TypeScript", icon: <BiLogoTypescript color="#377cc8" /> },
        { name: "Redux Toolkit", icon: <SiRedux color="#854ac8" /> },
        { name: "React Router", icon: <SiReactrouter color="#f54855" /> },
        { name: "React Query", icon: <SiReactquery color="#ff4759" /> },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#689f63" /> },
        { name: "Express.js", icon: <SiExpress color="#689f63" /> },
        { name: "JWT", icon: <SiJsonwebtokens color="#f52660" /> },
        { name: "WebSocket", icon: <SiSocketdotio color="#ef7a08" /> },
        { name: "REST APIs", icon: <SiAmazonapigateway color="#0899d7" /> },
        { name: "Microservices", icon: <PiBuildingOffice color="#f066b0" /> },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#55ad47" /> },
        { name: "MySQL", icon: <GrMysql color="#1a6997" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#396c94" /> },
        { name: "Redis", icon: <SiRedis color="#db3228" /> },
        { name: "Mongoose", icon: <SiMongoosedotws color="#8c0808" /> },
      ],
    },
    {
      title: "Tools & Cloud",
      icon: Wrench,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#f05539" /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
        { name: "Postman", icon: <SiPostman color="#ff713d" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq color="#ff6b08" /> },
        { name: "AWS", icon: <FaAws color="#ff9c08" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Tech Stack & Skills</span>
          </h2>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 stagger-children ${hasIntersected ? "visible" : ""}`}
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover-lift border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`p-2 rounded-lg ${category.bgColor} mr-3`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex cursor-pointer items-center px-2 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <span className="mr-2 text-lg">{skill.icon}</span>
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
