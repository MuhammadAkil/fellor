import { LucideIcon } from "lucide-react"

export interface HiringData {
  date: string
  applicationToInterviewRate: number
  offerAcceptanceRate: number
  rejectionRate: number
}

export interface DashboardStats {
  totalCandidates: {
    value: number
    change: number
    trend: "up" | "down"
    period: string
  }
  activeJobs: {
    value: number
    change: number
    trend: "up" | "down"
    period: string
  }
  interviewsThisWeek: {
    value: number
    change: number
    trend: "up" | "down"
    period: string
  }
  timeToHire: {
    value: string
    change: string
    trend: "same" | "up" | "down"
    period: string
  }
}

export interface Interview {
  id: string
  time: string
  candidateName: string
  position: string
  type: "video" | "onsite"
  date: string
}

export interface Job {
  id: string
  title: string
  candidates: number
  pipeline: number
  daysOpen: number
  progress: number
}

export interface TodoItem {
  id: string
  title: string
  description: string
  pending: number
  type: "approval" | "feedback" | "offer"
  color: {
    bg: string;
    text: string;
  };
  icon?: LucideIcon;
}

export interface TimeFrame {
  label: string
  value: string
  days: number
}
