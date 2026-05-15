import { FaqList } from "@/components/sections/faq-list"
import { PageHeading } from "@/components/sections/page-heading"
import { siteContainer } from "@/lib/site-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "常見問題 | Mark Biomedical 原益菌",
  description:
    "TCELL-1 原生益菌：與市售差異、耐胃酸、功效、安全性、獎項與臨床等常見疑問。",
}

export default function FaqPage() {
  return (
    <article>
      <PageHeading
        title="常見問題"
        description="TCELL-1 官方網站常見疑問整理；點擊項目即可展開說明。"
      />
      <div className={`${siteContainer} py-8 sm:py-10`}>
        <FaqList />
      </div>
    </article>
  )
}
