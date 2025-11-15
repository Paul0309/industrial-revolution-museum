'use client'

import Link from "next/link";

export default function ReflectionPage() {
  return (
    <main className="min-h-screen bg-[#ecf5ff] text-neutral-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 md:py-14">
        

        {/* ---------- PAGE TITLE ---------- */}
        <section className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-sky-700">
            Exhibit 5 · Reflection & Legacy
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Reflection & Legacy: From Coal Smoke to Climate Crisis
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            This final exhibit reflects on how environmental damage that began in the Industrial
            Revolution continues to shape the modern climate crisis, linking past pollution to
            today&apos;s global debates and responsibilities.
          </p>
        </section>

        <div className="flex flex-col gap-8 pb-10">
          {/* ---------- FINAL REFLECTION ---------- */}
          <section className="rounded-2xl border border-sky-200 bg-[#f7fbff] p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Final Reflection
            </h2>
            <p className="text-sm leading-relaxed text-neutral-800">
              The Industrial Revolution’s intense and inefficient use of coal and fuel created
              long-term environmental damage, and these early harms are directly reflected in
              today’s climate crisis. In the modern era, international efforts such as COP26
              demonstrate that nations are attempting to control emissions, yet many of these
              commitments have not resulted in the meaningful action needed to slow global
              warming—leading to political tension, social conflict, and disagreements over
              responsibility (Rapid Transition Alliance, 2021). Therefore, the environmental
              degradation that began in the 19th century continues to shape today’s climate
              challenges, showing clear continuity between industrial-era pollution and modern
              environmental pressures (Institute for Environmental Research and Education, 2025;
              Environmental Literacy Council, 2024).
            </p>
          </section>

          {/* ---------- THEN / NOW COMPARISON (네가 쓴 내용만 정리한 박스) ---------- */}
          <section className="grid gap-4 md:grid-cols-2">
            {/* Then */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                Then: 19th-Century Industrial Era
              </h3>
              <p className="text-xs leading-relaxed text-slate-800">
                Factories and cities relied on intense and inefficient coal and fuel use, creating
                long-term environmental damage. Smoke, pollution, and unchecked emissions became a
                normal part of industrial “progress,” even though these harms were already building
                environmental risks.
              </p>
            </div>

            {/* Now */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                Now: Modern Climate Crisis
              </h3>
              <p className="text-xs leading-relaxed text-slate-800">
                Today&apos;s climate crisis shows the results of that long history of fossil fuel
                dependence. International efforts like COP26 try to control emissions, but limited
                action and slow implementation create political tension, social conflict, and
                disputes over who should take responsibility for cutting emissions.
              </p>
            </div>
          </section>

          {/* ---------- SO WHAT / LINK BACK TO THESIS ---------- */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
              So What? (Connecting Then → Now)
            </h2>
            <p className="text-sm leading-relaxed text-neutral-800">
              Looking back, the Industrial Revolution was not only a turning point in technology
              and production, but also a turning point in how humans impact the planet. The same
              fuel-heavy choices that powered factories and railways now shape global climate
              negotiations and conflicts. By recognizing this continuity, we can better understand
              that modern climate debates are not isolated problems—they are part of the legacy of
              industrialisation and a reminder that &quot;progress&quot; always raises questions
              about responsibility, costs, and who is most affected.
            </p>
          </section>

          {/* ---------- SOURCES (REFLECTION 전용) ---------- */}
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
              Recent Sources Used on This Page
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-xs text-slate-800">
              <li>
                Rapid Transition Alliance. (2021). Report on COP26 and climate action commitments.
              </li>
              <li>
                Institute for Environmental Research and Education. (2025). Analysis of historical
                pollution and modern climate impacts.
              </li>
              <li>
                Environmental Literacy Council. (2024). Educational overview of the Industrial
                Revolution and environmental change.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
