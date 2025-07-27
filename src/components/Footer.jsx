import { Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          <span>© {new Date().getFullYear()} Mahesh Kokate. Made with</span>
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4 text-red-500" />
          </div>
          <span>using</span>
          <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
            <Code className="h-4 w-4" />
            <span>React.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
