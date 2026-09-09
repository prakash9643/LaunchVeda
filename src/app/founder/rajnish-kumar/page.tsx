import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FlaskConical,
  Layers3,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import SEOManager from "../../../components/seo/SEOManager";
import Navbar from "../../../components/layout/Navbar";
import { LaunchFooterSection } from "../../../components/layout/LaunchFooterSection";
import FounderPortrait from "../../../components/founder/FounderPortrait";

const proofPoints = [
  { value: "10+", label: "years building across the brand journey" },
  { value: "200+", label: "brands supported across key categories" },
  { value: "500+", label: "product formulations developed" },
  { value: "100+", label: "fragrance brand associations" },
];

const principles = [
  {
    number: "01",
    title: "Start with the product truth",
    text: "Build something people can trust, use and come back to before adding noise around it.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Give it a clear place in the market",
    text: "Positioning turns a product into a choice people can understand in a crowded category.",
    icon: Target,
  },
  {
    number: "03",
    title: "Connect the work behind the launch",
    text: "Formulation, manufacturing, brand and growth work better as one considered system.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Build for the next stage too",
    text: "The strongest launch plans make room for selling, learning and scaling long after day one.",
    icon: TrendingUp,
  },
];

const categories = ["Ayurveda", "Cosmetics", "Fragrance", "Personal care"];

