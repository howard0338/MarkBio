"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Dna } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const easeOut = [0.22, 1, 0.36, 1] as const

const titleReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, delay: 0.1, ease: easeOut },
  },
}

const badgeReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0, ease: easeOut },
  },
}

const afterTitleStagger = (i: number) => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: 0.32 + i * 0.09, ease: easeOut },
  },
})

/** 極低透明度 DNA / 雙螺旋風格水印（專業藍系） */
function DnaPatternWatermark() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-[#2563EB] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent)] opacity-[0.05]"
      viewBox="0 0 800 200"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="0.65" strokeLinecap="round">
        <path d="M0 60 C 200 0 400 0 800 60" />
        <path d="M0 140 C 200 200 400 200 800 140" />
        {[80, 200, 320, 440, 560, 680].map((x) => (
          <line
            key={x}
            x1={x}
            y1="52"
            x2={x}
            y2="148"
            opacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <path d="M0 100 C 200 30 400 30 800 100" opacity="0.5" />
        <path d="M0 100 C 200 170 400 170 800 100" opacity="0.5" />
      </g>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[min(84dvh,50rem)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_0%_30%,rgba(37,99,235,0.08),transparent_50%)]"
        aria-hidden
      />
      <DnaPatternWatermark />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[18%] top-[4%] h-[min(55vw,26rem)] w-[min(55vw,26rem)] rounded-full bg-sky-300/30 [filter:blur(64px)]" />
        <div className="absolute -right-[12%] top-[18%] h-[min(45vw,22rem)] w-[min(45vw,22rem)] rounded-full bg-blue-200/40 [filter:blur(70px)]" />
        <div className="absolute bottom-[-8%] right-[20%] h-[18rem] w-[18rem] rounded-full bg-sky-200/35 [filter:blur(56px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] [background-size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_50%,transparent)]" />
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[min(84dvh,50rem)] max-w-6xl flex-col justify-center gap-10 px-5 pb-14 pt-4 sm:px-8 sm:pt-6 md:px-10 lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-center lg:gap-x-6 lg:gap-y-0 lg:px-10 lg:pb-16 lg:pt-6 xl:px-12"
      >
        <div className="flex max-w-xl flex-col tracking-[-0.02em] md:max-w-2xl lg:max-w-none lg:pr-4">
          <motion.p
            initial="hidden"
            animate="show"
            variants={badgeReveal}
            className="mb-5 flex w-fit items-center gap-2 text-xs font-medium text-brand-navy/75 sm:text-sm"
          >
            <Dna className="size-3.5 shrink-0 text-brand-electric" aria-hidden />
            原益菌 · Original Probiotics
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="show"
            variants={titleReveal}
            className="text-balance text-3xl font-semibold leading-[1.1] text-brand-navy sm:text-4xl md:text-[2.6rem] md:leading-[1.08] lg:text-[2.75rem] xl:text-[2.9rem]"
          >
            <span className="bg-gradient-to-r from-brand-navy via-brand-electric to-blue-500 bg-clip-text text-transparent">
              專為台灣人體質而生
            </span>
            <br />
            <span>TCell-1 腸道守護神</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={afterTitleStagger(0)}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-brand-navy/70 sm:text-lg"
          >
            由健康成年台灣人腸道黏膜分離出的本土型原生益菌，具備四大優勢：耐酸抗膽鹽、長效吸附、可抑制 14
            種腸道有害菌，並有四大學術機構與百位以上臨床個案支持，為日常健康提供更扎實的防護基礎。
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={afterTitleStagger(0)}
            className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-brand-navy/65 sm:text-base"
          >
            本產品菌株已完成 DNA 基因定序，具備可追溯的菌株身分驗證，補充更安心。
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={afterTitleStagger(0)}
            className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-brand-navy/65 sm:text-base"
          >
            本產品具衛生福利部核可的「健康食品」標章（衛署健食字第 A00042 號），來源與品質可追溯，讓日常補充更安心。
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={afterTitleStagger(1)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/science"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "h-10 gap-1.5 border-0 px-5",
                }),
                "btn-electric-glow"
              )}
            >
              了解科學實證
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/product"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: cn(
                  "h-10 border-sky-300/60 bg-sky-50/40 px-5 text-brand-navy",
                  "backdrop-blur-md transition-all duration-300",
                  "hover:border-brand-electric/50 hover:bg-white/50 hover:shadow-md hover:shadow-blue-500/10"
                ),
              })}
            >
              立即預約諮詢
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={afterTitleStagger(2)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-navy/55"
          >
            <span>堅持冷鏈，守護百億活菌活性</span>
            <div
              className="hidden h-3.5 w-px bg-sky-300/50 sm:block"
              aria-hidden
            />
            <span>清大研究脈絡與產學實驗基礎</span>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto mt-6 w-full max-w-sm justify-self-end lg:mx-0 lg:ml-auto lg:mt-10 lg:max-w-md lg:pl-2 xl:max-w-[22rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: easeOut }}
        >
          <div className="relative overflow-hidden rounded-[1.35rem]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/product.png"
                alt="TCell-1 原益菌產品照"
                fill
                sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 24rem, 80vw"
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="px-4 py-3 text-center text-xs leading-relaxed text-brand-navy/60">
              TCell-1 原益菌產品示意（以實際出貨包裝為準）
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
