"use client"

import { useState, useMemo } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getHiringInsights } from "@/lib/data"
import type { TimeFrame } from "@/types/dashboard"
import { useQuery } from "@tanstack/react-query"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const timeFrames: TimeFrame[] = [
  { label: "Last 7 days", value: "7d", days: 7 },
  { label: "Last 30 days", value: "30d", days: 30 },
  { label: "Last 90 days", value: "90d", days: 90 },
  { label: "Last year", value: "1y", days: 365 },
]

export default function HiringInsights() {
	const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>(timeFrames[1]);

	// Using React Query for better data fetching
	const { data: hiringData = [], isLoading } = useQuery({
		queryKey: ["hiring-insights", selectedTimeFrame.value],
		queryFn: () => getHiringInsights(selectedTimeFrame.value),
		staleTime: 5 * 60 * 1000,
	});

	const chartData = useMemo(
		() => ({
			labels: hiringData.map((item) => {
				const date = new Date(item.date);
				return date.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
				});
			}),
			datasets: [
				{
					label: "Application to Interview Rate",
					data: hiringData.map((item) => item.applicationToInterviewRate),
					borderColor: "#10B981",
					backgroundColor: "rgba(16, 185, 129, 0.1)",
					borderWidth: 3,
					pointRadius: 4,
					pointHoverRadius: 6,
					pointBackgroundColor: "#10B981",
					pointBorderColor: "#ffffff",
					pointBorderWidth: 2,
					tension: 0.4,
				},
				{
					label: "Offer Acceptance Rate",
					data: hiringData.map((item) => item.offerAcceptanceRate),
					borderColor: "#8B5CF6",
					backgroundColor: "rgba(139, 92, 246, 0.1)",
					borderWidth: 3,
					pointRadius: 4,
					pointHoverRadius: 6,
					pointBackgroundColor: "#8B5CF6",
					pointBorderColor: "#ffffff",
					pointBorderWidth: 2,
					tension: 0.4,
				},
				{
					label: "Rejection Rate",
					data: hiringData.map((item) => item.rejectionRate),
					borderColor: "#F59E0B",
					backgroundColor: "rgba(245, 158, 11, 0.1)",
					borderWidth: 3,
					pointRadius: 4,
					pointHoverRadius: 6,
					pointBackgroundColor: "#F59E0B",
					pointBorderColor: "#ffffff",
					pointBorderWidth: 2,
					tension: 0.4,
				},
			],
		}),
		[hiringData]
	);

	const options: ChartOptions<"line"> = useMemo(
		() => ({
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor: "rgba(0, 0, 0, 0.8)",
					titleColor: "#ffffff",
					bodyColor: "#ffffff",
					borderColor: "rgba(255, 255, 255, 0.1)",
					borderWidth: 1,
					cornerRadius: 8,
					displayColors: true,
					callbacks: {
						label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`,
					},
				},
			},
			scales: {
				x: {
					grid: {
						display: false,
					},
					border: {
						display: false,
					},
					ticks: {
						color: "#6B7280",
						font: {
							size: 12,
						},
					},
				},
				y: {
					beginAtZero: true,
					max: 100,
					grid: {
						color: "rgba(0, 0, 0, 0.05)",
					},
					border: {
						display: false,
					},
					ticks: {
						color: "#6B7280",
						font: {
							size: 12,
						},
						callback: (value) => value + "%",
					},
				},
			},
			interaction: {
				intersect: false,
				mode: "index",
			},
		}),
		[]
	);

	const legendItems = [
		{ label: "Application to Interview Rate", color: "#10B981" },
		{ label: "Offer Acceptance Rate", color: "#8B5CF6" },
		{ label: "Rejection Rate", color: "#F59E0B" },
	];

	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-gray-900">Hiring Insights</h2>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50" aria-label="Select time frame for hiring insights">
							{selectedTimeFrame.label}
							<ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-48">
						{timeFrames.map((timeFrame) => (
							<DropdownMenuItem key={timeFrame.value} onClick={() => setSelectedTimeFrame(timeFrame)} className={selectedTimeFrame.value === timeFrame.value ? "bg-gray-100" : ""}>
								{timeFrame.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Chart Container */}
			<div className="relative h-80 mb-6" aria-label="Hiring insights chart showing application to interview rate, offer acceptance rate, and rejection rate over time">
				{isLoading ? (
					<div className="flex items-center justify-center h-full">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
					</div>
				) : (
					<Line data={chartData} options={options} />
				)}
			</div>

			{/* Custom Legend */}
			<div className="flex flex-wrap gap-6 justify-center">
				{legendItems.map((item, index) => (
					<div key={index} className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
						<span className="text-sm text-gray-600 font-medium">{item.label}</span>
					</div>
				))}
			</div>
		</div>
	);
}
