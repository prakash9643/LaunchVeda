import SEOManager from "../../components/seo/SEOManager";
import ServicesClientPage from "./ServicesClientPage";

export default function Page() {
	return (
		<>
			<SEOManager
				title="Product Launch Services in India | Launch Veda"
				description="Explore Launch Veda’s product launch services for formulation, manufacturer selection, packaging, compliance, branding, website, marketplace listing, and marketing."
				canonical="https://www.launchveda.com/services"
				breadcrumb={[
					{ name: "Home", item: "https://www.launchveda.com" },
					{
						name: "Services",
						item: "https://www.launchveda.com/services",
					},
				]}
				faq={[
					{
						q: "What services does LaunchVeda provide?",
						a: "LaunchVeda provides end-to-end product launch services including brand strategy, formulation direction, manufacturing support, packaging, compliance, website, marketplace launch, social media and growth marketing.",
					},
					{
						q: "Can LaunchVeda help me if I only have an idea?",
						a: "Yes. LaunchVeda helps early-stage founders convert ideas into structured launch roadmaps with product direction, category selection, positioning, compliance planning and go-to-market strategy.",
					},
					{
						q: "Does LaunchVeda provide manufacturing?",
						a: "LaunchVeda helps with manufacturer selection, sampling coordination and production direction. Final manufacturing depends on the selected manufacturing partner, category, MOQ and commercial terms.",
					},
					{
						q: "Which product categories does LaunchVeda support?",
						a: "LaunchVeda supports Perfume, Ayurveda, Cosmetics, Nutraceuticals and modern D2C product categories.",
					},
					{
						q: "Does LaunchVeda help with marketplace launch?",
						a: "Yes. LaunchVeda supports marketplace readiness for platforms like Amazon, Flipkart, Nykaa, Tata 1mg and quick commerce through listing content, product assets and launch planning.",
					},
					{
						q: "Does LaunchVeda handle marketing after launch?",
						a: "Yes. LaunchVeda supports social media, content planning, performance marketing direction, influencer planning and advanced growth systems.",
					},
				]}
				service={{
					name: "Product Launch System Services",
					description:
						"Explore Launch Veda’s product launch services for formulation, manufacturer selection, packaging, compliance, branding, website, marketplace listing, and marketing.",
				}}
			/>
			<ServicesClientPage />
		</>
	);
}
