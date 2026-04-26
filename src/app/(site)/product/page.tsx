import Image from "next/image"
import { PageHeading } from "@/components/sections/page-heading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "產品 | Mark Biomedical 原益菌",
  description: "TCell-1 與產品諮詢。",
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
                src="/images/product.png"
                alt="TCell-1 原益菌產品"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
              TCell-1 原益菌
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
              專為台灣人體質設計的本土型原生益菌，以科學實證為基礎，強調耐酸抗膽鹽、腸道定殖與日常防護，協助維持腸道菌叢平衡與健康狀態。
            </p>
            <div className="mt-6 rounded-xl border border-sky-200/70 bg-sky-50/60 px-4 py-4">
              <p className="text-sm text-brand-navy/60">建議售價</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-brand-electric">
                NT$ 2,800
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-navy sm:text-base">
                推廣價 買一送一
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
