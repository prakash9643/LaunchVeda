import App from "../App";
import SEOManager from "../components/seo/SEOManager";

export default function Home() {
	return (
		<>
			<SEOManager
				title="LaunchVeda | India’s No.1 Product Launch Company"
				description="LaunchVeda is India’s No.1 Product Launch Company helping founders launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with formulation, manufacturing, branding, compliance, website, marketplace listing, and advanced growth marketing support."
				canonical="https://www.launchveda.com"
				organization={{
					name: "LaunchVeda",
					url: "https://www.launchveda.com",
					logo: "https://www.launchveda.com/logo-full.png",
					description:
						"Premium product launch platform for Perfume, Ayurveda, Cosmetic, and Nutraceutical brands.",
					email: "support@launchveda.com",
					telephone: "+919711571599",
					contactOption: "TollFree",
					areaServed: "IN",
					availableLanguage: ["en"],
					addressCountry: "IN",
					sameAs: [
						"https://www.facebook.com/people/LaunchVeda-Indias-Best-Product-Launch-Solution/61590478586919/",
						"https://www.instagram.com/launchveda/",
						"https://in.linkedin.com/launchveda",
						"https://x.com/launchveda",
						"https://www.threads.com/@launchveda",
						"https://in.pinterest.com/launchveda",
						"https://www.behance.net/launchveda",
						"https://www.youtube.com/@LaunchVeda",
					],
				}}
				article={{
					headline:
						"LaunchVeda: Turn Your Idea Into a Brand - The Complete Launch Guide",
					image: "https://www.launchveda.com/background_image.png",
					datePublished: "2026-01-01T08:00:00+05:30",
					dateModified: "2026-06-30T00:18:54+05:30",
					description:
						"Learn how to launch your perfume, ayurveda, cosmetic, or nutraceutical brand with our complete connected launch ecosystem in India.",
				}}
				customSchemas={[
					{
						"@context": "https://schema.org",
						"@type": "WebSite",
						"@id": "https://www.launchveda.com/#website",
						url: "https://www.launchveda.com",
						name: "LaunchVeda",
						inLanguage: "en-IN",
						description:
							"LaunchVeda helps founders launch Perfume, Ayurveda, Cosmetic, Nutraceutical and D2C product brands in India.",
					},
					{
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: "Launch Veda",
						image: "https://www.launchveda.com/logo-full.png",
						"@id": "https://www.launchveda.com/#",
						url: "https://www.launchveda.com/",
						telephone: "+91-9711571599",
						address: {
							"@type": "PostalAddress",
							streetAddress:
								"Tower T3, 221, 2nd Floor, Golden I, Noida Extension, Greater Noida West, Uttar Pradesh 201308, India",
							addressLocality: "Greater Noida",
							postalCode: "201308",
							addressCountry: "IN",
						},
						geo: {
							"@type": "GeoCoordinates",
							latitude: 28.5898501,
							longitude: 77.43436249999999,
						},
						openingHoursSpecification: {
							"@type": "OpeningHoursSpecification",
							dayOfWeek: [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday",
								"Saturday",
							],
							opens: "10:00",
							closes: "18:30",
						},
						sameAs: [
							"https://www.facebook.com/people/LaunchVeda-Indias-Best-Product-Launch-Solution/61590478586919/",
							"https://www.instagram.com/launchveda",
							"https://www.youtube.com/@LaunchVeda",
							"https://www.linkedin.com/company/launch-veda",
							"https://in.pinterest.com/launchveda/",
							"https://www.launchveda.com/",
						],
					},
				]}
			/>
			<App />
		</>
	);
}
