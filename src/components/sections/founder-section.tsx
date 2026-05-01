"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FounderSection() {
  return (
    <section
      id="founder"
      className="scroll-mt-24 border-t border-sky-200/30 bg-sky-50/25"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8">
        <motion.h2
          id="founder-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl"
        >
          創辦人：林豐盛
        </motion.h2>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.5fr)] lg:items-start lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xs lg:mx-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/ceo.png"
                alt="Mark Biomedical 創辦人暨執行長"
                fill
                sizes="(min-width: 1024px) 20rem, min(20rem, 90vw)"
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-base font-medium tracking-wide text-brand-navy sm:text-lg">
                Founder CEO
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-full flex-col p-1 sm:p-2"
          >
            <h3 className="text-sm font-semibold text-brand-navy sm:text-base">
              品牌理念
            </h3>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-brand-navy/75 sm:text-base">
              <p>
                我是林豐盛（Mark Lin），過去在紐約華爾街金融機構擔任執行長的經歷，讓我習慣以嚴謹邏輯與精準數據看待每一件事。見證無數科技與產業革新的同時，我也深刻感受到：人們對根本健康的渴望，始終不曾改變。
              </p>
              <p>
                史蒂夫賈伯斯（Steve Jobs）說：只有相信你做的是偉大的工作，你才能獲得真正的滿足。只有熱愛你的工作，你才能做出偉大的工作。如果你還沒找到你愛的工作，那就繼續尋找，不要妥協。這就跟感情的事一樣，找到的時候，你自然會知道。
              </p>
              <p>
                我真正想做的偉大的工作，就是找到真正的天然抗生素，幫助台灣和地球人類擺脫目前醫學共生共利環境下，抗生素的過度依賴使用，導致抗藥性細菌嚴重侵蝕人體的健康！也因此，我始終堅持以科學證據為依歸，試圖尋找真正適合台灣人的健康方案。
              </p>
              <p>
                經由本公司健康產品研究委員會的顧問群（包括中央研究院專家、台大高分子醫學工程博士、醫師及營養師等組成）的研究，人體約有七成淋巴組織分布於腸道，腸道不僅是消化器官，更是重要的免疫防線。現代人長期承受高壓、作息失衡，往往導致腸道菌叢失衡，進而影響整體健康。這也是我深信「守護健康，必須從小處開始」的原因：落實預防醫學，就從照顧腸道生態做起，於是和鼎健生技食品公司一起合作，以找出真正對台灣人體健康有實質幫助的好菌（原生益菌），作為馬克生醫公司簡單、有效、平實價格且高品質的唯一產品。
              </p>
              <p>
                TCell-1 源自清華大學團隊的尖端技術，透過內視鏡自本土健康成年台灣人的腸道黏膜組織中，篩選出更適合台灣人體質的本土原生益菌。清大團隊並完成其完整 DNA 序列定序，建立清楚可溯源的菌株身分，且經嚴謹實驗驗證，對 14 種腸道有害菌具有顯著抑制力。此研發成果不僅取得多國專利，更榮獲第一屆國際生醫新創獎最高榮譽。
              </p>
              <p>
                在中研院專家群肯定下，並結合台大、清大、食研所與中國醫藥大學等學術機構研究支持，以及國內多家醫院累積超過百位真實臨床個案，TCell-1 建立了扎實的醫學信任基礎。
              </p>
              <p>
                我始終相信，健康來自每日微小但持續的選擇。從今天起，為自己累積健康資本，讓 TCell-1 成為您每天的必備好菌，增強腸道好菌大軍，打敗體內壞菌！讓您每一天都更有活力，減少惱人的常見毛病，例如過敏、口臭、牙周病、搔癢、容易健忘、胃液逆流、腸胃不適、便秘、體內發炎等，讓您更加健康及真正實踐減少看醫生的預防醫學的願景。
              </p>
              <p
                className="pt-3 text-right text-xl text-brand-navy/80 sm:text-2xl"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                Mark Lin 林豐盛
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
