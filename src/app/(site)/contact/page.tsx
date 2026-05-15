import { PageHeading } from "@/components/sections/page-heading"
import { siteContainer, siteCopy } from "@/lib/site-layout"
import { cn } from "@/lib/utils"
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
      <div className={cn(siteContainer, siteCopy, "py-10 sm:py-12")}>
        <p className="text-brand-navy/60">內容建置中，敬請期待。</p>
      </div>
    </article>
  )
}
