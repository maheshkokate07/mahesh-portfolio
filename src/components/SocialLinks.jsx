import { Mail, Linkedin, Github } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "mailto:kokatemahesh2004@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://linkedin.com/in/maheshkokate07",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/maheshkokate",
      icon: Github,
      label: "GitHub",
    },
  ]

  return (
    <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        )
      })}
    </div>
  )
}
