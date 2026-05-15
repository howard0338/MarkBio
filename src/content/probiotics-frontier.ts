/** 醫學前沿（益生菌主題）：導言、六大主題與延伸段落 */

export type FrontierSubBlock = {
  title: string
  intro?: string
  bullets: string[]
}

export type FrontierTheme = {
  title: string
  paragraphs: string[]
  bullets?: string[]
  subBlocks?: FrontierSubBlock[]
  footnote?: string
}

export const probioticsFrontierIntro: string[] = [
  "整理國內外關於腸道菌的醫學報告顯示，腸道菌群（約 10 兆至 100 兆）主宰全身健康！與免疫系統、新陳代謝系統、神經系統緊密相關。",
  "現代醫學將腸道菌視為「第二個大腦」或額外器官，菌相失衡（壞菌多於好菌）與肥胖、過敏性疾病、牙周病、心血管疾病、糖尿病、癌症（特別是腸癌）、阿茲海默症及巴金森氏症等慢性病密切相關。",
  "高菌種多樣性是強大免疫系統的基礎，益生菌治療（如糞便移植）已應用於改善腸道發炎。尤其是TCELL-1原生益菌已經是台大醫院、馬偕醫院、奇美醫院、新光醫院、台安醫院、中國醫藥大學附設醫院、高雄醫大附設中和醫院、高雄市立大同醫院⋯等採用的醫療等級輔助處方箋（醫用保健品）。",
  "腸道菌醫學分析核心觀點「第二個大腦」的運作機制：腦腸軸。",
  "說明從腦腸軸、免疫系統與代謝系統到日常身體照護與腸道菌的關聯性，所以使用最好的原生益菌對於身體健康真的很重要！",
]

