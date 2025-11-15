'use client'

import Link from "next/link";

export default function EconomicPage() {
  return (
    <main className="min-h-screen bg-[#fdf4e3] text-neutral-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 md:py-14">

        {/* ---------- PAGE TITLE ---------- */}
        <section className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1 text-xs font-medium tracking-[0.22em] uppercase text-amber-700">
            Exhibit 2 · Economic Impacts
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Economic Impacts: Innovation &amp; Inequality
          </h1>
          <p className="max-w-2xl text-sm text-stone-700">
            This exhibit uses classic economic texts, worker testimony, and wage data to explore how
            the Industrial Revolution increased production and wages for some, while deepening
            instability and inequality for many workers.
          </p>
        </section>

        <div className="flex flex-col gap-8 pb-10">
          {/* ---------- MINI ARGUMENT ---------- */}
          <section className="rounded-2xl border border-amber-200 bg-[#fff8ee] p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Mini-Argument
            </h2>
            <p className="text-sm leading-relaxed text-neutral-800">
              As <span className="italic">The Wealth of Nations</span> by Smith indicates,
              exclusive companies which have mercantile monopoly are always less convenient and
              destructive for a healthy economy (Smith, 1776). According to the{" "}
              <span className="italic">Communist Manifesto</span>, growing competition among the
              bourgeoisie led to commercial crises, even causing workers&apos; wages to become more
              unstable and fluctuating (Marx &amp; Engels, 1848). In addition, during 1750–1914 in
              the United Kingdom, real average weekly wages were observed to increase, while nominal
              average weekly wages showed only a slight upward trend (Broadberry et al., 2015).
              Therefore, the Industrial Revolution brought both rising wages and repeated assaults
              on the economy through inequality and instability, as seen in the wage chart and
              primary sources.
            </p>
          </section>

          {/* ---------- PRIMARY SOURCES GRID ---------- */}
          <section className="grid gap-6 md:grid-cols-2">
            {/* Marx & Engels – Communist Manifesto */}
            <article className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-[#fffdf7] p-5 shadow-sm">
              <header className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Primary Source 1
                </p>
                <h2 className="text-sm font-semibold text-neutral-900">
                  Karl Marx &amp; Friedrich Engels, <span className="italic">Communist Manifesto</span> (1848)
                </h2>
              </header>

              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="text-xs leading-relaxed text-stone-800">
                  This source is written by Karl Marx and Friedrich Engels to inspire workers’
                  movements. It is biased toward socialism, but it is an important source to
                  understand social and economic inequality. This excerpt shows how the Industrial
                  Revolution led to unstable wages. Even though technology and commercial growth
                  expanded, social consequences created by capitalism left many workers vulnerable
                  to crises.
                </p>
              </div>

              <div className="space-y-1 text-[11px] text-stone-600">
                <p className="italic">
                  Caption: Marx and Engels describe how competition and capitalist crises created
                  unstable wages and insecurity for workers, challenging the idea that industrial
                  growth was purely beneficial.
                </p>
                <p>
                  Source note: Written by socialist theorists advocating for worker reform, this
                  text strongly criticizes capitalism, which may exaggerate negative aspects, but it
                  clearly shows contemporary concerns about inequality.
                </p>
              </div>
            </article>

            {/* Child textile workers wages / factory testimony */}
            <article className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-[#fffdf7] p-5 shadow-sm">
              <header className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Primary Source 2
                </p>
                <h2 className="text-sm font-semibold text-neutral-900">
                  Child Textile Workers&apos; Wages Report (19th Century)
                </h2>
              </header>

              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="text-xs leading-relaxed text-stone-800">
                  This source provides evidence that child textile workers earned low wages, such as
                  only 6s to 9s per week, which were even lower than other workers (Laura Del Col).
                  It supports the argument that the Industrial Revolution created significant
                  economic inequality, including low pay combined with harsh factory conditions.
                  The purpose of this report is to present factory abuse, which gives it strong
                  firsthand credibility. However, the testimonies were gathered by reformers, so
                  some workers may have exaggerated conditions to push for change.
                </p>
              </div>

              <div className="space-y-1 text-[11px] text-stone-600">
                <p className="italic">
                  Caption: Child workers earning extremely low wages reveal how industrial
                  factories relied on cheap labour, reinforcing inequality within the new economic
                  system.
                </p>
                <p>
                  Source note: Compiled by investigators and reformers, this report offers vivid,
                  firsthand accounts of factory life but may focus on the worst examples to support
                  calls for regulation.
                </p>
              </div>
            </article>
          </section>

          {/* ---------- DATA DISPLAY ---------- */}
          <section className="rounded-2xl border border-amber-200 bg-[#fff8ee] p-5 shadow-sm">
            <header className="mb-3 space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                Data Display
              </p>
              <h2 className="text-sm font-semibold text-neutral-900">
                Weekly Wages in UK Industries, 1750–1914
              </h2>
            </header>

            {/* ▼▼▼ [변경됨] 그래프 자리 – 이미지로 교체됨 ▼▼▼ */}
            <div className="mb-3 overflow-hidden rounded-xl border border-amber-100 bg-white">
                  <img
                    src="https://www.researchgate.net/profile/Claire-Mason-9/publication/299953345/figure/fig1/AS:613513877782529@1523284515050/Real-wages-during-and-after-the-industrial-revolution-in-Great-Britain-Data-source.png"
                    alt="Real wages during (and after) the industrial revolution in Great Britain Data source: Professor Charles Feinstein, The Journal of Economic History [55]"
                    // [중요] 기존 디자인 유지를 위해 주석 힌트의 클래스 적용
                    className="h-full w-full object-cover" 
                  />
            </div>
            {/* ▲▲▲ [변경됨] 그래프 자리 – 이미지로 교체됨 ▲▲▲ */}

            <div className="space-y-2 text-xs leading-relaxed text-stone-800">
              <p>
                This chart presents weekly wage rates for typical workers in UK industries during
                the Industrial Revolution. It shows that real average weekly wages increased over
                the long term, while nominal wages had only a slight increasing tendency
                (Broadberry et al., 2015). It also provides information about workers&apos; wages
                right before World War I.
              </p>
              <p className="italic text-stone-700">
                Caption: Rising real wages suggest that some workers experienced material
                improvement over time, yet the contrast with low-paid child workers and unstable
                employment reveals that economic gains were uneven and often insecure.
              </p>
              <p className="text-[11px] text-stone-600">
                Source note: Based on reconstructed historical wage data for Great Britain, this
                chart is useful for understanding long-term trends but does not fully show regional
                differences, gender gaps, or informal labour.
              </p>
            </div>
          </section>

          {/* ---------- PAGE CLOSE ---------- */}
          <section className="rounded-2xl border border-stone-200 bg-[#fffdf7] p-5 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
              Page Close
            </h2>
            <p className="text-sm leading-relaxed text-neutral-800">
              Overall, even though the Industrial Revolution raised some wages and expanded
              production, it also strengthened economic inequality and made many workers&apos;
              livelihoods unstable. Understanding the patterns of industrial-era wages and labour
              helps us see how this period shaped modern debates about fairness, workers&apos;
              rights, and the true cost of economic growth.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
