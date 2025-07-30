import { useState } from "react"
import { Mail, Phone, Code, Linkedin, Github, Send, MessageCircle, User, AtSign } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { SiLeetcode } from "react-icons/si";

export default function ContactSection() {
  const [ref, hasIntersected] = useIntersectionObserver()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/2fe30202d5e806489d119ab7087c9912", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert("Failed to send message.")
      }
    } catch (error) {
      alert("Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactItems = [
    {
      icon: Mail,
      text: "kokatemahesh2004@gmail.com",
      href: "mailto:kokatemahesh2004@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900",
    },
    {
      icon: Phone,
      text: "+91 8830080946",
      href: "tel:+918830080946",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900",
    },
    {
      icon: Code,
      text: "leetcode.com/u/8w0fd9J4mw",
      href: "https://leetcode.com/u/8w0fd9J4mw/",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/maheshkokate07",
      href: "https://linkedin.com/in/maheshkokate",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: Github,
      text: "github.com/maheshkokate",
      href: "https://github.com/maheshkokate07",
      color: "text-gray-800 dark:text-gray-200",
      bgColor: "bg-gray-100 dark:bg-gray-800",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className={`section-enter ${hasIntersected ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gradient">Get In Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className={`section-enter-left ${hasIntersected ? "visible" : ""}`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out through any of the channels below!
              </p>

              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div
                      key={index}
                      className="flex items-center space-x-4 px-4 py-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover-lift border border-gray-200 dark:border-gray-600"
                    >
                      <div className={`p-3 rounded-lg ${item.bgColor} flex-shrink-0`}>
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white break-all">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`section-enter-right ${hasIntersected ? "visible" : ""}`}>
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-blue-600" />
                  Send Message
                </h3>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-600 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 flex items-center">
                        <User className="mr-2 h-4 w-4 text-blue-600" />
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="outline-none w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 flex items-center">
                        <AtSign className="mr-2 h-4 w-4 text-blue-600" />
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="outline-none w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4 text-blue-600" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="outline-none w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md hover-lift transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
