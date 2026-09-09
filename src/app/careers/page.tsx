import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SEOManager from "../../components/seo/SEOManager";
import Navbar from "../../components/layout/Navbar";
import { LaunchFooterSection } from "../../components/layout/LaunchFooterSection";
import { jobs } from "./jobsData";

const culturePillars = [
  {
    title: "Collaborative environment",
    text: "Good work happens when strategy, craft and execution are shared openly across the team.",
    icon: Users,
  },
  {
    title: "Learning & development",
    text: "Build new skills through real briefs, feedback loops and exposure to the full brand-building journey.",
    icon: GraduationCap,
  },
  {
    title: "Innovation & creativity",
    text: "Bring ideas forward, test better ways of working and help shape solutions that move a launch ahead.",
    icon: Lightbulb,
  },
  {
    title: "Career growth",
    text: "Take ownership, expand your strengths and grow with the responsibility you earn.",
    icon: TrendingUp,
  },
  {
    title: "Teamwork with purpose",
    text: "Work with people who care about the details, the outcome and helping each other do their best work.",
    icon: HeartHandshake,
  },
  {
    title: "Work-life balance",
    text: "Do focused work sustainably, with clear priorities and respect for the people behind the work.",
    icon: Compass,
  },
];

const reasonsToJoin = [
  "Learn by contributing to real product, brand and growth projects.",
  "Build a practical portfolio of work that makes a visible difference.",
  "Collaborate across strategy, design, technology and marketing.",
  "Grow in a supportive, feedback-led team environment.",
  "Help shape modern launch experiences for ambitious founders.",
];

const generalApplicationMailto = "mailto:support@launchveda.com?subject=Career%20Application%20%7C%20LaunchVeda&body=Hello%20LaunchVeda%20team%2C%0A%0AI%20would%20like%20to%20share%20my%20resume%20for%20future%20opportunities.%20I%20have%20attached%20my%20latest%20resume%2FCV.%0A%0AThank%20you%2C";