export default function RajnishKumarPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fcfbff] text-[#17233f]">
      <SEOManager
        title="Rajnish Kumar, Founder of LaunchVeda"
        description="Meet Rajnish Kumar, founder of LaunchVeda. After 10 years across product development, manufacturing, branding and sales, he helps founders build brands that last."
        canonical="https://www.launchveda.com/founder/rajnish-kumar"
        ogImage="https://www.launchveda.com/brand-concept.webp"
        breadcrumb={[
          { name: "Home", item: "https://www.launchveda.com" },
          { name: "Founder", item: "https://www.launchveda.com/founder/rajnish-kumar" },
          { name: "Rajnish Kumar", item: "https://www.launchveda.com/founder/rajnish-kumar" },
        ]}
        customSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rajnish Kumar",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "LaunchVeda", url: "https://www.launchveda.com" },
            url: "https://www.launchveda.com/founder/rajnish-kumar",
            description: "Founder of LaunchVeda with 10 years of experience across product development, manufacturing, branding and sales.",
          },
        ]}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fdfcff_0%,#f7f3ff_48%,#f0e9ff_100%)] px-4 pb-20 pt-32 text-[#17233f] sm:px-8 sm:pb-28 sm:pt-40">
          <div className="founder-grid-drift pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(124,41,255,0.19)_1px,transparent_1px),linear-gradient(90deg,rgba(124,41,255,0.19)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="pointer-events-none absolute -right-44 top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 lg:block">
            <div className="founder-orbit-turn relative h-full w-full rounded-full border border-dashed border-[#7c29ff]/25">
              <div className="absolute inset-[16%] rounded-full border border-dashed border-[#7c29ff]/20" />
              <span className="absolute left-[10%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#7c29ff] shadow-[0_0_22px_rgba(124,41,255,0.9)]" />
              <span className="absolute bottom-[14%] right-[15%] h-2 w-2 rounded-full bg-[#c7a6ff] shadow-[0_0_18px_rgba(199,166,255,0.8)]" />
            </div>
          </div>
          <div className="founder-aurora-primary pointer-events-none absolute -right-28 top-0 h-[520px] w-[520px] rounded-full bg-[#7c29ff]/30 blur-[120px]" />
          <div className="founder-aurora-secondary pointer-events-none absolute -bottom-56 -left-36 h-[480px] w-[480px] rounded-full bg-[#4f46e5]/20 blur-[120px]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
            <div className="max-w-[650px]">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#7c29ff]/35 bg-[#7c29ff]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#c7a6ff] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Founder of LaunchVeda
              </div>

              <p className="mb-4 text-sm font-medium tracking-[0.08em] text-slate-500 sm:text-base">Rajnish Kumar</p>
              <h1 className="max-w-[650px] text-[clamp(3.1rem,4.8vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
                Build the brand.<br />
                <span className="text-[#7c29ff]">Not just a product.</span>
              </h1>
              <p className="mt-7 max-w-[590px] text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                After a decade spanning product development, manufacturing, branding and sales, Rajnish helps founders make the decisions that give a new brand room to last.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(124,41,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]"
                >
                  Start a conversation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#17233f]/10 bg-white/75 px-5 py-3.5 text-sm font-semibold text-[#17233f] shadow-sm transition-colors hover:bg-[#f2ecff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]"
                >
                  See the launch system <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid max-w-[620px] grid-cols-3 gap-3 border-t border-[#17233f]/10 pt-6 text-sm sm:gap-6">
                <div>
                  <span className="block text-2xl font-semibold text-[#17233f]">10+ years</span>
                  <p className="mt-1 leading-5 text-slate-500">hands-on brand building</p>
                </div>
                <div className="border-l border-[#17233f]/10 pl-3 sm:pl-6">
                  <span className="block text-2xl font-semibold text-[#17233f]">200+ brands</span>
                  <p className="mt-1 leading-5 text-slate-500">experience across categories</p>
                </div>
                <div className="border-l border-[#17233f]/10 pl-3 sm:pl-6">
                  <span className="block text-2xl font-semibold text-[#17233f]">One system</span>
                  <p className="mt-1 leading-5 text-slate-500">from idea to growth</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] pb-7 lg:justify-self-end">
              <FounderPortrait />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-18 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">The experience behind the platform</p>
              <h2 className="max-w-[410px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">He has lived the whole journey.</h2>
              <div className="mt-9 max-w-[370px] rounded-2xl border border-[#17233f]/10 bg-white p-5 shadow-[0_16px_38px_rgba(6,16,51,0.06)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Experience across</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category} className="rounded-full bg-[#f4efff] px-3 py-1.5 text-xs font-medium text-[#17233f]">{category}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-[690px]">
              <div className="space-y-6 text-lg leading-[1.85] text-slate-600">
                <p>Ayurveda, cosmetics, perfumes and personal care: Rajnish has worked across the entire path from an early product idea to the work that makes a brand market-ready.</p>
                <p>That means seeing the trade-offs first-hand &mdash; between product and price, brand appeal and market fit, a launch deadline and the systems a business needs to keep moving.</p>
              </div>

              <div className="mt-9 border-l-2 border-[#7c29ff] py-2 pl-6 sm:pl-8">
                <p className="max-w-[630px] text-2xl font-semibold leading-[1.35] tracking-[-0.03em] text-[#17233f] sm:text-3xl">
                  &ldquo;The real challenge was never the launch. It was building a brand that sells, grows and runs on systems &mdash; not just hustle.&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-slate-500">Rajnish Kumar <span className="text-slate-300">/</span> Founder, LaunchVeda</p>
              </div>

              <div className="mt-9 grid gap-4 border-t border-slate-200 pt-7 sm:grid-cols-2">
                {[
                  "Product development and formulation direction",
                  "Manufacturing coordination and launch readiness",
                  "Brand strategy, identity and positioning",
                  "Sales-minded systems for sustainable growth",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7c29ff]/10 text-[#7c29ff]"><Check className="h-3 w-3" strokeWidth={2.5} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Experience, in context</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17233f] sm:text-4xl">The work behind a better launch.</h2>
              </div>
              <p className="max-w-[285px] text-sm leading-6 text-slate-500">A cross-functional view of what it takes to bring a physical product brand to market.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-[#7c29ff]/30 hover:shadow-[0_16px_36px_rgba(79,70,229,0.1)] sm:p-6">
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-[#7c29ff] sm:text-5xl">{point.value}</div>
                  <p className="mt-3 max-w-[190px] text-sm leading-6 text-slate-600">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ff] px-4 py-18 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-10 border-b border-[#17233f]/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Why LaunchVeda exists</p>
                <h2 className="max-w-[560px] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl">One roof.<br />A more considered way to build.</h2>
              </div>
              <p className="max-w-[570px] text-lg leading-8 text-slate-600">LaunchVeda was created to bring product, manufacturing, brand strategy and growth into one connected launch system &mdash; so founders can spend less time stitching together moving parts.</p>
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article key={principle.number} className="group rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_30px_rgba(6,16,51,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_38px_rgba(6,16,51,0.08)] sm:p-7">
                    <div className="grid gap-5 sm:grid-cols-[72px_1fr_auto] sm:items-start">
                      <p className="text-sm font-semibold tracking-[0.12em] text-[#7c29ff]">{principle.number}</p>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#17233f]">{principle.title}</h3>
                        <p className="mt-2 max-w-[430px] text-sm leading-6 text-slate-600">{principle.text}</p>
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17233f] text-[#c7a6ff] transition-transform duration-300 group-hover:rotate-[-7deg]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#061033] px-4 py-20 text-white sm:px-8 sm:py-28">
          <div className="founder-grid-drift pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(124,41,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,41,255,0.2)_1px,transparent_1px)] [background-size:62px_62px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c29ff]/20 blur-[110px]" />
          <div className="relative mx-auto max-w-[850px] text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#c7a6ff]">A founder&apos;s focus</p>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Bring your product idea<br />into sharper focus.</h2>
            <p className="mx-auto mt-7 max-w-[650px] text-lg leading-8 text-slate-300">Move from an initial idea to a brand with the clarity, connected support and systems needed to grow with intention.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(124,41,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore our services <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <p className="mt-12 text-sm leading-6 text-white/50">Rajnish Kumar <span className="px-2 text-white/25">/</span> Founder, LaunchVeda</p>
          </div>
        </section>
      </main>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
