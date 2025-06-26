"use client";
import React from "react";

const Sidebar: React.FC = () => (
	<aside className="w-64 h-full bg-gray-100 dark:bg-gray-900 p-4">
		<nav className="space-y-4">
			<a href="#" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">
				Dashboard
			</a>
			<a href="#" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">
				Jobs
			</a>
			<a href="#" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">
				Candidates
			</a>
		</nav>
	</aside>
);

export default Sidebar;
