import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin-ext"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				<meta name="apple-mobile-web-app-title" content="Tracker" />
			</head>
			<body className={`${poppins.className} antialiased dark`}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
