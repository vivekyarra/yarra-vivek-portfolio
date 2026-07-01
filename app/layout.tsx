import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
	"Hello! I'm Yarra Vivek, a Computer Science undergraduate and software engineering intern building drone platforms, full-stack systems, and AI/ML products.";

export const metadata: Metadata = {
	title: "Yarra Vivek | Software Engineering Intern & AI Developer",
	description,
	metadataBase: new URL(siteUrl),
	openGraph: {
		type: "website",
		url: siteUrl,
		title: "Yarra Vivek | Software Engineering Intern & AI Developer",
		description,
	},
	twitter: {
		card: "summary_large_image",
		title: "Yarra Vivek | Software Engineering Intern & AI Developer",
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