export const probioticsFrontierThemes: FrontierTheme[] = [
  {
    title: "腦腸軸與神經退化",
    paragraphs: [
      "人體腸道內棲息著數十兆計的微生物，這些微生物群落（腸道菌群）與宿主之間存在著複雜而精密的互動關係。現代醫學研究指出，腸道菌群透過「腦腸軸」（Microbiota-Gut-Brain Axis, MGBA）與大腦進行雙向溝通，此軸線涉及神經、內分泌和免疫等多個系統。當腸道菌相失衡時，即壞菌數量多於好菌，可能導致腸道通透性增加，形成所謂的「腸漏症」。此時，有害物質如脂多醣（LPS）便可能穿過腸壁進入血液循環，進而引發全身性發炎反應。",
      "這種發炎反應不僅影響腸道本身，更可能透過腦腸軸影響中樞神經系統。研究顯示，腸道菌群失衡與多種神經退化性疾病的發生和進程密切相關，例如巴金森氏症（Parkinson's Disease）患者常見的便秘和憂鬱情緒，以及阿茲海默症（Alzheimer's Disease）中澱粉樣蛋白（Amyloid）的異常沉積。",
      "部分腸道菌可能產生過多的澱粉樣蛋白，加速腦部斑塊的形成。然而，補充特定的益生菌，如乳酸桿菌（Lactobacillus）和雙歧桿菌（Bifidobacterium），已被證實能有效調節腸道菌相，延緩運動功能退化，並對多巴胺神經元產生保護作用，為神經退化性疾病的預防與治療提供新的方向。",
    ],
  },
  {
    title: "腸道發炎",
    paragraphs: [
      "腸道菌群的多樣性是維持強大免疫系統的基礎。一個健康的腸道擁有豐富且多樣的微生物種類，其中好菌如雙歧桿菌和乳酸桿菌，能夠有效抑制壞菌生長，維持腸道微生態的平衡。當腸道菌相失衡時，不僅會出現疲倦、腹痛、脹氣、口臭、便秘或腹瀉交替等消化道症狀，還可能引發全身性發炎反應，進而導致異位性皮膚炎、慢性鼻竇炎等問題。",
      "腸道發炎與多種重大疾病的臨床關聯日益明確；慢性發炎不但加劇腸道與全身症狀，也可能影響免疫系統的調控與對治療的反應。透過益生菌治療（如糞便菌群移植）等方式改善腸道菌相，對緩解腸道發炎與提升免疫功能具有研究上的潛在價值。腸道菌與罹癌風險、癌症免疫治療等較專題的臨床觀察，詳見下一節。",
    ],
  },
  {
    title: "腸道菌與癌症重大疾病的臨床關聯",
    paragraphs: [
      "在癌症研究中發現，某些壞菌（如特定大腸桿菌）可能產生毒素，促進腫瘤的發生與發展，而好菌則能分解致癌物質，降低罹癌風險。此外，腸道菌群豐富度較高的癌症患者，其癌症免疫治療（如 PD-1 抑制劑）的效果也顯著優於菌群多樣性較低的患者。這表明，透過益生菌的正確使用，可以改善腸道菌相，對於緩解及預防癌症和提升免疫功能具有潛在的應用價值。",
    ],
  },
  {
    title: "代謝與慢性病",
    paragraphs: [
      "腸道菌群在人體代謝過程中扮演著不可或缺的角色，其失衡與多種代謝性疾病及慢性病的發生密切相關，包括肥胖、糖尿病、高血壓和動脈硬化。腸道菌群能夠發酵膳食纖維，產生短鏈脂肪酸（Short-Chain Fatty Acids, SCFAs），如丁酸、乙酸和丙酸。這些 SCFAs 不僅是腸道細胞的重要能量來源，還能調節食慾、改善葡萄糖代謝，並影響脂肪的積累。",
      "然而，高糖、高脂飲食可能導致腸道屏障功能受損，使腸道內的脂多醣（LPS）等細菌產物滲漏至血液中，引發「代謝性內毒素血症」（Metabolic Endotoxemia）。這種慢性低度發炎狀態會進一步導致胰島素阻抗，加速肥胖和第二型糖尿病的進程。研究發現，第二型糖尿病患者體內丁酸產生菌（如 Faecalibacterium prausnitzii）的比例通常較低。因此，透過調節腸道菌群，例如補充益生菌或益生元，有助於改善脂肪代謝，降低慢性病的風險。",
    ],
  },
  {
    title: "照顧腸道的方法",
    paragraphs: [
      "維護腸道健康是促進人體整體健康的關鍵。以下提供幾種有效的照顧腸道方法：",
    ],
    bullets: [
      "補充益生菌與益生元：尤其是直接補充含有特定菌株（如乳酸桿菌、雙歧桿菌）的原生益菌產品，例如 TCELL-1，有助於改善腸道生態。同時，攝取益生元（Prebiotics），如菊糖、果寡糖等，這些是益生菌的「食物」，能選擇性地刺激好菌生長，提升益生菌的功效。",
      "飲食調整：地中海飲食模式，富含蔬菜、水果、全穀類、豆類、堅果和橄欖油，已被證實能顯著增加腸道好菌的多樣性。相反，應避免高糖、高脂及加工食品，這些食物會促進壞菌生長，加劇腸道菌相失衡。",
      "糞便菌群移植（Fecal Microbiota Transplantation, FMT）：對於嚴重的腸道感染（如困難梭狀芽孢桿菌感染），FMT 是一種臨床上已採用的治療方法，透過將健康捐贈者的糞便菌群移植到患者腸道，快速重建健康的腸道微生態。",
    ],
  },
  {
    title: "腸道健康警示",
    paragraphs: [
      "若出現以下情況，可能暗示腸道菌相已失衡，應及早關注並採取措施：",
    ],
    bullets: [
      "經常消化不良、脹氣。",
      "排氣味道極臭或糞便有酸味。",
      "便秘與腹瀉交替發生。",
      "經常感冒，免疫力下降。",
      "經常性失眠。",
      "記憶力衰退。",
      "常有過敏症狀。",
    ],
    footnote:
      "註：腸道菌叢因人而異，出生方式（自然產/剖腹產）和飲食習慣是形成個體差異的主要因素。",
  },
]

export type FrontierRelatedLink = {
  label: string
  href: string
}

