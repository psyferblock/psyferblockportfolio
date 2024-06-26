import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Psyfer Inc... The Block",
	description: "Profile for Psyfer Inc and its history",
	keywords:[
		"Business Development Consulting",
		"Digital Transformation Services",
		"Company Building Consultants",
		"Startup Development Experts",
		"Digital Strategy Consulting",
		"Business Digitization Solutions",
		"Tech-Savvy CEO Leadership",
		"Developer CEO Insights",
		"Innovation Consulting Firm",
		"Enterprise Digital Solutions",
		"Tech-Driven Business Growth",
		"Custom Software Development Consulting",
		"Digital Business Consulting",
		"Tech Integration Services",
		"CEO as Developer Success Stories"
	]
	
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<link
					rel="icon"
					href="/jsm-logo.png"
					sizes="any"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
