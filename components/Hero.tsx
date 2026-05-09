
"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-7xl font-bold">
          Aniruddha Rajendra Shinde
        </h1>

        <p className="text-cyan-400 mt-6 text-2xl">
          Ultra Modern Developer Portfolio
        </p>

        <button className="mt-8 px-8 py-4 bg-cyan-500 rounded-2xl text-black font-bold">
          Explore Work
        </button>
      </motion.div>
    </section>
  )
}
