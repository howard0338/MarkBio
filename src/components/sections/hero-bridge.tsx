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
          className="mt-3 flex items-center justify-center gap-6 sm:gap-10 md:gap-12"
          aria-label="每公克 CFU 100 億活菌、4 度冷鏈保存、抗 14 種外來菌"
        >
          <div className="flex min-w-[9.5rem] flex-col gap-y-2.5 pr-1 text-right sm:min-w-[12rem] sm:gap-y-3 sm:pr-2">
            <p className="text-xs text-brand-navy/60 sm:text-sm">每公克 CFU 活菌含量</p>
            <motion.p
              key={`billion-${displayBillion}`}
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
              initial={{ y: 8, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1, scale: displayBillion === 100 ? [1, 1.06, 1] : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {displayBillion}億
            </motion.p>
          </div>

          <div className="flex min-w-[6rem] flex-col gap-y-2.5 px-1 text-center sm:min-w-[7.5rem] sm:gap-y-3 sm:px-2">
            <p className="text-xs text-brand-navy/60 sm:text-sm">冷鏈保存</p>
            <motion.p
              key={`temp-${displayTemp}`}
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
              initial={{ y: -10, opacity: 0.3 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: displayTemp === 4 ? [1, 1.08, 1] : 1,
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {displayTemp}°C
            </motion.p>
          </div>

          <div className="flex min-w-[6rem] flex-col gap-y-2.5 pl-1 text-left sm:min-w-[7.5rem] sm:gap-y-3 sm:pl-2">
            <p className="text-xs text-brand-navy/60 sm:text-sm">防護力</p>
            <motion.p
              key={`shield-${displayShield}`}
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
              initial={{ y: 8, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1, scale: displayShield === 14 ? [1, 1.06, 1] : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              抗{displayShield}種外來菌
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
