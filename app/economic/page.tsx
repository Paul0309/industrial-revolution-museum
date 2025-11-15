"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EconomicExhibit() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#333] px-6 md:px-20 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Economic Impacts — Innovation & Inequality
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-16"
      >
        The Industrial Revolution brought both economic prosperity and deep inequality. In{" "}
        <em>The Wealth of Nations</em> (1776), Adam Smith argued that monopolies and trade restrictions
        hindered fair competition—an idea central to capitalism’s rise. Yet, as Marx and Engels wrote in
        the <em>Communist Manifesto</em> (1848), industrial competition fueled crises, exploitation, and
        wage instability for workers. Historical wage data from 1750–1914 confirms a rise in average real
        income, but this growth was uneven—benefiting factory owners far more than laborers. The era’s
        economic system generated innovation and global wealth, but it also entrenched class divisions
        that shaped modern inequality.
      </motion.p>

      {/* Artifacts */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {["/wealth-of-nations.jpg", "/communist-manifesto.jpg"].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <Image
              src={src}
              alt="Artifact"
              width={800}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2">Artifact {i + 1}</h3>
              <p className="text-gray-600 text-sm">
                Highlights economic ideas shaping modern capitalism and class struggle.
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Data */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Average Real Wages (1750–1914)</h2>
        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          Chart Placeholder
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Wages rose during industrialization but unevenly—reflecting growing inequality.
        </p>
      </motion.section>
    </main>
  );
}
