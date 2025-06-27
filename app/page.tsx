"use client"

import Sidebar from "@/components/layout/sidebar/sidebar";
import Header from "@/components/layout/header/header";
import StatsCard from "@/components/dashboard/stats-card";
import HiringInsights from "@/components/dashboard/hiring-insights";
import UpcomingInterviews from "@/components/dashboard/upcoming-interviews";
import TopActiveJobs from "@/components/dashboard/top-active-jobs";
import TodoList from "@/components/dashboard/todo-list";
import { useDashboardData } from "@/hooks/use-dashboard-data";
import Footer from "@/components/layout/footer/footer";

export default function Dashboard() {
	const { data, isLoading, error } = useDashboardData();

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
					<p className="text-gray-600">Please try refreshing the page</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-screen bg-gray-50">
			<Sidebar />

			<div className="flex-1 flex flex-col overflow-hidden">
				<Header />

				<main className="flex-1 overflow-y-auto p-6">
					<div className="max-w-7xl mx-auto space-y-6">
						{/* Stats Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{isLoading ? (
								Array.from({ length: 4 }).map((_, i) => (
									<div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
										<div className="space-y-3">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="h-8 bg-gray-200 rounded w-1/2"></div>
											<div className="h-4 bg-gray-200 rounded w-full"></div>
										</div>
									</div>
								))
							) : (
								<>
									<StatsCard title="Total Candidates" value={data?.stats.totalCandidates.value || 0} change={data?.stats.totalCandidates.change} trend={data?.stats.totalCandidates.trend} period={data?.stats.totalCandidates.period} />
									<StatsCard title="Active Jobs" value={data?.stats.activeJobs.value || 0} change={data?.stats.activeJobs.change} trend={data?.stats.activeJobs.trend} period={data?.stats.activeJobs.period} />
									<StatsCard title="Interviews This Week" value={data?.stats.interviewsThisWeek.value || 0} change={data?.stats.interviewsThisWeek.change} trend={data?.stats.interviewsThisWeek.trend} period={data?.stats.interviewsThisWeek.period} />
									<StatsCard title="Time to Hire" value={data?.stats.timeToHire.value || "0 days"} change={data?.stats.timeToHire.change} trend={data?.stats.timeToHire.trend} />
								</>
							)}
						</div>

						{/* Main Content Grid */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
							{/* Hiring Insights */}
							<div className="lg:col-span-2">
								<HiringInsights />
							</div>

							{/* Upcoming Interviews */}
							<div>
								{isLoading ? (
									<div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
										<div className="space-y-4">
											<div className="h-6 bg-gray-200 rounded w-1/2"></div>
											{Array.from({ length: 3 }).map((_, i) => (
												<div key={i} className="space-y-2">
													<div className="h-4 bg-gray-200 rounded"></div>
													<div className="h-4 bg-gray-200 rounded w-3/4"></div>
												</div>
											))}
										</div>
									</div>
								) : (
									<UpcomingInterviews interviews={data?.interviews || []} />
								)}
							</div>
						</div>

						{/* Bottom Section */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
							{/* Top Active Jobs */}
							<div className="lg:col-span-2">
								{isLoading ? (
									<div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
										<div className="space-y-4">
											<div className="h-6 bg-gray-200 rounded w-1/2"></div>
											{Array.from({ length: 2 }).map((_, i) => (
												<div key={i} className="space-y-3">
													<div className="h-4 bg-gray-200 rounded"></div>
													<div className="h-4 bg-gray-200 rounded w-3/4"></div>
													<div className="h-2 bg-gray-200 rounded"></div>
												</div>
											))}
										</div>
									</div>
								) : (
									<TopActiveJobs jobs={data?.jobs || []} />
								)}
							</div>

							{/* To-Do List */}
							<div>
								{isLoading ? (
									<div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
										<div className="space-y-4">
											<div className="h-6 bg-gray-200 rounded w-1/2"></div>
											{Array.from({ length: 3 }).map((_, i) => (
												<div key={i} className="flex items-center gap-3">
													<div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
													<div className="flex-1 space-y-2">
														<div className="h-4 bg-gray-200 rounded"></div>
														<div className="h-3 bg-gray-200 rounded w-3/4"></div>
													</div>
												</div>
											))}
										</div>
									</div>
								) : (
									<TodoList todos={data?.todos || []} />
								)}
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}
