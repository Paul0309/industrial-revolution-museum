"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// app/environment/page.tsx

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-16">
      <div className="w-full max-w-5xl space-y-12">
        
        {/* ---------- HEADER ---------- */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Exhibit 3 · Environmental Impacts
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Power, Pollution, and Public Health
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed mx-auto md:mx-0">
            How did industrialisation reshape the natural environment—and what lasting consequences did it leave behind?
          </p>
        </section>

        {/* ---------- MAIN GRID ---------- */}
        <section className="grid gap-10 md:grid-cols-[2fr,1.4fr] items-start">

          {/* ---------- LEFT SIDE: Argument ---------- */}
          <article className="space-y-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              Mini-Argument · What environmental costs came with industrial progress?
            </h2>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              <strong>Industrialisation boosted technological development but created severe environmental harm</strong> 
              that reshaped public health and ecosystems. Edwin Chadwick’s 
              <span className="italic"> Report on the Sanitary Condition of the Labouring Population</span> (1842) 
              documented polluted rivers, contaminated water, and rising disease rates—direct results of unregulated 
              factory waste.
            </p>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Friedrich Engels also described the air of Manchester as “poisonous to breathe,” showing how 
              coal-powered industrial cities filled the sky with soot, smoke, and toxic particulates. These firsthand 
              accounts align with CO₂ data from 1750–1900, which shows emissions skyrocketing as industrial output 
              increased.
            </p>

            <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-medium">
              These sources reveal a clear pattern: industrial progress came at the cost of the environment, establishing 
              the foundations of modern pollution and climate challenges. This legacy shows why sustainability matters 
              today—innovation must be balanced with responsibility.
            </p>
          </article>

          {/* ---------- RIGHT SIDE: ARTIFACT CARDS ---------- */}
          <aside className="space-y-4">

            {/* Chadwick Artifact */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · 1842
              </p>

              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Chadwick’s Report on Sanitary Conditions
              </h3>

              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                Chadwick documented overcrowding, poor sanitation, and pollution in industrial cities. His report links 
                industrial growth directly to rising disease and environmental degradation.
              </p>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> Official public health inquiry. Highly credible for 
                documenting real conditions, though focused mainly on Britain’s urban working class.
              </p>
            </div>

            {/* Engels Artifact */}
            <div className="bg-white/90 border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-medium text-neutral-500 tracking-[0.18em] uppercase mb-2">
                Primary Source · 1845
              </p>

              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                Engels on Industrial Manchester
              </h3>

              <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                Engels described industrial Manchester’s air as thick with soot and smoke. His account reveals firsthand 
                the severe pollution caused by rapidly expanding factories.
              </p>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed border-t border-neutral-200 pt-2">
                <span className="font-semibold">Source Note:</span> Written from direct observation, making it highly 
                accurate. However, Engels’s political perspective may emphasise negative impacts.
              </p>
            </div>

          </aside>
        </section>

        {/* ---------- DATA SECTION ---------- */}
        <section className="grid md:grid-cols-[1.4fr,2fr] gap-10 items-center">

          {/* Graph Placeholder */}
          <div className="aspect-[4/3] rounded-2xl border border-dashed border-neutral-300 bg-white/70 flex items-center justify-center text-neutral-400 text-sm">
            <iframe src="https://ourworldindata.org/grapher/temperature-anomaly?tab=line" loading="lazy" style={{ "width":"100%", "height":"100%", "border":"0px none" }} allow="web-share; clipboard-write"></iframe>
          </div>

          {/* Caption */}
          <article className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-900">
              Data · Rapid Increase in CO₂ Emissions
            </h2>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              CO₂ emissions rose sharply during the Industrial Revolution as factories, steam engines, and coal power 
              spread across the world. This marks the beginning of large-scale human-driven environmental change.
            </p>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              This data reinforces the argument that industrialisation had environmental costs. The shift to fossil fuels 
              powered economic growth but also triggered long-term ecological consequences that continue to affect the 
              modern world.
            </p>
          </article>

        </section>

        {/* ---------- PAGE CLOSE ---------- */}
        <section className="border-t border-neutral-200 pt-6">
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed max-w-3xl">
            The environmental legacy of industrialisation reminds us that progress is never neutral. The choices made 
            during this era—especially reliance on coal and unregulated production—still shape global challenges such as 
            climate change, pollution, and sustainability debates.
          </p>
        </section>

      </div>
    </main>
  );
}
