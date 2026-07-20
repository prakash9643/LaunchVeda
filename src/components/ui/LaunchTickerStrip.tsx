"use client";

import React from "react";
import { motion } from "motion/react";
import {
	Sparkles,
	Zap,
	Target,
	Trophy,
	Star,
	Maximize2,
	Film,
} from "lucide-react";

interface TickerItem {
	text: string;
	icon: React.ComponentType<{ className?: string }>;
	iconBg: string;
	iconColor: string;
}

const TICKER_ITEMS: TickerItem[] = [
	{
		text: "LAUNCH VEDA — INDIA'S NO. 1 PRODUCT LAUNCH ECOSYSTEM",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "TURN IDEAS INTO BRANDS",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "LAUNCH VEDA — INDIA'S NO. 1 PRODUCT LAUNCH ECOSYSTEM",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "TURN IDEAS INTO BRANDS",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "LAUNCH VEDA — INDIA'S NO. 1 PRODUCT LAUNCH ECOSYSTEM",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "TURN IDEAS INTO BRANDS",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
	{
		text: "LAUNCH VEDA — INDIA'S NO. 1 PRODUCT LAUNCH ECOSYSTEM",
		icon: Sparkles,
		iconBg: "bg-purple-100/80 border-purple-200/50",
		iconColor: "text-purple-600",
	},
];
export const LaunchTickerStrip: React.FC = () => {
	// Triple the items to make the seamless infinite scroll robust
	const scrolledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

	return (
		<div className="w-full bg-[#f8fafc]/90 border-y border-slate-200/60 py-6 sm:py-8 overflow-hidden select-none relative z-20">
			{/* Soft overlay gradients on sides for depth */}
			<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
			<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

			<div className="flex w-max">
				<motion.div
					className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20"
					animate={{ x: ["0%", "-33.333%"] }}
					transition={{
						ease: "linear",
						duration: 25,
						repeat: Infinity,
					}}
				>
					{scrolledItems.map((item, idx) => (
						<div
							key={`${item.text}-${idx}`}
							className="flex items-center gap-4 shrink-0"
						>
							<span className="text-[#0f172a] font-[900] text-lg sm:text-xl md:text-[23px] tracking-[0.06em] whitespace-nowrap">
								{item.text}
							</span>

							{/* Little circle badge */}
							<div
								className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 shadow-sm ${item.iconBg}`}
							>
								<item.icon
									className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] ${item.iconColor}`}
								/>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default LaunchTickerStrip;
