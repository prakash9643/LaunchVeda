import { ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import LaunchFooterSection from "../../components/layout/LaunchFooterSection";
import type { BlogPost } from "./blogData";
import BlogImage from "./BlogImage";

const faqs = [
  {
    q: "How do I start a perfume business in India?",
    a: "Begin with a clear market position, fragrance brief and target price. Then validate samples, select a suitable manufacturer, plan packaging and compliance, and prepare your D2C and marketplace launch assets."
  },
  {
    q: "What is private label perfume manufacturing?",
    a: "Private label perfume manufacturing lets a brand select or adapt an existing fragrance and sell it under its own name, packaging and positioning. Evaluate quality, MOQ, testing and production capability before choosing a partner."
  },
  {
    q: "Why are discovery sets useful for an online perfume brand?",
    a: "Customers cannot smell a product through a screen. A discovery set lowers purchase risk, lets customers compare fragrances and creates a natural path to a full-size purchase."
  }
];

export default function BlogArticlePage({ post }: { post: BlogPost }) {
  return (
    <div className="bg-[#fbfaf7] min-h-screen flex flex-col text-[#17233f]">
      <SEOManager
        title={post.title}
        description={post.excerpt}
        canonical={`https://launchveda.com/blog/${post.slug}`}
        ogImage={`https://launchveda.com${post.image}`}
        ogType="article"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "Blog", item: "https://launchveda.com/blog" },
          { name: post.title, item: `https://launchveda.com/blog/${post.slug}` }
        ]}
        article={{
          headline: post.title,
          image: `https://launchveda.com${post.image}`,
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          description: post.excerpt,
          authorName: post.author
        }}
        faq={faqs}
      />
      <div className="bg-[#061033]"><Navbar /></div>
      <main className="flex-grow">
        <header className="bg-[#061033] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
          <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 text-orange-300 text-xs font-semibold uppercase tracking-[0.22em] mb-7"><Sparkles className="w-4 h-4" /> {post.category}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.3rem] leading-[1.05] text-white mb-7">{post.title}</h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-300">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-sm text-slate-400"><span>By {post.author}</span><span className="flex items-center gap-2"><Clock3 className="w-4 h-4 text-orange-300" /> {post.readTime}</span><span>{post.displayDate}</span></div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/30 aspect-[4/3]"><BlogImage src={post.image} alt={post.imageAlt} width={900} height={675} loading="eager" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061033]/45 to-transparent" /></div>
          </div>
        </header>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-12 sm:py-20 grid lg:grid-cols-[220px_minmax(0,680px)_240px] gap-10 lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d71912] font-semibold mb-4">In this article</p>
            <nav className="space-y-3 text-sm text-slate-500 border-l border-slate-200 pl-4"><a href="#market" className="block hover:text-[#d71912]">The market in 2026</a><a href="#positioning" className="block hover:text-[#d71912]">Find your reason to exist</a><a href="#launch" className="block hover:text-[#d71912]">Build the launch system</a><a href="#mistake" className="block hover:text-[#d71912]">The biggest mistake</a></nav>
          </aside>

          <article className="order-1 lg:order-2 max-w-none prose prose-slate prose-headings:text-[#17233f] prose-headings:font-semibold prose-p:text-[1.08rem] prose-p:leading-[1.85] prose-p:text-slate-600 prose-strong:text-[#17233f]">
            <p className="text-xl sm:text-2xl leading-relaxed text-[#17233f]">The <strong>perfume market in India</strong> is changing fast. Deodorants and a few luxury names once dominated the space. Today, <strong>D2C perfume brands</strong>, Indian fragrance labels and younger consumers are reshaping demand for EDPs and long-lasting perfumes.</p>
            <div id="market" className="not-prose grid sm:grid-cols-2 gap-4 my-10"><div className="bg-[#061033] text-white rounded-2xl p-6"><p className="text-orange-300 text-xs uppercase tracking-[0.18em] mb-3">Market size, 2025</p><p className="text-4xl font-semibold">USD 1.25B</p><p className="text-sm text-slate-300 mt-2">India’s estimated perfume market</p></div><div className="bg-orange-50 border border-orange-100 rounded-2xl p-6"><p className="text-[#d71912] text-xs uppercase tracking-[0.18em] mb-3">Projected by 2034</p><p className="text-4xl font-semibold text-[#17233f]">~USD 2B</p><p className="text-sm text-slate-600 mt-2">A category opening new room for brands</p></div></div>
            <p>In 2026, the ₹1,500–₹4,000 segment is gaining attention as Gen Z consumers move from deodorants toward premium perfumes. But growth alone is not a reason to launch “just another perfume.”</p>
            <h2 id="positioning">Why should your perfume brand exist?</h2>
            <p>Before you <strong>start a perfume business in India</strong>, define the space you want to own: affordable-premium fragrance, modern Indian perfumery, gender-neutral scents or occasion-based perfumes. Clear positioning makes decisions around fragrance, pricing, packaging and marketing easier.</p>
            <blockquote>Before customers smell your perfume, they see the bottle.</blockquote>
            <p>Next comes perfume product development. Build a fragrance brief, test samples and choose the right <strong>perfume manufacturer in India</strong>. For <strong>private label perfume manufacturing</strong>, evaluate quality, MOQ and production capability, not price alone.</p>
            <h2 id="launch">Build the launch system around the scent</h2>
            <p>The bottle, cap, box, fragrance name and visual identity decide whether a ₹2,000 perfume feels ordinary or premium. Strong <strong>perfume packaging design</strong> should support brand perception and product economics.</p>
            <p><strong>Perfume compliance in India</strong> should be planned before bulk production, including applicable manufacturing, labelling and claims requirements.</p>
            <p>Then comes the <strong>perfume brand launch</strong>: website, discovery sets, marketplaces, UGC, influencer marketing and performance marketing. Discovery sets work well for an <strong>online perfume business</strong> because customers cannot smell a website. Samples reduce purchase risk and help buyers discover their preferred fragrance.</p>
            <h2 id="mistake">The biggest mistake?</h2>
            <p>Spending most of the budget on perfume inventory while treating branding and marketing as an afterthought.</p>
            <p>In 2026, successful <strong>perfume brands in India</strong> will win through clear positioning, packaging, storytelling and trust.</p>
            <div className="not-prose my-12 bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-[0_12px_40px_rgba(6,16,51,0.06)]"><p className="text-xs uppercase tracking-[0.2em] text-[#d71912] font-semibold mb-3">A connected launch roadmap</p><p className="text-xl leading-relaxed text-[#17233f]">At <strong>LaunchVeda</strong>, we help founders launch a perfume brand in India by connecting fragrance development, perfume manufacturing, packaging, branding, compliance, website, marketplaces and marketing into one structured roadmap.</p><a href="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#d71912] hover:text-[#061033]">Plan your launch <ArrowUpRight className="w-4 h-4" /></a></div>
            <h2>Frequently asked questions</h2>
            <div className="not-prose space-y-3">{faqs.map((faq) => <details key={faq.q} className="group border-b border-slate-200 py-4"><summary className="cursor-pointer list-none pr-8 font-semibold text-[#17233f] group-open:text-[#d71912]">{faq.q}</summary><p className="text-sm leading-7 text-slate-600 mt-3">{faq.a}</p></details>)}</div>
            <p className="text-xl sm:text-2xl text-[#17233f] mt-12">Your idea can become a perfume. The bigger opportunity is turning it into a brand.</p>
          </article>

          <aside className="order-3 lg:sticky lg:top-28 lg:self-start"><div className="bg-[#f0eee8] rounded-2xl p-6 border border-[#e3dfd4]"><p className="text-xs uppercase tracking-[0.18em] text-[#d71912] font-semibold mb-3">For founders</p><h2 className="text-xl font-semibold text-[#17233f] leading-tight">Turn fragrance into a market-ready brand.</h2><p className="text-sm leading-6 text-slate-600 mt-3">Get a practical roadmap across product, packaging, compliance and growth.</p><a href="/contact" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#d71912] text-white px-4 py-3 text-sm font-semibold hover:bg-[#b91510] transition-colors">Start a conversation <ArrowUpRight className="w-4 h-4" /></a></div></aside>
        </div>
      </main>
      <div className="bg-[#061033]"><LaunchFooterSection /></div>
    </div>
  );
}
