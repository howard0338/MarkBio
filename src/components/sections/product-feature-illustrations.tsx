import Image from "next/image"

import { siteCopy, sitePanel } from "@/lib/site-layout"
import { cn } from "@/lib/utils"

const FEATURE_ILLUSTRATIONS = [
  {
    src: "/images/產品副圖/活存菌.png",
    title: "高活存菌",
    description:
      "採冷凍乾燥技術保留菌株活性，每公克經 CFU 嚴格檢測，確保含有 100 億活菌，補充更安心。",
  },
  {
    src: "/images/產品副圖/抗菌力.png",
    title: "強抗菌力",
    description:
      "實驗證實可抑制包含赤痢菌、金黃葡萄球菌等在內的多種腸道有害菌，協助維持菌叢平衡。",
  },
  {
    src: "/images/產品副圖/耐受力.png",
    title: "耐酸耐膽鹽",
    description:
      "能通過胃酸與膽鹽的嚴苛環境考驗，活菌順利抵達腸道發揮作用，定殖更有保障。",
  },
] as const

export function ProductFeatureIllustrations() {
  return (
    <section
      className={cn(siteCopy, sitePanel, "bg-white/50")}
      aria-labelledby="product-features-heading"
    >
      <h2
        id="product-features-heading"
        className="text-balance text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl"
      >
        三大核心優勢
      </h2>
      <p className="mt-2 text-brand-navy/65">
        TCELL-1 以科學實證為基礎，從活菌數量、抑菌能力到通過消化道的能力，全方位守護腸道健康。
      </p>

      <ul className="mt-6 grid grid-cols-3 gap-0.5 sm:gap-1">
        {FEATURE_ILLUSTRATIONS.map((item) => (
          <li key={item.src} className="flex min-w-0 flex-col items-center text-center">
            <div className="relative aspect-square w-full">
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 380px, 33vw"
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-brand-navy sm:mt-3 sm:text-base md:text-lg">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs text-brand-navy/75 sm:mt-2 sm:text-sm md:text-base">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
