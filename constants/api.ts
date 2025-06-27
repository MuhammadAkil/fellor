export const API_ENDPOINTS = {
    // Authentication
    AUTH: {
        LOGIN: "/auth/login",
        LOGOUT: "/auth/logout",
        REGISTER: "/auth/register",
        REFRESH: "/auth/refresh",
        PROFILE: "/auth/profile",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
    },

    // Dashboard
    DASHBOARD: "/dashboard",

    // Jobs
    JOBS: "/jobs",

    // Candidates
    CANDIDATES: "/candidates",

    // Interviews
    INTERVIEWS: "/interviews",

    // Messages
    MESSAGES: {
        LIST: "/messages",
        DETAIL: "/messages",
        SEND: "/messages",
        MARK_READ: "/messages/mark-read",
        TEMPLATES: "/messages/templates",
    },

    // Analytics
    ANALYTICS: {
        OVERVIEW: "/analytics/overview",
        HIRING_FUNNEL: "/analytics/hiring-funnel",
        TIME_TO_HIRE: "/analytics/time-to-hire",
        SOURCE_EFFECTIVENESS: "/analytics/source-effectiveness",
        REPORTS: "/analytics/reports",
    },

    // Settings
    SETTINGS: {
        PROFILE: "/settings/profile",
        COMPANY: "/settings/company",
        TEAM: "/settings/team",
        INTEGRATIONS: "/settings/integrations",
        NOTIFICATIONS: "/settings/notifications",
        BILLING: "/settings/billing",
    },

    // File uploads
    UPLOADS: {
        AVATAR: "/uploads/avatar",
        RESUME: "/uploads/resume",
        COMPANY_LOGO: "/uploads/company-logo",
        BULK_IMPORT: "/uploads/bulk-import",
    },

    // Hiring Insights
    HIRING_INSIGHTS: "/hiring-insights",

    // Todos
    TODOS: "/todos",
} as const

// API Response status codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const

// API Error messages
export const API_ERRORS = {
    NETWORK_ERROR: "Network error. Please check your connection.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    FORBIDDEN: "Access denied.",
    NOT_FOUND: "Resource not found.",
    VALIDATION_ERROR: "Please check your input and try again.",
    SERVER_ERROR: "Server error. Please try again later.",
    UNKNOWN_ERROR: "An unexpected error occurred.",
} as const

// API Configuration
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || "/api",
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
} as const
  