"use client";

import { memo, useState } from "react";
import { LogOut, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SidebarItem, sidebarItems } from "@/lib/sideNav";

interface SidebarContentProps {
	onItemClick?: () => void;
}

export const SidebarContent = memo(function SidebarContent({ onItemClick }: SidebarContentProps) {
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	const toggleExpanded = (label: string) => {
		setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
	};

	const handleItemClick = (item: SidebarItem) => {
		if (item.hasSubmenu) {
			toggleExpanded(item.label);
		} else {
			onItemClick?.();
		}
	};

	return (
		<div className="flex flex-col h-full">
			<nav className="flex-1 p-4">
				<ul className="space-y-2">
					{sidebarItems.map((item) => {
						const Icon = item.icon;
						const isExpanded = expandedItems.includes(item.label);

						return (
							<li key={item.label}>
								<button onClick={() => handleItemClick(item)} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors group", item.isActive ? "bg-orange-50 text-orange-600 border border-orange-200" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")} aria-expanded={item.hasSubmenu ? isExpanded : undefined}>
									<Icon className="w-5 h-5 flex-shrink-0" />
									<span className="flex-1 font-medium overflow-hidden whitespace-nowrap">{item.label}</span>
									{item.badge && <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">{item.badge}</span>}
									{item.hasSubmenu && <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />}
								</button>

								{item.hasSubmenu && isExpanded && item.submenu && (
									<ul className="ml-8 mt-2 space-y-1">
										{item.submenu.map((sub) => (
											<li key={sub.label}>
												<Link href={sub.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" onClick={onItemClick}>
													{sub.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>

			<div className="p-4">
				<Button variant="ghost" className="w-full justify-start gap-3 text-gray-600 hover:text-gray-900" onClick={onItemClick}>
					<LogOut className="w-5 h-5 text-orange-500" />
					<span className="font-medium">Log-out</span>
				</Button>
			</div>
		</div>
	);
});
