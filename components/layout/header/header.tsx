"use client";

import { memo, useEffect, useRef, useState } from "react";
import { Search, Bell, ChevronDown, Menu, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MobileSidebar from "../sidebar/mobile-sidebar";

const Header = memo(function Header() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setSearchOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<header className="bg-white border-b border-gray-200 px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileSidebarOpen(true)} aria-label="Open sidebar">
							<Menu className="w-5 h-5" />
						</Button>
						<div className=" bg-gray-100 rounded hidden lg:flex items-center justify-center">
							<div className="p-2 rounded-full">
								<House className="size-5" />
							</div>
						</div>
						<span className="text-gray-900 font-medium hidden lg:flex">Home</span>
					</div>

					<div className="flex items-center gap-3">
						{/* Bell */}
						<button className="w-9 h-9 border border-gray-200 rounded-md hidden lg:flex items-center justify-center relative hover:bg-gray-50 transition">
							<Bell className="w-4 h-4 text-gray-700" />
							<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
						</button>

						{/* Search */}
						<div ref={searchRef} className="relative hidden lg:flex items-center">
							<button onClick={() => setSearchOpen(true)} className="w-9 h-9 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition">
								<Search className="w-4 h-4 text-gray-700" />
							</button>

							<Input placeholder="Search..." autoFocus onBlur={() => setSearchOpen(false)} className={`!focus-visible:ring-offset-1 absolute right-0 top-0 h-9 pl-10 pr-4 border border-gray-200 bg-gray-50 rounded-md shadow-sm transition-all duration-300 ease-in-out ${searchOpen ? "opacity-100 w-64 ml-2 visible" : "opacity-0 w-0 invisible"}`} />
						</div>

						{/* Quick Actions */}
						<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
							<DropdownMenuTrigger asChild>
								<Button className="bg-gray-900 text-white hover:bg-gray-800 hover:text-white flex items-center border-0 ">
									Quick Actions
									<ChevronDown className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-48">
								<DropdownMenuItem>Add New Job</DropdownMenuItem>
								<DropdownMenuItem>Schedule Interview</DropdownMenuItem>
								<DropdownMenuItem>Send Message</DropdownMenuItem>
								<DropdownMenuItem>Generate Report</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>
			<MobileSidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
		</>
	);
});
export default Header;
