import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "To Do App",
	description: "Get organized with your tasks",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>

			<body className={inter.className}>{children}</body>
		</html>
	);
}
