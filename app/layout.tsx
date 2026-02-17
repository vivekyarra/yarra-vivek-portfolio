import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
	"Hello! I am Yarra Vivek, a Computer Science undergraduate focused on full-stack and AI-driven systems. Explore my projects, skills, and experience.";

export const metadata: Metadata = {
	title: "Yarra Vivek | Full-Stack & AI Developer",
	description,
	metadataBase: new URL(siteUrl),
	openGraph: {
		type: "website",
		url: siteUrl,
		title: "Yarra Vivek | Full-Stack & AI Developer",
		description,
	},
	twitter: {
		card: "summary_large_image",
		title: "Yarra Vivek | Full-Stack & AI Developer",
		description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased w-screen max-w-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
