import { PageHeading } from "@/components/sections/page-heading"
import { ProbioticsFrontierArticle } from "@/components/sections/probiotics-frontier-article"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "腸道菌醫學 | Mark Biomedical 原益菌",
  description:
    "腦腸軸與神經退化、腸道發炎、代謝與慢性病、益生菌照顧方式等腸道菌醫學主題。",
}

export default function ProbioticsFrontierPage() {
  return (
    <>
      <PageHeading
        title="腸道菌醫學"
        description="從腦腸軸、免疫與代謝到日常照護。"
      />
      <section className="border-t border-sky-200/30 bg-sky-50/20 px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        <ProbioticsFrontierArticle />
      </section>
    </>
  )
}
