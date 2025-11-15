"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// app/economic/page.tsx

export default function EconomicPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-16">
      <div className="w-full max-w-5xl space-y-12">
        
        {/* ---------- HEADER ---------- */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Exhibit 2 · Economic Impacts
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Innovation, Productivity, and Inequality
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed mx-auto md:mx-0">
            How did industrialisation create both unprecedented growth and widening inequality?
          </p>
        </section>

        {/* ---------- MAIN CONTENT GRID ---------- */}
        <section className="grid gap-10 md:grid-cols-[2fr,1.4fr] items-start">

          {/* ---------- LEFT: Mini-argument ---------- */}
          <article className="space-y-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              Mini-Argument · How did industry reshape economies?
            </h2>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              <strong>The Industrial Revolution generated massive economic growth but also deepened inequality.</strong> 
              Adam Smith’s <span className="italic">Wealth of Nations</span> (1776) argued that monopolies and trade barriers 
              suppressed fair markets, anticipating the competitive capitalist structures that later shaped global trade.
            </p>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Meanwhile, Marx and Engels warned in the <span className="italic">Communist Manifesto</span> (1848) that this 
              same competition created wage instability and exploitation for workers. Historical wage data from 1750–1914 
              shows that while productivity and national income grew, pay increases for workers lagged behind, leaving the 
              benefits of industrialisation concentrated in the hands of factory owners and elites.
            </p>

            <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-medium">
              These contrasting patterns reveal that industrialisation produced innovation and global wealth—but not evenly. 
              Economic transformation came with rising class divisions that still echo in modern labour systems.
            </p>
          </article>

          {/* ---------- RIGHT SIDE: ARTIFACT CARDS ---------- */}
          <aside className="space-y-4">

            {/* Adam Smith Artifact */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · 1776
              </p>

              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Adam Smith — The Wealth of Nations
              </h3>

              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                Smith argued that restrictive markets and monopolies harmed economic growth. His ideas form the philosophical
                foundation of modern capitalism, shaping the shift toward open, competitive markets during industrialisation.
              </p>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> Published in 1776 to explain the benefits of free-market
                economies. Credible as a foundational economic text, but it emphasises theory rather than working-class lived
                experiences.
              </p>
            </div>

            {/* Marx & Engels Artifact */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · 1848
              </p>

              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Marx & Engels — The Communist Manifesto
              </h3>

              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                Marx and Engels described how capitalist competition concentrated wealth among factory owners while creating
                unstable wages and exploitation for workers. Their analysis explains the inequality emerging during the
                industrial era.
              </p>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> Written as a political critique. Highly insightful for 
                understanding class conflict but contains ideological bias due to its revolutionary aims.
              </p>
            </div>

          </aside>
        </section>

        {/* ---------- DATA DISPLAY SECTION ---------- */}
        <section className="grid md:grid-cols-[1.4fr,2fr] gap-10 items-center">

          {/* Graph Placeholder */}
          <div className="aspect-[4/3] rounded-2xl border border-dashed border-neutral-300 bg-white/70 flex items-center justify-center text-neutral-400 text-sm">
            📊 Wage Increase & Productivity Growth Chart (1750–1914) goes here
          </div>

          {/* Caption */}
          <article className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-900">
              Data · Uneven Wage Growth During Industrialisation
            </h2>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Historical wage trends show that national income and productivity rose sharply as machines improved factory
              efficiency. However, workers’ wages grew far more slowly, creating a widening gap between labourers and owners.
            </p>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              This inequality supports the claim that industrialisation produced wealth—but unevenly. The benefits were not
              distributed fairly, deepening class divides that continue in modern economies.
            </p>
          </article>

        </section>

        {/* ---------- PAGE CLOSE ---------- */}
        <section className="border-t border-neutral-200 pt-6">
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed max-w-3xl">
            The economic legacy of the Industrial Revolution reveals a central truth: innovation is powerful, but without
            fair systems, progress can widen inequality. Understanding this tension helps us interpret modern debates about
            labour, automation, and global wealth distribution.
          </p>
        </section>

      </div>
    </main>
  );
}
