"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// app/social/page.tsx
export default function SocialPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-16">
      <div className="w-full max-w-5xl space-y-12">
        {/* 섹션 헤더 */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Exhibit 1 · Social Impacts
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Life Transformed by Industrialization
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            How did industrialisation change the way people lived, worked, and understood their place in society?
          </p>
        </section>

        {/* 메인 콘텐츠: 왼쪽 논지, 오른쪽 아티팩트 카드들 */}
        <section className="grid gap-10 md:grid-cols-[2fr,1.4fr] items-start">
          {/* 왼쪽: Mini-argument (쪼개서 가독성 ↑) */}
          <article className="space-y-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              Mini-Argument · How did industrialization change people’s lives?
            </h2>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Industrialization dramatically reshaped society by reforming social structures and daily life. Japan’s
              <span className="italic"> Charter Oath of 1868</span> reveals how entire societies were forced to abandon
              outdated customs and adopt modern principles, marking a dramatic political and cultural shift during the
              Meiji Restoration.
            </p>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              In Britain, the <span className="italic">Factory Act of 1833</span> restricted child labour and banned night
              work for minors, showing that governments slowly began recognising the need to protect workers from harsh
              factory conditions. Urbanisation data from 1850–1914 shows rapid growth of city populations, proving how
              industrialisation pulled people into crowded urban centres and transformed housing, sanitation, and
              community life.
            </p>
            <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-medium">
              Together, these changes show that industrialisation was not just mechanical progress—it was a social
              revolution that redefined what “modern life” meant.
            </p>
          </article>

          {/* 오른쪽: 아티팩트 카드들 */}
          <aside className="space-y-4">
            {/* Factory Act 카드 */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · Britain
              </p>
              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Factory Act of 1833 – Regulating Child Labour
              </h3>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                This document limited night work for children and teenagers in textile mills. It shows that public
                pressure and political debate gradually pushed the British government to respond to the social costs of
                industrialisation.
              </p>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> British Parliament, <span className="italic">
                  Factory Act
                </span>{" "}
                (1833), reform law intended to protect child workers. Credible as an official record, but it focuses on
                legal rules and does not capture how often factories actually obeyed the law.
              </p>
            </div>

            {/* Charter Oath 카드 */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · Japan
              </p>
              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Charter Oath of 1868 – A New Social Order
              </h3>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                The Charter Oath declared that “outdated and harmful practices” should be abolished, signalling Japan’s
                shift towards modern, “universal” principles after centuries of isolation. It captures how elites tried to
                redesign politics, society, and identity in response to industrial-era pressure.
              </p>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> Emperor Meiji,{" "}
                <span className="italic">Charter Oath</span> (1868), political reform statement. Credible for understanding
                official goals, but it reflects elite perspectives and downplays resistance from groups like the samurai.
              </p>
            </div>
          </aside>
        </section>

        {/* 데이터 디스플레이 카드 */}
        <section className="grid md:grid-cols-[1.4fr,2fr] gap-10 items-center">
          {/* 그래프 자리 */}
          <div className="aspect-[4/3] rounded-2xl border border-dashed border-neutral-300 bg-white/70 flex items-center justify-center text-neutral-400 text-sm">
            <span>📊 Urban population growth chart (1850–1914) goes here</span>
          </div>

          {/* 데이터 캡션 */}
          <article className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-900">Data · Urbanisation During Industrialisation</h2>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              A chart of the share of population living in urban areas from 1850–1914 shows a clear upward trend. As
              factories expanded, more people left rural communities and moved into industrial cities.
            </p>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              This rise in urbanisation supports the claim that industrialisation reshaped everyday life. It concentrated
              workers in dense environments, intensifying both opportunities (jobs, wages) and problems (overcrowding,
              disease, and pollution).
            </p>
          </article>
        </section>

        {/* Page Close */}
        <section className="border-t border-neutral-200 pt-6">
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed max-w-3xl">
            Overall, the social impact of the Industrial Revolution shows that technology alone does not define progress.
            Real change came when laws, values, and social structures began to adapt—raising new questions about whose
            lives were improved, and at what cost.
          </p>
        </section>
      </div>
    </main>
  );
}

