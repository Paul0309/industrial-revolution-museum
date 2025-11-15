"use client";
import { motion } from "framer-motion";

export default function GlobalExhibit() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <motion.h1
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Global Connections
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {["Japan", "Germany", "India"].map((nation, i) => (
          <motion.div
            key={nation}
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="bg-slate-800 p-6 rounded-xl text-center shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{nation}</h3>
            <p className="text-gray-300 text-sm">
              How industrialization spread to {nation}—and how it reshaped local economies and societies.
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
