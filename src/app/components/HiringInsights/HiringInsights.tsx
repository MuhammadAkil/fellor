"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";
import Dropdown from "./ui/Dropdown";
import { getHiringInsights } from "@/lib/api";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const HiringInsights: React.FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["hiringInsights"],
		queryFn: getHiringInsights,
	});

	const chartData = {
		labels: data?.map((d: any) => d.date) || [],
		datasets: [
			{
				label: "Application to Interview Rate",
				data: data?.map((d: any) => d.applicationToInterviewRate),
				borderColor: "#10B981",
				backgroundColor: "#10B981",
				tension: 0.4,
			},
			{
				label: "Offer Acceptance Rate",
				data: data?.map((d: any) => d.offerAcceptanceRate),
				borderColor: "#8B5CF6",
				backgroundColor: "#8B5CF6",
				tension: 0.4,
			},
			{
				label: "Rejection Rate",
				data: data?.map((d: any) => d.rejectionRate),
				borderColor: "#F97316",
				backgroundColor: "#F97316",
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
				labels: {
					color: "#374151",
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					color: "#6B7280",
				},
			},
			x: {
				ticks: {
					color: "#6B7280",
				},
			},
		},
	};

	return (
		<section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md w-full">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Hiring Insights</h2>
				<Dropdown label="Last 30 days" />
			</div>
			<div role="img" aria-label="Hiring Insights Line Chart">
				{isLoading ? <p className="text-gray-500">Loading...</p> : <Line data={chartData} options={options} />}
			</div>
		</section>
	);
};

export default HiringInsights;
