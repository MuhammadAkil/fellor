"use client";

import { memo } from "react";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarContent } from "./sidebar-content";

interface MobileSidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileSidebar = memo(function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent side="left" className="w-64 p-0">
				<SheetHeader className="p-6 border-b border-gray-200">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">F</span>
							</div>
							<SheetTitle className="text-xl font-bold text-gray-900">FELLOR</SheetTitle>
						</div>
					</div>
				</SheetHeader>
				<SidebarContent onItemClick={onClose} />
			</SheetContent>
		</Sheet>
	);
});

export default MobileSidebar;
