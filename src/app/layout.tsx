import type { Metadata } from "next";
import Script from "next/script";
import "../index.css";
import FAQSchemaDetector from "../components/FAQSchemaDetector";
import ScrollToTop from "../components/ui/ScrollToTop";

declare global {
	interface Window {
		dataLayer: unknown[];
	}
}

export const metadata: Metadata = {
	title: {
		default: "LaunchVeda | India's No.1 Product Launch Ecosystem",
		template: "%s | LaunchVeda",
	},
	description:
		"LaunchVeda is India’s No.1 Product Launch Company helping founders launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with formulation, manufacturing, branding, compliance, website, marketplace listing, and advanced growth marketing support.",
	openGraph: {
		title: "LaunchVeda | Turn Ideas Into Brands: Perfume, Cosmetic & Nutraceutical Launch Partner",
		description:
			"Launch your Perfume, Ayurveda, Cosmetic, or Nutraceutical brand with our complete ecosystem.",
		url: "https://www.launchveda.com",
		siteName: "LaunchVeda",
		images: [
			{
				url: "/background_image.png",
				width: 1200,
				height: 630,
				alt: "LaunchVeda Ecosystem",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "LaunchVeda | India's No.1 Product Launch Ecosystem",
		description:
			"Launch your Perfume, Ayurveda, Cosmetic, or Nutraceutical brand with our complete ecosystem.",
		images: ["/background_image.png"],
	},
	alternates: {
		canonical: "https://www.launchveda.com",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preload"
					href="/herrrrooo.webp"
					as="image"
					type="image/webp"
					fetchPriority="high"
					media="(min-width: 640px)"
				/>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-LGJZT4W977"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LGJZT4W977');
          `}
				</Script>
			</head>
			<body className="antialiased">
				<noscript>
					<style>{`
            * {
              opacity: 1 !important;
              visibility: visible !important;
              transform: none !important;
            }
          `}</style>
				</noscript>
				{children}

				<FAQSchemaDetector />
				<ScrollToTop />
			</body>
		</html>
	);
}
