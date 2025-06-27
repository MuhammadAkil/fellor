import type { Job } from "@/types/dashboard";

interface TopActiveJobsProps {
	jobs: Job[];
}

export default function TopActiveJobs({ jobs }: Readonly<TopActiveJobsProps>) {
	return (
		<div className="bg-white rounded-xl border border-gray-200 p-5">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-base font-semibold text-gray-900">Top Active Jobs</h2>
				<button className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline transition-colors">See all</button>
			</div>

			<div className="space-y-4">
				{jobs.map((job) => (
					<div key={job.id} className="rounded-lg border border-gray-100 px-4 py-3 space-y-3">
						<div className="flex items-start justify-between gap-4">
							<div className="w-[70%] flex flex-col gap-1">
								<h3 className="font-medium text-gray-900 text-sm">{job.title}</h3>
								<p className="text-xs text-gray-500">
									{job.candidates} candidates · {job.pipeline} in pipeline
								</p>
							</div>

							<div className="w-[30%] text-right space-y-1">
								<p className="text-xs text-purple-600 font-medium whitespace-nowrap">{job.daysOpen} days open</p>

								<div className="flex items-center gap-2">
									<div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
										<div className="h-full bg-purple-600 transition-all duration-300" style={{ width: `${job.progress}%` }}></div>
									</div>
									<span className="text-xs text-gray-600 font-medium">{job.progress}%</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
