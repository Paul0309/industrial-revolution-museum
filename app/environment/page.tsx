"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EnvironmentExhibit() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#333] px-6 md:px-20 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Environmental Impacts — Power & Pollution
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-16"
      >
        While industrialization advanced technology and comfort, it also unleashed devastating
        environmental consequences. Edwin Chadwick’s <em>Report on the Sanitary Condition of the
        Labouring Population</em> (1842) described “unwholesome air” and rivers filled with industrial
        waste, directly linking pollution to disease and mortality. Friedrich Engels later portrayed
        Manchester’s sky as “poisonous to breathe,” revealing the toll of unchecked urban growth. CO₂
        emission data from 1750–1900 shows pollution soaring alongside factory expansion, marking the
        birth of large-scale environmental damage. The Industrial Revolution proved that progress
        without sustainability carries a cost—a legacy of pollution that continues to challenge humanity
        today.
      </motion.p>

      {/* Artifacts */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {["/chadwick-report.jpg", "/manchester-smoke.jpg"].map((src, i) => (
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
                Illustrates how industrial expansion harmed public health and environment.
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
        <h2 className="text-2xl font-semibold mb-4">CO₂ Emissions (1750–1900)</h2>
        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          Chart Placeholder
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Emissions data show the beginning of human-driven climate change during industrialization.
        </p>
      </motion.section>
    </main>
  );
}
