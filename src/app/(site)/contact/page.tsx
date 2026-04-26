import { PageHeading } from "@/components/sections/page-heading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "聯絡我們 | Mark Biomedical 原益菌",
  description: "聯絡原益菌團隊。",
}

export default function ContactPage() {
  return (
    <article>
      <PageHeading
        title="聯絡我們"
        description="合作、媒體與產品諮詢，歡迎留言或來信。表單與聯絡方式即將提供。"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        <p className="text-sm leading-relaxed text-brand-navy/60 sm:text-base">
          內容建置中，敬請期待。
        </p>
      </div>
    </article>
  )
}
