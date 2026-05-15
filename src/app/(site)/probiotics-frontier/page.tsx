import { PageHeading } from "@/components/sections/page-heading"
import { ProbioticsFrontierArticle } from "@/components/sections/probiotics-frontier-article"
import { siteContainer, siteSection } from "@/lib/site-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "腸道菌醫學 | Mark Biomedical 原益菌",
  description:
    "腦腸軸與神經退化、腸道發炎、腸道菌與癌症、代謝與慢性病、益生菌照顧方式與腸道健康警示等腸道菌醫學主題。",
}

export default function ProbioticsFrontierPage() {
  return (
    <>
      <PageHeading
        title="腸道菌醫學"
        description="從腦腸軸、免疫與代謝到日常照護。"
      />
      <section className={siteSection}>
        <div className={`${siteContainer} py-10 sm:py-12`}>
          <ProbioticsFrontierArticle />
        </div>
      </section>
    </>
  )
}
