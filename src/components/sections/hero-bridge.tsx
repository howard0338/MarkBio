"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroBridgeSection() {
  const [displayTemp, setDisplayTemp] = useState(18)

  useEffect(() => {
    const sequence = [18, 15, 12, 9, 6, 4]
    const delays = [55, 65, 80, 110, 160]
    let step = 0

    const tick = () => {
      setDisplayTemp(sequence[step] ?? 4)
      step += 1
      if (step < sequence.length) {
        window.setTimeout(tick, delays[step - 1] ?? 160)
      }
    }

    tick()
  }, [])

  return (
    <section className="border-t border-sky-200/40 bg-gradient-to-b from-white/75 to-sky-50/45">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8">
        <p className="text-base leading-relaxed text-brand-navy/75 sm:text-lg">
          4°C 活性鎖鮮，讓原生菌在腸道真正覺醒。
        </p>

        <div className="mt-3 flex items-center justify-center" aria-label="4 度活性鎖鮮">
          <motion.p
            key={displayTemp}
            className="text-5xl font-bold tracking-tight text-brand-electric sm:text-6xl"
            initial={{ y: -10, opacity: 0.3 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: displayTemp === 4 ? [1, 1.08, 1] : 1,
              textShadow:
                displayTemp === 4
                  ? "0 0 22px rgba(37,99,235,0.35)"
                  : "0 0 0 rgba(37,99,235,0)",
            }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {displayTemp}°C
          </motion.p>
        </div>

        <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl">
          讓好菌活著見你
        </p>
      </div>
    </section>
  )
}
