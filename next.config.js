/** @type {import('next').NextConfig} */
const nextConfig = {
	agentRules: false,
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	async redirects() {
		return [
			{
				source: "/brand-naming-and-identity",
				destination: "/services/brand-naming-and-identity",
				permanent: true,
			},
			{
				source: "/marketplace-launch",
				destination: "/services/marketplace-launch",
				permanent: true,
			},
			{
				source: "/packaging-and-labeling",
				destination: "/services/packaging-and-labeling",
				permanent: true,
			},
			{
				source: "/growth-and-marketing",
				destination: "/services/growth-and-marketing",
				permanent: true,
			},
			{
				source: "/legal-and-compliance",
				destination: "/services/legal-and-compliance",
				permanent: true,
			},
			{
				source: "/ai-growth-and-marketing",
				destination: "/services/ai-growth-and-marketing",
				permanent: true,
			},
			{
				source: "/website-development",
				destination: "/services/website-development",
				permanent: true,
			},
			{
				source: "/product-formulation",
				destination: "/services/product-formulation",
				permanent: true,
			},
			{
				source: "/manufacturing-support",
				destination: "/services/manufacturing-support",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
