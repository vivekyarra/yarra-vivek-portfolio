"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const projects = {
	apex: {
		title: "APEX - Adaptive Pipeline for Expert Triage",
		description:
			"Seven-stage AI ticket-routing engine with a zero-shot LLaMA security layer, hybrid BM25 + MiniLM retrieval, automated escalation fallback, cached query deduplication, and real-time telemetry.",
		href: "https://github.com/vivekyarra/apex",
		image: "/projects/apex.png",
	},
	dataforge: {
		title: "DataForge Arena",
		description:
			"GRPO-based reinforcement learning environment where a 1.5B LLM agent detects and repairs adversarially corrupted tabular data with reward signals, structured JSON validation, and a 127-test suite.",
		href: "https://github.com/vivekyarra/dataforge-arena",
		image: "/projects/dataforge-arena.png",
	},
	argus: {
		title: "ARGUS - Ambient AI Vision Agent",
		description:
			"Production ambient screen-intelligence agent using Gemini 2.0 Flash Vision, FastAPI, Docker, and Google Cloud services with pixel-difference filtering, HMAC auth, rate limiting, and strong test coverage.",
		href: "https://github.com/vivekyarra/argus-agent",
		image: "/projects/argus-agent.png",
	},
	voidVault: {
		title: "VoidVault",
		description:
			"Full-stack serverless social platform with a Cloudflare Workers REST API, Supabase, PostgreSQL, cursor-paginated feeds, real-time chat, CSRF-protected auth, and per-IP rate limiting.",
		href: "https://voidvault.pages.dev",
		image: "/projects/void-vault.png",
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
								href={projects.apex.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-3xl w-full pr-0 lg:pr-72">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									{projects.apex.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.apex.description}
								</p>
							</div>
							<Image
								src={projects.apex.image}
								width={340}
								height={220}
								alt="project-apex"
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
								href={projects.dataforge.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-2xl w-full pr-0 lg:pr-64">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									{projects.dataforge.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.dataforge.description}
								</p>
							</div>
							<Image
								src={projects.dataforge.image}
								width={300}
								height={190}
								alt="project-dataforge"
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
								href={projects.argus.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									{projects.argus.title}
								</h2>
								<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
									{projects.argus.description}
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
								href={projects.voidVault.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="relative z-10 lg:max-w-3xl w-full pr-0 lg:pr-72">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									{projects.voidVault.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.voidVault.description}
								</p>
							</div>
							<Image
								src={projects.voidVault.image}
								width={300}
								height={200}
								alt="project-voidvault"
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
