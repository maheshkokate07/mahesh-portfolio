import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Navigation({ darkMode, setDarkMode, activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section) => {
    scrollToSection(section)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ${scrolled
        && "shadow-md"
        } border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-lg sm:text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => scrollToSection("hero")}
        >
          <span className="text-gradient">{`<Mahesh Kokate />`}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${activeSection === item.id
                ? "text-blue-500"
                : "hover:text-blue-500 dark:hover:text-blue-400"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative cursor-pointer inline-flex h-8 w-14 sm:h-9 sm:w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
          >
            <span className="sr-only">Toggle dark mode</span>
            <div
              className={`inline-block h-6 w-6 sm:h-7 sm:w-7 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${darkMode ? "translate-x-7 sm:translate-x-8" : "translate-x-1"
                }`}
            >
              <div className="flex h-full w-full items-center justify-center">
                {darkMode ? (
                  <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700" />
                ) : (
                  <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                )}
              </div>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer block w-full text-left px-3 py-3 rounded-lg transition-colors ${activeSection === item.id
                  ? "text-blue-600"
                  : " hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
