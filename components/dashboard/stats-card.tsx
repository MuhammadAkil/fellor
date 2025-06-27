import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  change?: number | string
  trend?: "up" | "down" | "same"
  period?: string
}

export default function StatsCard({ title, value, change, trend, period }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4" />
      case "down":
        return <TrendingDown className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {change && (
          <div className={cn("flex items-center gap-1 text-sm", getTrendColor())}>
            {getTrendIcon()}
            <span className="font-medium">{typeof change === "number" ? `${change} more` : change}</span>
            {period && <span className="text-gray-500">{period}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
