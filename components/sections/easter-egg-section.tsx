"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import { AuroraText } from "../magicui/aurora-text";
import { GradientBars } from "../ui/gradient-bars";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const movies = [
	"Movie Pick 01",
	"Movie Pick 02",
	"Movie Pick 03",
	"Movie Pick 04",
	"Movie Pick 05",
	"Movie Pick 06",
	"Movie Pick 07",
	"Movie Pick 08",
	"Movie Pick 09",
	"Movie Pick 10",
	"Movie Pick 11",
	"Movie Pick 12",
];

const EasterEggSection = () => {
	return (
		<>
			<div className="pb-10">
				<TextReveal className="text-center">
					Oh, you found an easter egg!
				</TextReveal>
				<div className="flex flex-col gap-10 lg:px-30 px-8">
					<motion.h2
						className="text-4xl font-bold text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<AuroraText>
							Just so you can get to know me better,
							<br /> here are some of my favorite movies!
						</AuroraText>
					</motion.h2>
					<motion.h3
						className="text-xl text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Feel free to reach out to me to appreciate or roast my movie
						taste (and recommendations!)
					</motion.h3>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
					>
						{movies.map((movie, idx) => (
							<motion.div
								key={movie}
								initial={{
									opacity: 0,
									scale: 0.9,
									filter: "blur(5px)",
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									filter: "blur(0px)",
								}}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.04 }}
								className="rounded-xl border border-border bg-card px-5 py-5 min-h-40 flex flex-col justify-between"
							>
								<h4 className="text-lg font-semibold">{movie}</h4>
								<Badge variant="outline" className="w-fit">
									Poster + IMDb link coming soon
								</Badge>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="h-screen flex items-center justify-center relative">
				<GradientBars colors={["#1D4ED8", "transparent"]} />
				<motion.h1
					className="text-center md:text-7xl text-5xl font-bold z-10"
					initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					Ok, now bye for real!
				</motion.h1>
			</div>
		</>
	);
};

export default EasterEggSection;
