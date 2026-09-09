import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  CircleCheck,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import SEOManager from "../../../components/seo/SEOManager";
import Navbar from "../../../components/layout/Navbar";
import { LaunchFooterSection } from "../../../components/layout/LaunchFooterSection";
import { getJob, getJobApplicationMailto, jobs } from "../jobsData";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) return {};

  return {
    title: `${job.title} Careers`,
    description: `${job.summary} Explore the ${job.title} opportunity at LaunchVeda.`,
    alternates: { canonical: `https://www.launchveda.com/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} | Careers at LaunchVeda`,
      description: job.summary,
      type: "website",
    },
  };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) notFound();

  const applicationMailto = getJobApplicationMailto(job);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fcfbff] text-[#17233f]">
      <SEOManager
        title={`${job.title} Careers at LaunchVeda`}
        description={`${job.summary} Learn about the role, responsibilities and how to apply.`}
        canonical={`https://www.launchveda.com/careers/${job.slug}`}
        ogImage="https://www.launchveda.com/background_image.png"
        breadcrumb={[
          { name: "Home", item: "https://www.launchveda.com" },
          { name: "Careers", item: "https://www.launchveda.com/careers" },
          { name: job.title, item: `https://www.launchveda.com/careers/${job.slug}` },
        ]}
      />

      <div className="bg-[#061033]">
        <Navbar />
      </div>

      <main>
        <section className="relative isolate overflow-hidden bg-[#061033] px-4 pb-16 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-40">
          <div className="career-grid-drift pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(199,166,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(199,166,255,0.16)_1px,transparent_1px)] [background-size:66px_66px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="career-aurora-one pointer-events-none absolute -right-24 -top-20 h-[520px] w-[520px] rounded-full bg-[#7c29ff]/25 blur-[120px]" />
          <div className="relative mx-auto max-w-[1060px]">
            <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c7a6ff] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><ArrowLeft className="h-4 w-4" /> All careers</Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#c7a6ff]/25 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c7a6ff]"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span>
                <h1 className="mt-6 text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.06em]">{job.title}</h1>
                <p className="mt-6 max-w-[700px] text-lg leading-8 text-slate-300 sm:text-xl">{job.summary}</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex items-center gap-3 text-sm text-white/80"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#c7a6ff]"><MapPin className="h-4 w-4" /></span><span><span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Location / Work mode</span>{job.location}</span></div>
                  <div className="flex items-center gap-3 text-sm text-white/80"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#c7a6ff]"><Briefcase className="h-4 w-4" /></span><span><span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Employment type</span>{job.employmentType}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1060px] px-4 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">Role overview</p>
              <div className="mt-5 rounded-3xl border border-[#7c29ff]/15 bg-[#f8f5ff] p-6 shadow-[0_12px_30px_rgba(84,46,171,0.06)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7c29ff] text-white"><Target className="h-5 w-5" /></span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#7c29ff]">Experience</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{job.experience}</p>
                <a href={applicationMailto} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(124,41,255,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c29ff]">Apply now <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </aside>

            <div className="space-y-12">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c29ff]">About the role</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#17233f] sm:text-4xl">Make work that moves a launch forward.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">{job.aboutRole}</p>
              </section>

              <section className="rounded-3xl border border-[#7c29ff]/15 bg-[#faf8ff] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7c29ff]/10 text-[#7c29ff]"><Sparkles className="h-5 w-5" /></span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#17233f]">Job description</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">{job.jobDescription}</p>
                  </div>
                </div>
              </section>

              <DetailList title="Responsibilities" icon={CircleCheck} items={job.responsibilities} />
              <DetailList title="Required skills" icon={Target} items={job.requiredSkills} />

              <section className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(6,16,51,0.04)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7c29ff]/10 text-[#7c29ff]"><GraduationCap className="h-5 w-5" /></span>
                  <h2 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#17233f]">Qualifications</h2>
                  <ul className="mt-4 space-y-3">
                    {job.qualifications.map((qualification) => <li key={qualification} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 h-4 w-4 shrink-0 text-[#7c29ff]" strokeWidth={2.5} />{qualification}</li>)}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(6,16,51,0.04)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7c29ff]/10 text-[#7c29ff]"><Award className="h-5 w-5" /></span>
                  <h2 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#17233f]">Experience</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{job.experience}</p>
                </div>
              </section>

              <DetailList title="Nice-to-have skills" icon={Lightbulb} items={job.niceToHave} muted />
              <DetailList title="What we offer" icon={Sparkles} items={job.whatWeOffer} highlighted />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#061033] px-4 py-20 text-white sm:px-8 sm:py-24">
          <div className="career-grid-drift pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(199,166,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(199,166,255,0.16)_1px,transparent_1px)] [background-size:66px_66px]" />
          <div className="career-aurora-center pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c29ff]/25 blur-[120px]" />
          <div className="relative mx-auto max-w-[780px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7a6ff]">Apply now</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Ready to bring your strengths to LaunchVeda?</h2>
            <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-slate-300">Send your application with your latest resume or CV attached. If your profile matches what we&apos;re looking for, our team will get in touch.</p>
            <a href={applicationMailto} className="mx-auto mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7c29ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(124,41,255,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-[#6820dc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Apply for {job.title} <ArrowUpRight className="h-4 w-4" /></a>
            <a href="mailto:support@launchveda.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c7a6ff] transition-colors hover:text-white">&nbsp; <Mail className="h-4 w-4" /> support@launchveda.com</a>
          </div>
        </section>
      </main>

      <div className="bg-[#061033]">
        <LaunchFooterSection />
      </div>
    </div>
  );
}

function DetailList({
  title,
  icon: Icon,
  items,
  muted = false,
  highlighted = false,
}: {
  title: string;
  icon: typeof CircleCheck;
  items: string[];
  muted?: boolean;
  highlighted?: boolean;
}) {
  const surface = highlighted
    ? "border-[#7c29ff]/20 bg-[#f8f4ff]"
    : muted
      ? "border-slate-200 bg-[#fcfbff]"
      : "border-slate-200 bg-white";

  return (
    <section className={`rounded-3xl border p-6 shadow-[0_10px_24px_rgba(6,16,51,0.04)] sm:p-8 ${surface}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7c29ff]/10 text-[#7c29ff]"><Icon className="h-5 w-5" /></span>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#17233f]">{title}</h2>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 h-4 w-4 shrink-0 text-[#7c29ff]" strokeWidth={2.5} />{item}</li>
        ))}
      </ul>
    </section>
  );
}
