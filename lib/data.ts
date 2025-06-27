import type { DashboardStats, HiringData, Interview, Job, TodoItem } from "@/types/dashboard"
import { BriefcaseBusiness, CalendarCheck, UsersRound } from "lucide-react"

export const generateHiringData = (days: number): HiringData[] => {
  const data: HiringData[] = []
  const today = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    const baseApplicationRate = 45 + Math.sin(i * 0.1) * 10 + Math.random() * 15
    const baseOfferRate = 35 + Math.cos(i * 0.15) * 8 + Math.random() * 12
    const baseRejectionRate = 25 + Math.sin(i * 0.08) * 6 + Math.random() * 10

    data.push({
      date: date.toISOString().split("T")[0],
      applicationToInterviewRate: Math.max(20, Math.min(80, baseApplicationRate)),
      offerAcceptanceRate: Math.max(15, Math.min(75, baseOfferRate)),
      rejectionRate: Math.max(10, Math.min(60, baseRejectionRate)),
    })
  }

  return data
}

export const dashboardStats: DashboardStats = {
  totalCandidates: {
    value: 1234,
    change: 10,
    trend: "up",
    period: "than last month",
  },
  activeJobs: {
    value: 42,
    change: 3,
    trend: "up",
    period: "than last month",
  },
  interviewsThisWeek: {
    value: 28,
    change: 5,
    trend: "down",
    period: "than last month",
  },
  timeToHire: {
    value: "18 days",
    change: "Same as last month",
    trend: "same",
    period: "",
  },
}

export const upcomingInterviews: Interview[] = [
  {
    id: "1",
    time: "2:00 PM",
    candidateName: "John Smith",
    position: "Senior Developer",
    type: "video",
    date: "Today",
  },
  {
    id: "2",
    time: "10:00 AM",
    candidateName: "Emily Brown",
    position: "UX Designer",
    type: "onsite",
    date: "Tomorrow",
  },
  {
    id: "3",
    time: "10:00 AM",
    candidateName: "Emily Brown",
    position: "UX Designer",
    type: "onsite",
    date: "Tomorrow",
  },
]

export const topActiveJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    candidates: 32,
    pipeline: 8,
    daysOpen: 12,
    progress: 50,
  },
  {
    id: "2",
    title: "Product Manager",
    candidates: 28,
    pipeline: 5,
    daysOpen: 8,
    progress: 75,
  },
  {
    id: "3",
    title: "Software Engineer",
    candidates: 22,
    pipeline: 7,
    daysOpen: 22,
    progress: 100,
  },
]

export const todoItems: TodoItem[] = [
  {
    id: "1",
    title: "Job approval",
    description: "0 pending approvals",
    pending: 0,
    type: "approval",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-600"
    },
    icon: BriefcaseBusiness,
  },
  {
    id: "2",
    title: "Interview feedback",
    description: "0 pending feedback",
    pending: 0,
    type: "feedback",
    color: {
      bg: "bg-orange-100",
      text: "text-orange-600"
    },
    icon: CalendarCheck,
  },
  {
    id: "3",
    title: "Offer approval",
    description: "0 pending approvals",
    pending: 0,
    type: "offer",
    color: {
      bg: "bg-green-100",
      text: "text-green-600"
    },
    icon: UsersRound,
  },
];



export const getHiringInsights = async (timeFrame: string): Promise<HiringData[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const timeFrameMap: Record<string, number> = {
    "7d": 7,
    "30d": 30,
    "90d": 90,
    "1y": 365,
  }

  const days = timeFrameMap[timeFrame] || 30
  return generateHiringData(days)
}

export const getDashboardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return {
    stats: dashboardStats,
    interviews: upcomingInterviews,
    jobs: topActiveJobs,
    todos: todoItems,
  }
}
