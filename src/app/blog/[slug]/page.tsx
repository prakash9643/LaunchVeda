import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticlePage from "../BlogArticlePage";
import { blogPosts, getBlogPost } from "../blogData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://launchveda.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogArticlePage post={post} />;
}