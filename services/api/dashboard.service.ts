export class DashboardService {
    async getDashboardData(): Promise<any> {
        return {
            stats: {
                totalCandidates: { value: 1245, change: 10, trend: "up", period: "This Month" },
                activeJobs: { value: 28, change: -2, trend: "down", period: "This Week" },
                interviewsThisWeek: { value: 14, change: 3, trend: "up", period: "This Week" },
                timeToHire: { value: "12 days", change: -1, trend: "down" },
            },
            interviews: [
                { id: 1, candidate: "John Doe", role: "Frontend Developer", time: "2025-06-28T10:00:00Z" },
                { id: 2, candidate: "Jane Smith", role: "Backend Developer", time: "2025-06-29T14:00:00Z" },
            ],
            jobs: [
                { id: 1, title: "Senior React Developer", applicants: 45 },
                { id: 2, title: "Node.js Backend Engineer", applicants: 33 },
            ],
            todos: [
                { id: 1, task: "Review resumes", completed: false },
                { id: 2, task: "Schedule interviews", completed: true },
            ],
        };
    }

    async getHiringInsights(timeFrame: string) {
        return {
            timeFrame,
            data: [
                { label: "May", hires: 12 },
                { label: "June", hires: 18 },
            ],
        };
    }
}

export const dashboardService = new DashboardService();
