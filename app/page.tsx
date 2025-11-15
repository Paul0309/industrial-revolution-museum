'use client'
import { motion } from "framer-motion"
import "./globals.css"
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-12 md:py-16">
        {/* ---------- NAV / TOP BAR ---------- */}
        <header className="flex items-center justify-between pb-10">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600" />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-500">
              IR Museum
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <Link href="/social" className="hover:text-neutral-900">
              Social
            </Link>
            <Link href="/economic" className="hover:text-neutral-900">
              Economic
            </Link>
            <Link href="/environment" className="hover:text-neutral-900">
              Environmental
            </Link>
            <Link href="/global" className="hover:text-neutral-900">
              Global
            </Link>
            <Link href="/reflection" className="hover:text-neutral-900">
              Reflection
            </Link>
          </nav>
        </header>

        {/* ---------- HERO + THESIS ---------- */}
        <section className="flex flex-1 flex-col justify-center gap-8">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Industrial Revolution · Museum Website
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Understanding the Industrial Revolution
            </h1>

            {/* Intro 설명 */}
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg leading-relaxed">
              This digital museum explores how the Industrial Revolution changed people’s lives,
              reshaped economies, and transformed the environment. Each exhibit connects{" "}
              <span className="font-medium text-neutral-800">
                evidence from primary sources, data, and historical thinking
              </span>{" "}
              back to one essential question: <br className="hidden sm:block" />
              <span className="italic text-neutral-800">
                “What does real progress look like—and who pays the price?”
              </span>
            </p>

            {/* Thesis 문단 (루브릭용 4–6문장) */}
            <p className="max-w-2xl text-sm text-neutral-700 leading-relaxed">
              The Industrial Revolution was a turning point for humanity because it radically
              increased productivity and global connections, but it also created new forms of
              inequality and exploitation. Factories, railways, and new technologies made goods
              cheaper and faster to produce, changing how people worked and lived. At the same time,
              long hours, unsafe conditions, and child labor showed that many workers paid the human
              cost for industrial “progress.” Industrialization also concentrated power and wealth in
              the hands of factory owners and empires, while pollution and health problems spread
              through crowded cities. This museum argues that the Industrial Revolution brought real
              progress, but its benefits were unevenly shared across classes and countries.
            </p>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/social"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition"
            >
              Start with Social Impacts →
            </Link>
            <a
              href="#exhibits"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition"
            >
              View all exhibits
            </a>
          </div>
        </section>

        {/* ---------- EXHIBIT GRID ---------- */}
        <section id="exhibits" className="mt-12 border-t border-neutral-200 pt-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Exhibits
              </h2>
              <p className="text-sm text-neutral-500">
                Five focused pages that connect evidence to your thesis from different angles.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Social Card */}
            <Link
              href="/social"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-600">
                  Exhibit 1 · Social
                </p>
                <h3 className="text-base font-semibold text-neutral-900">
                  Life Transformed
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  How industrialisation reshaped daily life, working conditions, and class
                  structures for men, women, and children in industrial cities.
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-neutral-500">
                <span className="mr-1 text-sky-600 group-hover:translate-x-0.5 transition">
                  →
                </span>
                View social impacts
              </div>
            </Link>

            {/* Economic Card */}
            <Link
              href="/economic"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-600">
                  Exhibit 2 · Economic
                </p>
                <h3 className="text-base font-semibold text-neutral-900">
                  Innovation &amp; Inequality
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Explore how new technologies, markets, and ideas about capitalism and socialism
                  created both prosperity and deeper class divisions.
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-neutral-500">
                <span className="mr-1 text-emerald-600 group-hover:translate-x-0.5 transition">
                  →
                </span>
                View economic impacts
              </div>
            </Link>

            {/* Environmental Card */}
            <Link
              href="/environment"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-600">
                  Exhibit 3 · Environmental
                </p>
                <h3 className="text-base font-semibold text-neutral-900">
                  Power &amp; Pollution
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Learn how coal, factories, and crowded cities powered industrial growth while
                  damaging air, water, and public health.
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-neutral-500">
                <span className="mr-1 text-amber-600 group-hover:translate-x-0.5 transition">
                  →
                </span>
                View environmental impacts
              </div>
            </Link>

            {/* Global Card */}
            <Link
              href="/global"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-600">
                  Exhibit 4 · Global
                </p>
                <h3 className="text-base font-semibold text-neutral-900">
                  Global Connections
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Follow how railways, steamships, and trade spread industrialisation to other
                  regions, bringing both new opportunities and unequal dependencies.
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-neutral-500">
                <span className="mr-1 text-indigo-600 group-hover:translate-x-0.5 transition">
                  →
                </span>
                View global impacts
              </div>
            </Link>

            {/* Reflection Card */}
            <Link
              href="/reflection"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600">
                  Exhibit 5 · Reflection
                </p>
                <h3 className="text-base font-semibold text-neutral-900">
                  Legacy: Then → Now
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Connect one historical impact—such as labour rights or environmental damage—to a
                  modern issue in the last decade, using recent sources to show continuity and
                  change.
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-neutral-500">
                <span className="mr-1 text-purple-600 group-hover:translate-x-0.5 transition">
                  →
                </span>
                View reflection &amp; legacy
              </div>
            </Link>
          </div>
        </section>

        {/* ---------- FOOTER ---------- */}
        <footer className="mt-10 border-t border-neutral-200 pt-4 text-xs text-neutral-500 flex justify-between gap-4 flex-wrap">
          <span>
            Industrial Revolution Museum · World History 2 Project
          </span>
          <span>
            Group 3 — Chanyu, Edward, Minseok, Heewan
          </span>
        </footer>
      </div>
    </main>
  );
}
