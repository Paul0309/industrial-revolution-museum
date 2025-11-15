'use client'
import { motion } from "framer-motion"
import "./globals.css"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-neutral-50">
      {/* hero */}
      <section className="max-w-3xl px-6">
        <motion.h1
          className="text-6xl font-bold tracking-tight text-neutral-900 sm:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          The Industrial Revolution Museum
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-neutral-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover how innovation reshaped humanity — and how inequality still echoes today.
        </motion.p>

        <motion.button
          className="mt-10 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Enter Museum →
        </motion.button>
      </section>

      {/* footer hint */}
      <div className="absolute bottom-10 text-sm text-neutral-500">
        © 2025 Industrial Revolution Virtual Museum
      </div>
    </main>
  )
}
