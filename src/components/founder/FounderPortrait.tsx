"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const FOUNDER_PHOTO = "/founder.jpeg";

export default function FounderPortrait() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <figure className="relative mx-auto w-full max-w-[470px]">
      <div className="relative aspect-[0.9] overflow-hidden rounded-[2rem] border border-[#7c29ff]/20 bg-[linear-gradient(145deg,#f9f6ff_0%,#efe8ff_52%,#fdfcff_100%)] p-3 shadow-[0_28px_70px_rgba(91,48,180,0.16)] sm:p-4">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(124,41,255,0.28)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="founder-aurora-primary pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-[#7c29ff]/25 blur-[70px]" />

        <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-white bg-[#eae2ff]">
          {!imageUnavailable ? (
            <img
              src={FOUNDER_PHOTO}
              alt="Rajnish Kumar, Founder of LaunchVeda"
              width={900}
              height={1100}
              className="h-full w-full object-cover object-center"
              onError={() => setImageUnavailable(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_22%,#ffffff_0%,#eee6ff_42%,#d9c7ff_100%)] text-[#17233f]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#7c29ff]/25 bg-white/55 shadow-[0_18px_40px_rgba(124,41,255,0.18)] sm:h-48 sm:w-48">
                <span className="text-6xl font-semibold tracking-[-0.1em] text-[#7c29ff] sm:text-7xl">RK</span>
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#5e3a9d]">Founder profile</p>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#100b2e]/78 via-[#100b2e]/18 to-transparent" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5e3a9d] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-[#7c29ff]" /> Founder profile
          </div>
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Rajnish Kumar</p>
            <p className="mt-1 text-sm text-white/75">Founder, LaunchVeda</p>
          </div>
        </div>
      </div>

      <figcaption className="absolute -bottom-6 -left-3 right-3 rounded-2xl border border-[#7c29ff]/15 bg-white/85 p-4 shadow-[0_18px_38px_rgba(73,40,146,0.1)] backdrop-blur-md sm:-left-8 sm:right-8 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7c29ff]">Founder&apos;s point of view</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">Build with clarity first. The strongest brands are designed to work well beyond launch day.</p>
      </figcaption>
    </figure>
  );
}
