import { cn } from "@/lib/utils"

const badgeVariants = {
  variant: {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-foreground border-gray-300 dark:border-gray-600",
  },
}

export function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants.variant[variant],
        className,
      )}
      {...props}
    />
  )
}
