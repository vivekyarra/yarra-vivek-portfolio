"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "../ui/timeline";
import { CheckIcon } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const items = [
	{
		id: 1,
		date: "May 2026 - Present",
		title: "Software Engineering Intern",
		company: "Magnumwings",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Led end-to-end development of a real-time drone Ground
						Control Station using Python, FastAPI, WebSockets, WebRTC,
						and MAVLink.
					</li>
					<li>
						Architected a React mission dashboard with live MAVLink
						telemetry, WebRTC video streaming, and autonomous command
						dispatch.
					</li>
					<li>
						Building interceptor drone software with low-latency
						targeting and autonomous decision-making pipelines.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Python</Badge>
					<Badge variant="outline">FastAPI</Badge>
					<Badge variant="outline">WebRTC</Badge>
					<Badge variant="outline">MAVLink</Badge>
				</div>
			</div>
		),
	},
	{
		id: 2,
		date: "Nov 2025 - May 2026",
		title: "AI/ML Intern",
		company: "QSkill - SR India",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Built and deployed text classification pipelines using
						TF-IDF with Logistic Regression, KNN, and Naive Bayes.
					</li>
					<li>
						Evaluated models with F1-score, precision-recall, and
						confusion matrix analysis to drive accuracy improvements.
					</li>
					<li>
						Developed a Node.js/Express API with a React frontend for
						real-time model inference from raw input to structured UI.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Machine Learning</Badge>
					<Badge variant="outline">Node.js</Badge>
					<Badge variant="outline">React</Badge>
					<Badge variant="outline">Model Inference</Badge>
				</div>
			</div>
		),
	},
	{
		id: 3,
		date: "Mar-Apr 2026",
		title: "IoT Intern",
		company: "Emertxe",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Developed C applications on Arduino targeting
						microcontroller architectures with sensor interfacing and
						GPIO control.
					</li>
					<li>
						Simulated and validated end-to-end circuit prototypes in
						PicsimLab across hardware-software integration and
						peripheral communication.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">C</Badge>
					<Badge variant="outline">Arduino</Badge>
					<Badge variant="outline">IoT</Badge>
					<Badge variant="outline">Embedded Systems</Badge>
				</div>
			</div>
		),
	},
	{
		id: 4,
		date: "2026",
		title: "Grand Finalist",
		company: "Meta, PyTorch, HuggingFace, and Scaler OpenEnv Hackathon",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Selected among 800 teams from 31,000+ registrations and
					presented live in Bangalore as a solo participant.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">PyTorch</Badge>
					<Badge variant="outline">HuggingFace</Badge>
					<Badge variant="outline">AI Agents</Badge>
				</div>
			</div>
		),
	},
	{
		id: 5,
		date: "2026",
		title: "218th Place",
		company: "HackerRank Orchestrate",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Ranked among 12,885 participants from 48 countries in a
					24-hour AI agent building challenge.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">AI Agents</Badge>
					<Badge variant="outline">Hackathon</Badge>
				</div>
			</div>
		),
	},
	{
		id: 6,
		date: "2026",
		title: "Competitive Programming Achievement",
		company: "Codeforces",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Secured Rank 16 in Codeforces Round 1081 (Div. 2) among
					13,600+ participants.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Competitive Programming</Badge>
					<Badge variant="outline">Algorithms</Badge>
				</div>
			</div>
		),
	},
	{
		id: 7,
		date: "2023 - 2027",
		title: "B.Tech in Computer Science & Engineering",
		separator: "at",
		company: "Vignan's Lara Institute of Technology & Science",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Current GPA: 7.80/10.0. Based in Andhra Pradesh, India.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Computer Science</Badge>
					<Badge variant="outline">System Design</Badge>
					<Badge variant="outline">Software Engineering</Badge>
				</div>
			</div>
		),
	},
];

const ExperienceSection = () => {
	return (
		<div className="w-full xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-8">
			<TextReveal className="text-center">
				Now let&apos;s talk about my experience
			</TextReveal>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex justify-center"
			>
				<Timeline defaultValue={items.length}>
					{items.map((item) => (
						<TimelineItem
							step={item.id}
							className="group-data-[orientation=vertical]/timeline:ms-10"
							key={item.id}
						>
							<TimelineHeader>
								<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
								<TimelineDate>{item.date}</TimelineDate>
								<TimelineTitle>
									{item.title}{" "}
									<span className="font-normal">
										{item.separator ?? "at"}
									</span>{" "}
									<AuroraText className="font-black">
										{item.company}
									</AuroraText>
								</TimelineTitle>
								<TimelineIndicator className="group-data-completed/timeline-item:bg-green-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
									<CheckIcon
										className="group-not-data-completed/timeline-item:hidden"
										size={16}
									/>
								</TimelineIndicator>
							</TimelineHeader>
							<TimelineContent>
								{item.description}
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</motion.div>
		</div>
	);
};

export default ExperienceSection;

