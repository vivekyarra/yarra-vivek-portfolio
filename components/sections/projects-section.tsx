"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const projects = {
	cortex64: {
		title: "Cortex64 Chess Engine",
		description:
			"AI chess engine with CNN position evaluation, Negamax search, and Alpha-Beta pruning under strict move-time constraints. Includes an interactive Pygame desktop GUI with hints, undo, and analysis.",
		href: "https://github.com/vivekyarra/cortex64-chess-engine",
		image: "/projects/cortex64.png",
	},
	voidVault: {
		title: "VoidVault - Production Serverless Social Platform",
		description:
			"Production-grade social platform built with React 19, TypeScript, Cloudflare Pages, and Supabase. Includes cookie-based auth, cursor-paginated feeds, and real-time chat workflows at scale.",
		href: "https://voidvault.pages.dev",
		image: "/projects/void-vault.png",
	},
	aiInterview: {
		title: "AI Interview Platform",
		description:
			"Real-time voice mock interview platform with WebRTC pipelines, STT transcripts, and NLP-based evaluation. Designed adaptive interview flow and structured scoring analytics.",
		href: "https://github.com/vivekyarra",
		image: "/projects/ai-interview.png",
	},
	movieBooking: {
		title: "Movie Booking Web Application",
		description:
			"Full-stack MERN app with secure auth, showtime discovery, interactive seat mapping, and production-ready REST APIs with optimized MongoDB design.",
		href: "https://moviesbyvivek-mern.vercel.app/",
		image: "/projects/movie-booking.png",
	},
};

const ProjectSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8"
		>
			<div className="flex justify-center items-center flex-col gap-4">
				<Badge
					variant="destructive"
					className="sm:text-4xl text-3xl font-bold tracking-wide"
				>
					My Projects
				</Badge>
				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10"
				>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full bg-blue-900 min-h-[500px] lg:min-h-[340px]">
							<Link
								href={projects.cortex64.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-3xl w-full pr-0 lg:pr-72">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									{projects.cortex64.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.cortex64.description}
								</p>
							</div>
							<Image
								src={projects.cortex64.image}
								width={340}
								height={220}
								alt="project-cortex64"
								className="pointer-events-none absolute right-4 bottom-4 rounded-2xl hidden lg:block"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="col-span-1 lg:col-span-2"
					>
						<WobbleCard containerClassName="w-full h-full min-h-[500px] xl:min-h-[320px] bg-cyan-800">
							<Link
								href={projects.voidVault.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-2xl w-full pr-0 lg:pr-64">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									{projects.voidVault.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.voidVault.description}
								</p>
							</div>
							<Image
								src={projects.voidVault.image}
								width={300}
								height={190}
								alt="project-voidvault"
								className="pointer-events-none absolute right-4 bottom-4 rounded-2xl hidden lg:block"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="col-span-1"
					>
						<WobbleCard containerClassName="min-h-[320px] bg-violet-900">
							<Link
								href={projects.aiInterview.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									{projects.aiInterview.title}
								</h2>
								<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
									{projects.aiInterview.description}
								</p>
							</div>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full min-h-[500px] lg:min-h-[320px] bg-pink-800">
							<Link
								href={projects.movieBooking.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-3xl w-full pr-0 lg:pr-72">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									{projects.movieBooking.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.movieBooking.description}
								</p>
							</div>
							<Image
								src={projects.movieBooking.image}
								width={300}
								height={200}
								alt="project-movie-booking"
								className="pointer-events-none absolute right-4 bottom-4 rounded-xl hidden lg:block"
							/>
						</WobbleCard>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex justify-center"
			>
				<h2 className="sm:text-2xl text-xl font-bold tracking-wide">
					...and many more
				</h2>
			</motion.div>
		</motion.div>
	);
};

export default ProjectSection;
