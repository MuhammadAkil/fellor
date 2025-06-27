import {
    LayoutDashboard,
    Briefcase,
    Users,
    MessageSquare,
    Settings,
    BarChart3,
    UserPlus,
    FileText,
    CalendarCheck,
    Bell,
} from "lucide-react";

export interface SubmenuItem {
    label: string;
    href: string;
}

export interface SidebarItem {
    icon: React.ElementType;
    label: string;
    href: string;
    hasSubmenu?: boolean;
    isActive?: boolean;
    badge?: number;
    submenu?: SubmenuItem[];
}

export const sidebarItems: SidebarItem[] = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
        isActive: true,
    },
    {
        icon: Briefcase,
        label: "Jobs",
        href: "/jobs",
        hasSubmenu: true,
        submenu: [
            { label: "All Jobs", href: "/jobs" },
            { label: "Create Job", href: "/jobs/create" },
            { label: "Archived Jobs", href: "/jobs/archived" },
        ],
    },
    {
        icon: Users,
        label: "Candidates",
        href: "/candidates",
        hasSubmenu: true,
        submenu: [
            { label: "All Candidates", href: "/candidates" },
            { label: "Add Candidate", href: "/candidates/add" },
            { label: "Shortlisted", href: "/candidates/shortlisted" },
        ],
    },
    {
        icon: CalendarCheck,
        label: "Interviews",
        href: "/interviews",
        hasSubmenu: true,
        submenu: [
            { label: "Upcoming Interviews", href: "/interviews/upcoming" },
            { label: "Interview Feedback", href: "/interviews/feedback" },
        ],
    },
    {
        icon: MessageSquare,
        label: "Messages",
        href: "/messages",
        badge: 3,
    },
    {
        icon: Settings,
        label: "Settings",
        href: "/settings",
        hasSubmenu: true,
        submenu: [
            { label: "General Settings", href: "/settings/general" },
            { label: "Team Management", href: "/settings/team" },
            { label: "Notifications", href: "/settings/notifications" },
        ],
    },
    {
        icon: BarChart3,
        label: "Analytics & Insights",
        href: "/analytics",
        hasSubmenu: false,
        submenu: [
            { label: "Hiring Insights", href: "/analytics/hiring-insights" },
            { label: "Job Performance", href: "/analytics/jobs" },
            { label: "Candidate Funnels", href: "/analytics/funnel" },
        ],
    },
    
   
   
];
  