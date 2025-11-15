"use client";
import { motion } from "framer-motion";

export default function ReflectionExhibit() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        className="absolute inset-0 bg-[url('/factory-bg.jpg')] bg-cover bg-center"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 bg-[url('/modern-city.jpg')] bg-cover bg-center mix-blend-overlay"
        animate={{ opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl font-bold mb-6"
      >
        Reflection — Then and Now
      </motion.h1>
      <p className="relative z-10 text-gray-300 max-w-3xl text-center leading-relaxed">
        The same tension between innovation and inequality continues today.
        From automation to AI, we still face the question: progress for whom?
      </p>
    </main>
  );
}
