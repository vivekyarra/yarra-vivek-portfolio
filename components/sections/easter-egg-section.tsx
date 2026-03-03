"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import { AuroraText } from "../magicui/aurora-text";
import { GradientBars } from "../ui/gradient-bars";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const movies = [
	{
		title: "The Wolf of Wall Street",
		subtitle: "2013",
		image: "/movies/wolf-of-wall-street.png",
		imdb: "https://www.imdb.com/title/tt0993846/",
		tone: "bg-[#960808]",
		span: "lg:col-span-4",
	},
	{
		title: "The Godfather Part II",
		subtitle: "1974",
		image: "/movies/godfather-2.jpg",
		imdb: "https://www.imdb.com/title/tt0071562/",
		tone: "bg-[#1F1F23]",
		span: "lg:col-span-2",
	},
	{
		title: "Khakee (2017)",
		subtitle: "2017",
		image: "/movies/khakee-2017.jpg",
		imdb: "https://www.imdb.com/title/tt7060460/",
		tone: "bg-[#615073]",
		span: "lg:col-span-2",
	},
	{
		title: "The Shawshank Redemption",
		subtitle: "1994",
		image: "/movies/shawshank-redemption.jpg",
		imdb: "https://www.imdb.com/title/tt0111161/",
		tone: "bg-[#0F139F]",
		span: "lg:col-span-4",
	},
	{
		title: "Janatha Garage",
		subtitle: "2016",
		image: "/movies/janatha-garage.jpg",
		imdb: "https://www.imdb.com/title/tt5946852/",
		tone: "bg-[#342D66]",
		span: "lg:col-span-6",
	},
	{
		title: "Inception",
		subtitle: "2010",
		image: "/movies/inception.jpg",
		imdb: "https://www.imdb.com/title/tt1375666/",
		tone: "bg-[#B20068]",
		span: "lg:col-span-3",
	},
	{
		title: "Zodiac",
		subtitle: "2007",
		image: "/movies/zodiac.jpg",
		imdb: "https://www.imdb.com/title/tt0443706/",
		tone: "bg-[#137B79]",
		span: "lg:col-span-3",
	},
	{
		title: "The Prestige",
		subtitle: "2006",
		image: "/movies/the-prestige.jpg",
		imdb: "https://www.imdb.com/title/tt0482571/",
		tone: "bg-[#3E2E68]",
		span: "lg:col-span-4",
	},
	{
		title: "The Social Network",
		subtitle: "2010",
		image: "/movies/the-social-network.png",
		imdb: "https://www.imdb.com/title/tt1285016/",
		tone: "bg-[#15135E]",
		span: "lg:col-span-2",
	},
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
						className="mt-16 grid grid-cols-1 lg:grid-cols-6 gap-4 w-full"
					>
						{movies.map((movie, idx) => (
							<motion.a
								key={movie.title}
								href={movie.imdb}
								target="_blank"
								rel="noopener noreferrer"
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
								className={`${movie.span} ${movie.tone} group relative min-h-[200px] overflow-hidden rounded-3xl border border-white/10 p-4 md:p-5 text-white`}
							>
								<div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_0%_0%,rgba(255,255,255,0.22),transparent)]" />
								<div className="relative z-10 flex h-full items-stretch gap-4">
									<div className="relative h-[124px] w-[92px] sm:h-[144px] sm:w-[106px] shrink-0 overflow-hidden rounded-xl border border-white/20 bg-black/30">
										<Image
											src={movie.image}
											alt={`${movie.title} poster`}
											fill
											className="object-cover scale-[1.07]"
											sizes="120px"
										/>
									</div>
									<div className="flex min-w-0 flex-1 flex-col justify-between">
										<div className="space-y-2">
											<div className="flex items-start justify-between gap-3">
												<h4 className="text-xl md:text-2xl font-semibold leading-tight">
													{movie.title}
												</h4>
												<span className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold whitespace-nowrap">
													IMDb
												</span>
											</div>
											<p className="text-sm md:text-base text-white/80">
												{movie.subtitle}
											</p>
										</div>
										<div className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
											<ExternalLink className="size-4" />
											<span>Open on IMDb</span>
										</div>
									</div>
								</div>
							</motion.a>
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