export default function CareersPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fcfbff] text-[#17233f]">
      <SEOManager
        title="Careers at LaunchVeda"
        description="Explore careers at LaunchVeda. Join a collaborative team building product brands through strategy, design, technology and growth."
        canonical="https://www.launchveda.com/careers"
        ogImage="https://www.launchveda.com/background_image.png"
        breadcrumb={[
          { name: "Home", item: "https://www.launchveda.com" },
          { name: "Careers", item: "https://www.launchveda.com/careers" },
        ]}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fdfcff_0%,#f7f3ff_48%,#efe7ff_100%)] px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div className="career-grid-drift pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(124,41,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(124,41,255,0.15)_1px,transparent_1px)] [background-size:66px_66px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="career-aurora-one pointer-events-none absolute -right-28 top-0 h-[540px] w-[540px] rounded-full bg-[#7c29ff]/20 blur-[120px]" />
          <div className="career-aurora-two pointer-events-none -bottom-52 absolute left-[-12%] h-[480px] w-[480px] rounded-full bg-[#6366f1]/15 blur-[120px]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div className="max-w-[650px]">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#7c29ff]/25 bg-white/75 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#6840aa] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#7c29ff]" /> Careers at LaunchVeda
              </div>
              <h1 className="mt-7 max-w-[680px] text-[clamp(3.25rem,5.5vw,5.45rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#17233f]">
                Build your career<br />
                <span className="text-[#7c29ff]">with LaunchVeda.</span>
              </h1>
              <p className="mt-7 max-w-[610px] text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Join a team that turns ambitious product ideas into brands people can discover, trust and choose. Here, your work connects strategy, creativity and real-world execution.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="#open-roles" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(124,41,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]">
                  Explore open roles <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={generalApplicationMailto} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#17233f]/10 bg-white/75 px-5 py-3.5 text-sm font-semibold text-[#17233f] shadow-sm transition-colors hover:bg-[#f2ecff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]">
                  Send your resume <Mail className="h-4 w-4 text-[#7c29ff]" />
                </a>
              </div>
              <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#17233f]/10 pt-6 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#7c29ff] shadow-[0_0_0_5px_rgba(124,41,255,0.1)]" /> Real project ownership</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#7c29ff] shadow-[0_0_0_5px_rgba(124,41,255,0.1)]" /> Growth-led team culture</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:justify-self-end">
              <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 lg:block">
                <div className="career-orbit-turn relative h-full w-full rounded-full border border-dashed border-[#7c29ff]/20">
                  <div className="absolute inset-[17%] rounded-full border border-dashed border-[#7c29ff]/15" />
                  <span className="absolute left-[11%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#7c29ff] shadow-[0_0_20px_rgba(124,41,255,0.75)]" />
                  <span className="absolute bottom-[18%] right-[14%] h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_16px_rgba(167,139,250,0.8)]" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-[#7c29ff]/20 bg-white/85 p-5 shadow-[0_28px_70px_rgba(84,46,171,0.15)] backdrop-blur-md sm:p-7">
                <div className="career-aurora-two pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7c29ff]/15 blur-[70px]" />
                <div className="relative flex items-center justify-between border-b border-[#17233f]/10 pb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">The LaunchVeda journey</p>
                  <span className="rounded-full bg-[#7c29ff]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7c29ff]">Grow / 01</span>
                </div>

                <div className="relative flex min-h-[280px] items-center justify-center py-10 sm:min-h-[330px]">
                  <div className="absolute h-56 w-56 rounded-full border border-[#7c29ff]/15 bg-[#f7f2ff] sm:h-64 sm:w-64" />
                  <div className="absolute h-40 w-40 rounded-full border border-dashed border-[#7c29ff]/25 sm:h-48 sm:w-48" />
                  <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[1.5rem] border border-white bg-[#061033] text-center text-white shadow-[0_18px_40px_rgba(6,16,51,0.22)] sm:h-36 sm:w-36">
                    <Rocket className="mb-2 h-6 w-6 text-[#c7a6ff]" />
                    <span className="text-sm font-semibold">LaunchVeda</span>
                    <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/55">Build together</span>
                  </div>

                  <div className="absolute left-0 top-8 hidden rounded-2xl border border-[#7c29ff]/15 bg-white p-3.5 shadow-[0_14px_28px_rgba(84,46,171,0.1)] sm:left-2 sm:top-9 sm:block">
                    <Users className="h-4 w-4 text-[#7c29ff]" />
                    <p className="mt-3 text-xs font-semibold text-[#17233f]">Collaborate</p>
                    <p className="mt-1 text-[10px] text-slate-500">Bring ideas together.</p>
                  </div>
                  <div className="absolute right-0 top-16 hidden rounded-2xl border border-[#7c29ff]/15 bg-white p-3.5 shadow-[0_14px_28px_rgba(84,46,171,0.1)] sm:right-2 sm:top-14 sm:block">
                    <GraduationCap className="h-4 w-4 text-[#7c29ff]" />
                    <p className="mt-3 text-xs font-semibold text-[#17233f]">Learn</p>
                    <p className="mt-1 text-[10px] text-slate-500">Keep building skills.</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl border border-[#7c29ff]/15 bg-white p-3.5 text-center shadow-[0_14px_28px_rgba(84,46,171,0.1)]">
                    <TrendingUp className="mx-auto h-4 w-4 text-[#7c29ff]" />
                    <p className="mt-2 text-xs font-semibold text-[#17233f]">Grow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Working at LaunchVeda</p>
              <h2 className="mt-5 max-w-[470px] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17233f] sm:text-5xl">Do work that takes ideas somewhere real.</h2>
              <div className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-[#7c29ff]/15 bg-[#faf8ff] p-4 text-sm text-slate-600 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7c29ff] text-white"><Layers3 className="h-5 w-5" /></span>
                <span>One connected team across strategy, design, technology and growth.</span>
              </div>
            </div>
            <div className="max-w-[690px] space-y-6 text-lg leading-[1.85] text-slate-600">
              <p>At LaunchVeda, you work on the real decisions that take a product from an early idea to a brand ready for the market. That means seeing how every part of the journey connects &mdash; from research and design to digital experiences and growth.</p>
              <p>We value people who are curious, dependable and generous collaborators. You will have space to build new skills, ask better questions and take ownership of work that makes a visible difference.</p>
              <p className="border-l-2 border-[#7c29ff] pl-6 text-xl font-medium leading-8 tracking-[-0.02em] text-[#17233f] sm:text-2xl">Build your craft with a team that believes good work should help people grow, not just keep them busy.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#17233f]/8 bg-[#f8f5ff] px-4 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-[680px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Working culture</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17233f] sm:text-5xl">A culture designed for thoughtful momentum.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">We care about the work, how we work together and the opportunity every person has to keep moving forward.</p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {culturePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="group rounded-3xl border border-white bg-white/85 p-6 shadow-[0_12px_32px_rgba(84,46,171,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7c29ff]/25 hover:bg-white hover:shadow-[0_20px_42px_rgba(84,46,171,0.12)] sm:p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7c29ff]/10 text-[#7c29ff] transition-transform duration-300 group-hover:rotate-[-7deg] group-hover:scale-105"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-[#17233f]">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#061033] p-7 text-white shadow-[0_24px_60px_rgba(6,16,51,0.18)] sm:p-10">
              <div className="career-grid-drift pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(199,166,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(199,166,255,0.16)_1px,transparent_1px)] [background-size:66px_66px]" />
              <div className="career-aurora-one pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-[#7c29ff]/30 blur-[80px]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a6ff]">Why join LaunchVeda</p>
                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Grow your capability. See the impact.</h2>
                <p className="mt-6 max-w-[450px] text-lg leading-8 text-slate-300">Do the kind of work that gives you practical experience, better judgment and a stronger point of view.</p>
                <div className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#c7a6ff]"><Target className="h-4 w-4" /></span> A launch ecosystem, not a single lane.</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">What you&apos;ll find here</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reasonsToJoin.map((reason, index) => (
                  <div key={reason} className={`rounded-2xl border border-slate-200 bg-[#fcfbff] p-5 shadow-[0_10px_24px_rgba(6,16,51,0.04)] ${index === reasonsToJoin.length - 1 ? "sm:col-span-2" : ""}`}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c29ff]/10 text-sm font-semibold text-[#7c29ff]">0{index + 1}</span>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="open-roles" className="scroll-mt-24 border-y border-[#17233f]/8 bg-[#f8f5ff] px-4 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-[650px]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Current job openings</p>
                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#17233f] sm:text-5xl">Find the role where you can make your mark.</h2>
              </div>
              <p className="max-w-[300px] text-sm leading-6 text-slate-500">Each role has its own detail page with the responsibilities, skills and application path.</p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <article key={job.slug} className="group flex min-h-[330px] flex-col rounded-3xl border border-white bg-white p-6 shadow-[0_12px_32px_rgba(84,46,171,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7c29ff]/25 hover:shadow-[0_22px_44px_rgba(84,46,171,0.13)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#7c29ff]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7c29ff]"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7c29ff]" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-[#17233f]">{job.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#7c29ff]" /> {job.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-[#7c29ff]" /> {job.employmentType}</span>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">{job.summary}</p>
                  <Link href={`/careers/${job.slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#7c29ff] transition-colors hover:text-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]">View details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#061033] px-4 py-20 text-white sm:px-8 sm:py-28">
          <div className="career-grid-drift pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(199,166,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(199,166,255,0.16)_1px,transparent_1px)] [background-size:66px_66px]" />
          <div className="career-aurora-center pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c29ff]/25 blur-[120px]" />
          <div className="relative mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7a6ff]">Start a conversation</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Interested in joining LaunchVeda?</h2>
            <p className="mx-auto mt-7 max-w-[650px] text-lg leading-8 text-slate-300">Send us your resume and we&apos;ll get in touch if your profile matches our requirements. Please attach your latest resume or CV when you apply.</p>
            <a href={generalApplicationMailto} className="mx-auto mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(124,41,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Send your resume <ArrowUpRight className="h-4 w-4" /> </a>
            <a href="mailto:support@launchveda.com" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#c7a6ff] transition-colors hover:text-white">&nbsp; <Mail className="h-4 w-4" /> support@launchveda.com</a>
          </div>
        </section>
      </main>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}
