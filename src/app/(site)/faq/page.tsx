import { FaqList } from "@/components/sections/faq-list"
import { PageHeading } from "@/components/sections/page-heading"
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
        className="lg:pl-10"
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:pl-10">
        <FaqList />
      </div>
    </article>
  )
}
