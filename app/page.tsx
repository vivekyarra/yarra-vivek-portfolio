import ResumeDock from "@/components/dock";
import { GridPattern } from "@/components/magicui/grid-pattern";
import CertificationsSection from "@/components/sections/certifications-section";
import EasterEggSection from "@/components/sections/easter-egg-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import ProjectSection from "@/components/sections/projects-section";
import SkillSection from "@/components/sections/skills-section";
import ThankSection from "@/components/sections/thanks-section";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div>
			<div className="relative">
				<HeroSection />
				<GridPattern
					width={30}
					height={30}
					x={-1}
					y={-1}
					strokeDasharray={"4 2"}
					className={cn(
						"[mask-image:linear-gradient(to_top,white_90%,transparent)]",
						"z-[-10]"
					)}
				/>
				<IntroSection />
				<SkillSection />
				<ExperienceSection />
				<ProjectSection />
				<CertificationsSection />
				<ThankSection />
				<EasterEggSection />
				<ResumeDock />
			</div>
		</div>
	);
}
