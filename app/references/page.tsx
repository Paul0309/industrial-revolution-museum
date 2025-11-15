"use client";
import { motion } from "framer-motion";

export default function References() {
  const refs = [
    "Sadler Report (1832)",
    "Factory Act (1833)",
    "Adam Smith — Wealth of Nations",
    "Karl Marx & Engels — Communist Manifesto",
    "John Snow — Cholera Map (1854)",
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
      >
        References
      </motion.h1>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="space-y-6 text-lg"
      >
        {refs.map((ref, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 60 }}
            className="bg-slate-800/70 py-4 px-6 rounded-xl shadow-md"
          >
            {ref}
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