/** 四大主題文末：延伸閱讀（連結文字為中文） */
export const probioticsFrontierRelatedLinks: FrontierRelatedLink[] = [
  {
    label: "腸內菌相失調與神經疾病-台灣醫學會",
    href: "https://www.fma.org.tw/2017/bio-4.html",
  },
  {
    label: "腸道菌主宰全身健康？！ 解密神奇的腸道菌-臺大醫院醫研部",
    href: "https://www.liver.org.tw/journalView.php?cat=68&sid=955&page=2",
  },
  {
    label: "單一壞菌的迷思，看懂腸道菌群的真相-信和生醫專欄",
    href: "https://www.synomics.com.tw/health-knowledge-content.php?arg=aUJ0cDFKZG1KZUNkcWxVdHFQazI4VXpI",
  },
  {
    label:
      "Nature期刊：腸道菌多樣性，是強大免疫的基礎，打敗癌症的隱形關鍵",
    href: "https://www.nature.com/articles/s41586-025-09249-8",
  },
  {
    label: "腸道菌群、環境毒物與健康-台大公衛學院專欄",
    href: "http://www.srataiwan.org/r/journalpage?id=59",
  },
  {
    label: "便秘、憂鬱、中風…腸道菌叢失衡百病生-台大醫學院名譽教授",
    href: "https://health.udn.com/health/story/121886/6907816",
  },
  {
    label:
      "腸道不健康的15種警示！內科醫：一天一餐這樣吃修復腸道",
    href: "https://edh.tw/articles/DJlFKza",
  },
  {
    label: "益生菌對大腸癌有幫助嗎？-Bowtie 醫療資訊團隊",
    href: "https://www.bowtie.com.hk/blog/zh/%E4%BA%86%E8%A7%A3%E7%99%8C%E7%97%87/%E5%A4%A7%E8%85%B8%E7%99%8C-%E7%9B%8A%E7%94%9F%E8%8F%8C/",
  },
]

/** 參考文獻（APA 格式：作者／年份／篇名／期刊／卷期／頁碼或文章編號） */
export const probioticsFrontierReferences: string[] = [
  "Chen, C., Wang, G. Q., Li, D. D., & Zhang, F. (2025). Microbiota–gut–brain axis in neurodegenerative diseases: molecular mechanisms and therapeutic targets. Molecular biomedicine, 6(1), 64.",
  "Hur, K. Y., & Lee, M. S. (2015). Gut microbiota and metabolic disorders. Diabetes & metabolism journal, 39(3), 198.",
  "Al Bander, Z., Nitert, M. D., Mousa, A., & Naderpoor, N. (2020). The gut microbiota and inflammation: an overview. International journal of environmental research and public health, 17(20), 7618.",
  "Ghassab, F. T., Mahmoudi, F. S., Tinjani, R. T., Meibodi, A. E., Zali, M. R., & Yadegar, A. (2024). Probiotics and the microbiota-gut-brain axis in neurodegeneration: beneficial effects and mechanistic insights. Life Sciences, 350, 122748.",
  "He, M., & Shi, B. (2017). Gut microbiota as a potential target of metabolic syndrome: the role of probiotics and prebiotics. Cell & bioscience, 7(1), 54.",
  "Wang, X., Zhang, P., & Zhang, X. (2021). Probiotics regulate gut microbiota: an effective method to improve immunity. Molecules, 26(19), 6076.",
  "Zhou, J., Li, M., Chen, Q., Li, X., Chen, L., Dong, Z., ... & Chen, Q. (2022). Programmable probiotics modulate inflammation and gut microbiota for inflammatory bowel disease treatment after effective oral delivery. Nature Communications, 13(1), 3432.",
  "Lin, N. Y. T., Fukuoka, S., Koyama, S., Motooka, D., Tourlousse, D. M., Shigeno, Y., ... & Nishikawa, H. (2025). Microbiota-driven antitumour immunity mediated by dendritic cell migration. Nature, 644(8078), 1058-1068.",
]
