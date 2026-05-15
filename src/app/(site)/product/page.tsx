import type { Metadata } from "next"
import type { ReactNode } from "react"

import { PageHeading } from "@/components/sections/page-heading"
import { ProductFeatureIllustrations } from "@/components/sections/product-feature-illustrations"
import { ProductImageGallery } from "@/components/sections/product-image-gallery"
import {
  siteContainer,
  siteCopy,
  sitePanel,
  sitePanelInset,
  sitePanelWarn,
} from "@/lib/site-layout"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "產品 | Mark Biomedical 原益菌",
  description:
    "TCELL-1 原益菌：成分規格、食用建議、冷鏈儲存、訂購配送與為何選擇 TCell-1。",
}

function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="text-balance text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl"
    >
      {children}
    </h2>
  )
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-semibold text-brand-navy sm:text-lg">{children}</h3>
  )
}

export default function ProductPage() {
  return (
    <article>
      <PageHeading title="產品" description="" />
      <div className={cn(siteContainer, "py-10 sm:py-12")}>
        <section className="grid gap-8 lg:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <ProductImageGallery />

          <div className={siteCopy}>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
              TCELL-1 原益菌
            </h2>
            <p className="mt-4 text-brand-navy/70">
              專為台灣人體質設計的本土型原生益菌，以科學實證為基礎，強調耐酸抗膽鹽、腸道定殖與日常防護，協助維持腸道菌叢平衡與健康狀態。
            </p>
            <p className="mt-3 text-brand-navy/70">
              菌株已完成 DNA 基因定序驗證，具備明確且可追溯的身分資訊，來源更透明、補充更有保障。
            </p>
            <p className="mt-3 text-brand-navy/70">
              本產品具衛生福利部核可的「健康食品」標章（衛署健食字第 A00042 號），來源與品質可追溯，讓日常補充更安心。
            </p>
            <div className={cn(sitePanelInset, "mt-6")}>
              <p className="text-sm text-brand-navy/60">建議售價</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-sm font-medium text-brand-navy/65">2入組</span>
                <span className="text-lg text-brand-navy/45 line-through">NT$ 5,600</span>
                <span className="text-3xl font-bold tracking-tight text-brand-electric">
                  NT$ 2,800
                </span>
              </div>
              <p className="mt-3 text-brand-navy/75">
                <span className="font-semibold text-brand-navy">限時活動：</span>
                一次購買三組免冷鏈運費，及加送一張華爾街馬克講座入場券（由紐約華爾街金融機構前執行長及中研院院士擔任演講佳賓，市售價 3600 元）。
              </p>
            </div>
          </div>
        </section>

        <div className={cn(siteCopy, "mt-16 space-y-14 border-t border-sky-200/50 pt-16")}>
          <section aria-labelledby="product-spec-heading">
            <SectionTitle id="product-spec-heading">產品成分與規格</SectionTitle>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="font-semibold text-brand-navy">原料組成</dt>
                <dd className="mt-1">
                  異麥芽酮糖醇、乳酸菌冷凍乾燥菌粉 (Lactobacillus rhamnosus Tcell-1)。
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">包裝容量</dt>
                <dd className="mt-1">100 公克 / 瓶（單瓶含瓶身重量約 150 公克）。</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">保健功效</dt>
                <dd className="mt-1">
                  經實證有助於增加腸內益生菌數量，維持消化道機能穩定。
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="product-dosage-heading">
            <SectionTitle id="product-dosage-heading">攝取建議與專業指南</SectionTitle>
            <Subheading>建議用量</Subheading>
            <p className="mt-2">
              每日建議食用 2 次，每次 2 匙（每平匙約 1 公克）。對於需要積極強化保養者，每日最高建議攝取量可調整至 10 匙。
            </p>
            <Subheading>食用方式</Subheading>
            <p className="mt-2">
              建議於飯後搭配溫冷開水、牛奶或果汁食用，請避免高溫加熱以確保活菌活性。
            </p>
            <div className={cn(sitePanelWarn, "mt-5 text-brand-navy/80")}>
              <p className="font-semibold text-brand-navy">專業叮嚀</p>
              <p className="mt-2">
                食用前請洽詢醫師或營養師之專業建議。請謹記均衡飲食與適度運動是健康的基石，並請依建議量攝取。
              </p>
            </div>
          </section>

          <section aria-labelledby="product-storage-heading">
            <SectionTitle id="product-storage-heading">儲存與保鮮：活性守護關鍵</SectionTitle>
            <Subheading>冷鏈保存</Subheading>
            <p className="mt-2">
              為確保乳酸菌發揮最大生物活性，請務必冷藏於 4°C 環境下。使用後應立即旋緊瓶蓋，避免受潮影響效用。
            </p>
            <Subheading>有效期限</Subheading>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-brand-navy">冷藏保存 (4°C)：</span>
                可穩定存放 2 年。
              </li>
              <li>
                <span className="font-medium text-brand-navy">冷凍保存：</span>
                可延長存放至 5 年。
              </li>
              <li>
                <span className="font-medium text-brand-navy">常溫/一般存放：</span>
                建議於 10 個月內食用完畢。
              </li>
            </ul>
          </section>

          <section aria-labelledby="product-shipping-heading">
            <SectionTitle id="product-shipping-heading">訂購與配送須知</SectionTitle>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="font-semibold text-brand-navy">全程冷鏈直送：</span>
                為確保產品活性與品質，全程採用專業冷藏/冷凍包裝（含保冷劑與保冷袋），並由「低溫宅配」直送府上（運費 NT$200）。
              </li>
              <li>
                <span className="font-semibold text-brand-navy">獨立下單原則：</span>
                低溫商品需獨立結帳，無法與常溫商品合併配送，以維護運送品質。
              </li>
              <li>
                <span className="font-semibold text-brand-navy">配送範圍限制：</span>
                目前僅限台灣本島配送，暫不提供海外地區（如香港、新加坡）之寄送服務。
              </li>
            </ul>
          </section>

          <section
            className={cn(sitePanel, "bg-sky-50/40")}
            aria-labelledby="why-tcell-heading"
          >
            <SectionTitle id="why-tcell-heading">專欄主題：為何選擇 TCell-1？</SectionTitle>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="font-semibold text-brand-navy">醫學級起源</p>
                <p className="mt-1">
                  市售唯一源自健康國人腸道黏膜之原生菌株，具備完整 DNA 定序身份證明。
                </p>
              </li>
              <li>
                <p className="font-semibold text-brand-navy">醫療專業認可</p>
                <p className="mt-1">
                  全台唯一被台大醫院公開列入醫療級輔助處方之益生菌種，深受醫療院所專業推薦。
                </p>
              </li>
              <li>
                <p className="font-semibold text-brand-navy">精準適配性</p>
                <p className="mt-1">專為台灣人體質篩選之獨特菌種，完美契合在地國人之腸道環境。</p>
              </li>
              <li>
                <p className="font-semibold text-brand-navy">高活性保證</p>
                <p className="mt-1">
                  採用領先的「冷凍乾燥技術」製成菌粉，並經 CFU（國際菌數單位）嚴格檢測，每公克確保含有 100 億活菌。
                </p>
              </li>
              <li>
                <p className="font-semibold text-brand-navy">長效定殖</p>
                <p className="mt-1">
                  具備卓越的腸道附著能力，能長效定殖於人體並改變菌叢生態，全方位守護身體保護力。
                </p>
              </li>
            </ul>
          </section>

          <ProductFeatureIllustrations />
        </div>
      </div>
    </article>
  )
}
