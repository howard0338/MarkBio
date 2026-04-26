"use client"

import { Award, Beaker, ShieldCheck, Snowflake } from "lucide-react"

const coreAdvantages = [
  {
    title: "本土原生來源",
    subtitle: "首株本土原生菌",
    description:
      "TCell-1 來自健康成年台灣人腸道黏膜，完整契合在地體質與飲食環境。",
    icon: Beaker,
  },
  {
    title: "學術科研護城河",
    subtitle: "中研院院士推薦",
    description:
      "獲台大、清大等跨學研機構長期實驗與臨床脈絡支持。",
    icon: Award,
  },
  {
    title: "國家權威認證",
    subtitle: "衛福部健康食品",
    description:
      "多項國內外獎項與專利背書，建立可驗證的信任基礎。",
    icon: ShieldCheck,
  },
]

const coldChainPoints = [
  "超強耐酸抗膽鹽，活菌可順利通過胃酸與膽鹽考驗。",
  "實驗可吸附腸道細胞並維持活性，定殖更穩定。",
  "對 14 種腸道有害菌具抑制趨勢，守住菌叢平衡。",
]

const qualityPoints = [
  "零化學添加，不含賦形劑、香料與人工防腐成分。",
  "成分透明，菌株身分可追溯並具完整序列資料。",
  "代謝友善配方，長期補充更符合日常保健需求。",
]

export function HomeHighlightsSection() {
  return (
    <section className="border-t border-sky-200/40 bg-white/60">
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-8 sm:px-6 sm:py-12 md:px-8">
        <section className="space-y-6">
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
            核心優勢：台灣人專屬的原生防護
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {coreAdvantages.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="p-2"
                >
                  <Icon className="size-6 text-brand-electric" aria-hidden />
                  <h3 className="mt-3 text-lg font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-electric/90">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 p-2 md:grid-cols-[1.25fr_0.9fr]">
          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy">
              堅持冷鏈：守護百億活菌活性
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-navy/75 sm:text-base">
              {coldChainPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <Snowflake className="mt-0.5 size-4 shrink-0 text-brand-electric" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-2 text-center">
            <div>
              <p className="text-sm font-semibold text-brand-navy/70">每公克 CFU 活菌保證</p>
              <p className="mt-1 text-6xl font-bold leading-none text-brand-electric">100億</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 p-2 md:grid-cols-[1.25fr_0.9fr]">
          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy">
              極致純淨：醫學等級的品質承諾
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-navy/75 sm:text-base">
              {qualityPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-electric" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-2 text-center">
            <div>
              <p className="text-6xl font-bold leading-none text-brand-electric">90%</p>
              <p className="mt-2 text-lg font-semibold text-brand-navy">病誘源自體內發炎</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
