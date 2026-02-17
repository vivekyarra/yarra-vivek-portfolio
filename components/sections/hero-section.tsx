"use client";
import React from "react";
import { LampContainer } from "../ui/lamp-container";
import { motion } from "motion/react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div
			id="hero"
			className="relative flex flex-col h-[100vh] w-full items-center justify-center"
		>
			<LampContainer className="h-screen">
				<motion.h1
					initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
					animate={{ opacity: 1, y: 0, filter: "none" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="mt-8 py-4 text-center text-5xl font-bold tracking-tighter md:text-6xl lg:text-8xl"
				>
					Hello, I am <br />
					<AuroraText speed={2}>Yarra Vivek</AuroraText>
				</motion.h1>
				<motion.div
					className="flex gap-4 mt-16"
					initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
					animate={{ opacity: 1, y: 0, filter: "none" }}
					transition={{
						delay: 1,
						duration: 0.8,
						type: "spring",
					}}
				>
					<Link href="mailto:vivekyarra567@gmail.com">
						<Button size="xl" className="!z-20">
							Get In Touch
						</Button>
					</Link>
					<Link href="/resume.pdf" download="[Resume] Yarra Vivek.pdf">
						<Button size="xl" variant="outline" className="!z-20">
							Download Resume
							<Download className="size-5" />
						</Button>
					</Link>
				</motion.div>
			</LampContainer>
		</div>
	);
};

export default HeroSection;

