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
			"AI-powered chess engine built from scratch using a CNN evaluator, Negamax search, and Alpha-Beta pruning under strict time limits. Includes a custom Pygame desktop GUI with hints, undo, move analysis, and session scoring.",
		href: "https://drive.google.com/file/d/1LmHEt-a_ZrsByxck6yOZzZYSBfmbuG6Q/view?usp=drive_link",
		image: "/projects/cortex64.png",
	},
	hrBot: {
		title: "Autonomous HR Chatbot (LLM + RAG)",
		description:
			"Enterprise HR assistant using LangChain agents and OpenAI/Azure OpenAI. Built a RAG pipeline with semantic search, structured CSV reasoning, and a Streamlit interface with simulated enterprise ingestion.",
		href: "https://drive.google.com/file/d/1-ZJdrhWoO3MRmKSUiggxDIE3qVtVA5u7/view?usp=drive_link",
		image: "/projects/hr-chatbot.png",
	},
	movieBooking: {
		title: "Movie Booking Web Application",
		description:
			"Full-stack MERN project implementing authentication, movie listings, showtime and seat selection, and booking confirmation with clean API design and production-ready architecture.",
		href: "https://drive.google.com/file/d/1ym-s3UvdnQKOdHcvKNN42UC1_B8_7OS6/view?usp=drive_link",
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
						<WobbleCard containerClassName="w-full h-full bg-green-700 min-h-[500px] lg:min-h-[320px]">
							<Link
								href={projects.cortex64.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									{projects.cortex64.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.cortex64.description}
								</p>
							</div>
							<Image
								src={projects.cortex64.image}
								width={360}
								height={360}
								alt="project-cortex64"
								className="absolute -right-4 -bottom-20 md:-bottom-10 rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-2"
					>
						<WobbleCard containerClassName="w-full h-full min-h-[500px] xl:min-h-[320px] bg-blue-900">
							<Link
								href={projects.hrBot.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-xl w-full">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									{projects.hrBot.title}
								</h2>
								<p className="mt-4 text-left text-base/6 text-neutral-200">
									{projects.hrBot.description}
								</p>
							</div>
							<Image
								src={projects.hrBot.image}
								width={500}
								height={500}
								alt="project-hr-chatbot"
								className="absolute -right-4 lg:-right-[18%] -bottom-8 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="col-span-1"
					>
						<WobbleCard containerClassName="min-h-[320px] bg-pink-800">
							<Link
								href={projects.movieBooking.href}
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
								{projects.movieBooking.title}
							</h2>
							<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
								{projects.movieBooking.description}
							</p>
							<Image
								src={projects.movieBooking.image}
								width={250}
								height={250}
								alt="project-movie-booking"
								className="absolute -right-4 -bottom-4 rounded-xl"
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

