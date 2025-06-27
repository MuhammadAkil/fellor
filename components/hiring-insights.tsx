"use client"

import { useState, useEffect } from "react"
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface HiringData {
	date: string;
	applicationToInterviewRate: number;
	offerAcceptanceRate: number;
	rejectionRate: number;
}

interface TimeFrame {
	label: string;
	value: string;
	days: number;
}

const generateMockData = (days: number): HiringData[] => {
	const data: HiringData[] = [];
	const today = new Date();

	for (let i = days - 1; i >= 0; i--) {
		const date = new Date(today);
		date.setDate(date.getDate() - i);

		const baseApplicationRate = 45 + Math.sin(i * 0.1) * 10 + Math.random() * 15;
		const baseOfferRate = 35 + Math.cos(i * 0.15) * 8 + Math.random() * 12;
		const baseRejectionRate = 25 + Math.sin(i * 0.08) * 6 + Math.random() * 10;

		data.push({
			date: date.toISOString().split("T")[0],
			applicationToInterviewRate: Math.max(20, Math.min(80, baseApplicationRate)),
			offerAcceptanceRate: Math.max(15, Math.min(75, baseOfferRate)),
			rejectionRate: Math.max(10, Math.min(60, baseRejectionRate)),
		});
	}

	return data;
};

const getHiringInsights = async (timeFrame: string): Promise<HiringData[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const timeFrameMap: Record<string, number> = {
		"7d": 7,
		"30d": 30,
		"90d": 90,
		"1y": 365,
	};

	const days = timeFrameMap[timeFrame] || 30;
	return generateMockData(days);
};

const timeFrames: TimeFrame[] = [
	{ label: "Last 7 days", value: "7d", days: 7 },
	{ label: "Last 30 days", value: "30d", days: 30 },
	{ label: "Last 90 days", value: "90d", days: 90 },
	{ label: "Last year", value: "1y", days: 365 },
];

export default function HiringInsights() {
	const [data, setData] = useState<HiringData[]>([]);
	const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>(timeFrames[1]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const insights = await getHiringInsights(selectedTimeFrame.value);
				setData(insights);
			} catch (error) {
				console.error("Failed to fetch hiring insights:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [selectedTimeFrame]);

	const chartData = {
		labels: data.map((item) => {
			const date = new Date(item.date);
			return date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			});
		}),
		datasets: [
			{
				label: "Application to Interview Rate",
				data: data.map((item) => item.applicationToInterviewRate),
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
				data: data.map((item) => item.offerAcceptanceRate),
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
				data: data.map((item) => item.rejectionRate),
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
	};

	const options: ChartOptions<"line"> = {
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
	};

	const legendItems = [
		{ label: "Application to Interview Rate", color: "#10B981" },
		{ label: "Offer Acceptance Rate", color: "#8B5CF6" },
		{ label: "Rejection Rate", color: "#F59E0B" },
	];

	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
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
				{loading ? (
					<div className="flex items-center justify-center h-full">
						<div aria-label="Loading hiring insights" data-testid="loading-spinner" className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
					</div>
				) : (
					<Line data={chartData} options={options} />
				)}
			</div>

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
