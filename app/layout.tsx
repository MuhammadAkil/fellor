import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import QueryProvider from "@/components/providers/query-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "FELLOR - Hiring Dashboard",
	description: "Professional hiring and recruitment dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
