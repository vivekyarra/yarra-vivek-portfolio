"use client";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "motion/react";

const certifications = [
	{
		title: "Introduction to Generative AI and Agents - Microsoft",
		href: "https://drive.google.com/file/d/1Py6HcB5U1MhJqSMkhDz3T1BEv39jOQ1Z/view?usp=drivesdk",
	},
	{
		title: "Programming in Java - NPTEL",
		href: "https://drive.google.com/file/d/1L2f3FrOjZ04w1TGACEnUMMzQWH0h1SL1/view?usp=drivesdk",
	},
	{
		title: "Python - FCC",
		href: "https://drive.google.com/file/d/1_ctzuDovEkmyE-tfTvnWrRNcDLnkMrYw/view?usp=drive_link",
	},
	{
		title: "Generative AI for All - Infosys",
		href: "https://drive.google.com/file/d/1LDzvM5_CRhH81oLNZ7UBEmQsiNhwY2N4/view?usp=drivesdk",
	},
	{
		title: "Introduction to Cybersecurity - CISCO",
		href: "https://drive.google.com/file/d/1i3Qo3QjTm1ERnrmg3C8t2HJx5qiwsBKW/view?usp=drivesdk",
	},
	{
		title: "Cloud Computing - Microsoft",
		href: "https://drive.google.com/file/d/1L0EsA19EWRngr8qHUWmhEG-sdQVNW71V/view?usp=drivesdk",
	},
	{
		title: "Basics of Python - Infosys",
		href: "https://drive.google.com/file/d/1jOdc6TULgrsR2S0cSfdcmwVuIJGMQRg7/view?usp=drivesdk",
	},
];

const CertificationsSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8"
		>
			<div className="flex justify-center items-center flex-col gap-4">
				<Badge
					variant="secondary"
					className="sm:text-4xl text-3xl font-bold tracking-wide"
				>
					Certifications
				</Badge>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full mx-auto"
			>
				{certifications.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-xl border border-border bg-card px-5 py-5 text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
					>
						{item.title}
					</Link>
				))}
			</motion.div>
		</motion.div>
	);
};

export default CertificationsSection;
