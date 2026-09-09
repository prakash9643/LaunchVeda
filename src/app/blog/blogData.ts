export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  displayDate: string;
  readTime: string;
  author: string;
  sections?: BlogSection[];
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

const IMAGE_FALLBACK = "/background_image.png";

const categoryImages: Record<string, string> = {
  "Fragrance & brand strategy": "/slider/11.webp",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "from-idea-to-market-launchveda-builds-brands-2026",
    title: "From Idea to Market: How LaunchVeda Builds Brands in 2026",
    excerpt:
      "Launching a product is easier than ever. Building a compliant, differentiated and marketplace-ready brand remains the real challenge.",
    category: "Product launch strategy",
    image: "/background_image.png",
    imageAlt: "Founder planning a product brand launch roadmap",
    datePublished: "2026-09-09",
    displayDate: "9 Sep 2026",
    readTime: "7 min read",
    author: "LaunchVeda",
    sections: [
      {
        id: "categories",
        heading: "Categories We Help Launch",
        items: [
          "Perfume & Fragrance Brands",
          "Skincare Brands",
          "Modern Ayurveda Brands",
          "Nutraceuticals & Wellness Brands",
        ],
      },
      {
        id: "services",
        heading: "Our End-to-End Services",
        items: [
          "Market Research & Brand Strategy — Choose a category, map competitors and define brand positioning.",
          "Product Formulation & Sampling — Guide product formulation, create samples, revise and finalize the product.",
          "Manufacturer Selection & Production — Identify and coordinate with the right product manufacturer in India, plan minimum order quantity (MOQ) and prepare for production.",
          "Packaging & Compliance — Decide product packaging formats, develop label direction and provide product compliance guidance in India.",
          "Branding & Visual Identity — Create the brand name, develop brand identity, craft messaging and build packaging communication.",
          "Product Photography & Content — Create product photography, lifestyle images, reels, UGC content and marketplace creatives.",
          "Website & Marketplace Readiness — Build a D2C website, create product pages and prepare the brand for Amazon, Flipkart and online marketplaces in India.",
          "Marketing & Growth — Use social media marketing, influencer marketing, performance marketing and structured growth planning.",
        ],
      },
      {
        id: "process",
        heading: "The LaunchVeda Process",
        paragraphs: [
          "Idea → Market Research → Brand Positioning → Product Formulation → Sampling → Manufacturer Selection → Packaging → Compliance → Branding → Manufacturing → Product Photography → D2C Website → Marketplace Setup → Pre-Launch Marketing → Market Launch → Growth",
        ],
      },
      {
        id: "why-launchveda",
        heading: "Why LaunchVeda?",
        paragraphs: [
          "Instead of juggling multiple vendors, founders get one connected end-to-end product launch system where product, brand, compliance and growth are planned together.",
          "Whether you want to launch a perfume brand in India, start a skincare brand in India, build a modern Ayurveda brand or launch a nutraceutical brand in India, LaunchVeda helps move your idea from concept to market.",
          "A manufacturer can make your product. LaunchVeda helps turn it into a market-ready brand.",
        ],
      },
      {
        id: "seo-keywords",
        heading: "Topics Covered",
        paragraphs: [
          "Product launch company in India, end-to-end product launch, product development, product manufacturer in India, product formulation, product packaging, brand positioning, product compliance in India, D2C website, marketplace setup, launch a perfume brand in India, start a skincare brand in India, modern Ayurveda brand, nutraceutical brand in India and performance marketing.",
        ],
      },
    ],
  },
  {
    slug: "perfume-is-booming-in-india",
    title: "Perfume Is Booming in India. Here’s How to Enter in 2026",
    excerpt:
      "A practical guide to launching a memorable perfume brand in India, from positioning and fragrance development to packaging, compliance and growth.",
    category: "Fragrance & brand strategy",
    image: categoryImages["Fragrance & brand strategy"] || IMAGE_FALLBACK,
    imageAlt: "Premium perfume bottle styled with warm amber tones",
    datePublished: "2026-01-15",
    displayDate: "15 Jan 2026",
    readTime: "6 min read",
    author: "LaunchVeda",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export { IMAGE_FALLBACK };
