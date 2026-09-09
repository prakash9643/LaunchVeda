import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import LaunchFooterSection from "../../components/layout/LaunchFooterSection";
import BlogImage from "./BlogImage";
import { blogPosts } from "./blogData";

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-[#fbfaf7] text-[#17233f]">
			<SEOManager
				title="LaunchVeda Journal | Product Launch Insights"
				description="Practical product launch insights for perfume, cosmetic, Ayurveda and nutraceutical founders."
				canonical="https://www.launchveda.com/blog"
			/>
			<div className="bg-[#061033]"><Navbar /></div>

			<main>
				<header className="bg-[#061033] px-4 pb-16 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-40">
					<div className="mx-auto max-w-[1180px]">
						<div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
							<Sparkles className="h-4 w-4" /> The LaunchVeda journal
						</div>
						<h1 className="max-w-4xl text-5xl leading-[0.98] sm:text-7xl">Ideas for building brands people remember.</h1>
						<p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
							Clear, useful thinking on product, positioning, packaging and growth for founders launching in India.
						</p>
					</div>
				</header>

				<section aria-labelledby="published-posts" className="mx-auto max-w-[1180px] px-4 py-14 sm:px-8 sm:py-20">
					<div className="mb-9 flex items-end justify-between gap-6">
						<div>
							<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Latest thinking</p>
							<h2 id="published-posts" className="text-3xl font-semibold sm:text-4xl">Published articles</h2>
						</div>
						<span className="hidden text-sm text-slate-500 sm:block">{blogPosts.length} article{blogPosts.length === 1 ? "" : "s"}</span>
					</div>

					<div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
						{blogPosts.map((post) => (
							<article key={post.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(6,16,51,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_24px_55px_rgba(6,16,51,0.13)]">
								<div className="relative aspect-[1.45] overflow-hidden bg-[#f0eee8]">
									<BlogImage
										src={post.image}
										alt={post.imageAlt}
										width={900}
										height={620}
										loading="lazy"
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600 shadow-sm backdrop-blur-sm">{post.category}</span>
								</div>
								<div className="flex flex-1 flex-col p-6 sm:p-7">
									<div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
										<span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-indigo-600" /> {post.displayDate}</span>
										<span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-indigo-600" /> {post.readTime}</span>
									</div>
									<h3 className="text-2xl font-semibold leading-tight text-[#17233f]">{post.title}</h3>
									<p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{post.excerpt}</p>
									<Link href={`/blog/${post.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
										Read More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</Link>
								</div>
							</article>
						))}
					</div>
				</section>
			</main>

			<div className="bg-[#061033]"><LaunchFooterSection /></div>
		</div>
	);
}
