import { PageHeading } from "@/components/sections/page-heading"
import { ScienceArticleProse } from "@/components/sections/science-article-prose"
import { getTcellAchievementsOverviewBody } from "@/content/science-article-bodies"
import { siteContainer, siteSection } from "@/lib/site-layout"
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
      <section className={siteSection}>
        <div className={`${siteContainer} py-10 sm:py-12`}>
          <ScienceArticleProse body={body} />
        </div>
      </section>
    </>
  )
}
