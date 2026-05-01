"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroBridgeSection() {
  const [displayTemp, setDisplayTemp] = useState(18)
  const [displayBillion, setDisplayBillion] = useState(20)
  const [displayShield, setDisplayShield] = useState(3)

  useEffect(() => {
    const tempSequence = [18, 15, 12, 9, 6, 4]
    const billionSequence = [20, 40, 60, 80, 100]
    const shieldSequence = [3, 6, 9, 12, 14]
    const delays = [55, 65, 80, 110, 160]
    let step = 0

    const tick = () => {
      setDisplayTemp(tempSequence[step] ?? 4)
      setDisplayBillion(billionSequence[Math.min(step, billionSequence.length - 1)] ?? 100)
      setDisplayShield(shieldSequence[Math.min(step, shieldSequence.length - 1)] ?? 14)
      step += 1
      if (step < tempSequence.length) {
        window.setTimeout(tick, delays[step - 1] ?? 160)
      }
    }

    tick()
  }, [])

  return (
    <section className="border-t border-sky-200/40 bg-gradient-to-b from-white/75 to-sky-50/45">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8">
        <p className="text-base leading-relaxed text-brand-navy/75 sm:text-lg">
          活性鎖鮮，讓原生菌在腸道真正覺醒。
        </p>

        <div
          className="mt-3 flex items-center justify-center gap-4 sm:gap-6"
          aria-label="100 億菌、4 度活性鎖鮮、抗 14 種外來菌"
        >
          <div className="min-w-[5.75rem] text-right sm:min-w-[7rem]">
            <p className="text-xs text-brand-navy/60 sm:text-sm">活菌含量</p>
            <motion.p
              key={`billion-${displayBillion}`}
              className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
              initial={{ y: 8, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1, scale: displayBillion === 100 ? [1, 1.06, 1] : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {displayBillion}億菌
            </motion.p>
          </div>

          <motion.p
            key={`temp-${displayTemp}`}
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

          <div className="min-w-[5.75rem] text-left sm:min-w-[7rem]">
            <p className="text-xs text-brand-navy/60 sm:text-sm">防護力</p>
            <motion.p
              key={`shield-${displayShield}`}
              className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
              initial={{ y: 8, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1, scale: displayShield === 14 ? [1, 1.06, 1] : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              抗{displayShield}種外來菌
            </motion.p>
          </div>
        </div>

        <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl">
          讓好菌活著見你
        </p>
      </div>
    </section>
  )
}
