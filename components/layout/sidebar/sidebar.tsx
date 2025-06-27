"use client";

import { memo } from "react";
import { SidebarContent } from "./sidebar-content";

const Sidebar = memo(function Sidebar() {
	return (
		<aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 h-screen flex-col">
			<div className="p-6 border-gray-200">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">F</span>
					</div>
					<span className="text-xl font-bold text-gray-900">FELLOR</span>
				</div>
			</div>

			<SidebarContent />
		</aside>
	);
});

export default Sidebar;
