import Image from "next/image"
import { PageHeading } from "@/components/sections/page-heading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "產品 | Mark Biomedical 原益菌",
  description: "TCELL-1 與產品諮詢。",
}

export default function ProductPage() {
  return (
    <article>
      <PageHeading
        title="產品"
        description=""
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        <section className="grid gap-8 lg:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm lg:max-w-[22rem]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/產品.png"
                alt="TCELL-1 原益菌產品"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
              TCELL-1 原益菌
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
              專為台灣人體質設計的本土型原生益菌，以科學實證為基礎，強調耐酸抗膽鹽、腸道定殖與日常防護，協助維持腸道菌叢平衡與健康狀態。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
              菌株已完成 DNA 基因定序驗證，具備明確且可追溯的身分資訊，來源更透明、補充更有保障。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
              本產品具衛生福利部核可的「健康食品」標章（衛署健食字第 A00042 號），來源與品質可追溯，讓日常補充更安心。
            </p>
            <div className="mt-6 rounded-xl border border-sky-200/70 bg-sky-50/60 px-4 py-4">
              <p className="text-sm text-brand-navy/60">建議售價</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-sm font-medium text-brand-navy/65">2入組</span>
                <span className="text-lg text-brand-navy/45 line-through">NT$ 5,600</span>
                <span className="text-3xl font-bold tracking-tight text-brand-electric">
                  NT$ 2,800
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/75 sm:text-base">
                <span className="font-semibold text-brand-navy">限時活動：</span>
                一次購買三組免冷鏈運費，及加送一張華爾街馬克講座入場券（由紐約華爾街金融機構前執行長及中研院院士擔任演講佳賓，市售價 3600 元）。
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
