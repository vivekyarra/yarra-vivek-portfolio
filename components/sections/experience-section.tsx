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
		date: "2026",
		title: "Software Engineering Virtual Experience",
		company: "JPMorgan Chase (Forage)",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Built a Spring Boot microservice integrating Kafka for
						high-volume transactional processing.
					</li>
					<li>
						Implemented REST APIs with JPA-backed persistence and
						validated reliability through testing.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Spring Boot</Badge>
					<Badge variant="outline">Kafka</Badge>
					<Badge variant="outline">REST APIs</Badge>
					<Badge variant="outline">JPA</Badge>
				</div>
			</div>
		),
	},
	{
		id: 2,
		date: "2026",
		title: "Cloud Architecture Virtual Experience",
		company: "AWS APAC (Forage)",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Designed scalable AWS hosting architecture for growth and
						performance bottlenecks.
					</li>
					<li>
						Evaluated reliability, scalability, and cost trade-offs
						across architecture options.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">AWS</Badge>
					<Badge variant="outline">Cloud Architecture</Badge>
					<Badge variant="outline">Scalability</Badge>
					<Badge variant="outline">Cost Optimization</Badge>
				</div>
			</div>
		),
	},
	{
		id: 3,
		date: "2026",
		title: "Data Analytics Virtual Experience",
		company: "Tata iQ (Forage)",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
						Performed GenAI-assisted exploratory data analysis for
						customer delinquency risk indicators.
					</li>
					<li>
						Designed a no-code predictive approach for collections
						strategy decisions.
					</li>
				</ul>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Data Analytics</Badge>
					<Badge variant="outline">GenAI</Badge>
					<Badge variant="outline">EDA</Badge>
				</div>
			</div>
		),
	},
	{
		id: 4,
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
		id: 5,
		date: "2023 - 2027",
		title: "B.Tech in Computer Science & Engineering",
		separator: "at",
		company: "Vignan's Lara Institute of Technology & Science",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Current CGPA: 7.60 (up to 5th semester). Based in Guntur,
					Andhra Pradesh.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">Computer Science</Badge>
					<Badge variant="outline">System Design</Badge>
					<Badge variant="outline">Software Engineering</Badge>
				</div>
			</div>
		),
	},
	{
		id: 6,
		date: "2025",
		title: "Problem Solving Milestone",
		company: "LeetCode",
		description: (
			<div className="flex flex-col gap-2">
				<p>
					Solved 500+ LeetCode problems while improving algorithmic
					thinking, coding speed, and interview readiness.
				</p>
				<div className="flex gap-2 flex-wrap">
					<Badge variant="outline">DSA</Badge>
					<Badge variant="outline">Problem Solving</Badge>
					<Badge variant="outline">Python</Badge>
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

