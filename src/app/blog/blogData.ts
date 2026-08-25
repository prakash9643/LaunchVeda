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
}

const IMAGE_FALLBACK = "/background_image.png";

const categoryImages: Record<string, string> = {
  "Fragrance & brand strategy": "/slider/11.webp",
};

export const blogPosts: BlogPost[] = [
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
