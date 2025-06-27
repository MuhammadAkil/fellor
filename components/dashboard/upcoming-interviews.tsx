import { Video, MapPin } from "lucide-react"
import type { Interview } from "@/types/dashboard"

interface UpcomingInterviewsProps {
  interviews: Interview[]
}

export default function UpcomingInterviews({ interviews }: Readonly<UpcomingInterviewsProps>) {
	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6 h-full">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
				<button className="text-sm text-orange-600 hover:text-orange-700 font-medium">See all</button>
			</div>

			<div className="space-y-4">
				{interviews.map((interview) => (
					<div key={interview.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
						<div className="flex-shrink-0">
							<div className="w-1 h-20 bg-purple-500 rounded-full"></div>
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-sm font-medium text-gray-900">
									{interview.date}, {interview.time}
								</span>
							</div>
							<p className="text-sm font-medium text-gray-900 mb-1">
								{interview.candidateName} - {interview.position}
							</p>

							<div className="flex items-center gap-2">
								{interview.type === "video" ? (
									<>
										<Video className="w-4 h-4 text-purple-600" />
										<span className="text-sm text-black font-medium">Video Interview</span>
									</>
								) : (
									<>
										<MapPin className="w-4 h-4 text-purple-600" />
										<span className="text-sm text-black font-medium">On-site Interview</span>
									</>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
