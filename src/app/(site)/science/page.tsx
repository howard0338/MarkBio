import { PageHeading } from "@/components/sections/page-heading"
import { ScienceArticleProse } from "@/components/sections/science-article-prose"
import { getTcellAchievementsOverviewBody } from "@/content/science-article-bodies"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "科學實證 | Mark Biomedical 原益菌",
  description:
    "TCELL-1 科學實證總覽：本土菌株、實驗數據、認證獎項與臨床脈絡。",
}

export default function ScienceIndexPage() {
  const body = getTcellAchievementsOverviewBody()

  return (
    <>
      <PageHeading
        title="科學實證"
        description="TCELL-1 成就與科學脈絡總覽。"
      />
      <section className="border-t border-sky-200/30 bg-sky-50/20 px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        <ScienceArticleProse body={body} />
      </section>
    </>
  )
}
