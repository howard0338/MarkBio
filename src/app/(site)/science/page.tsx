import { PageHeading } from "@/components/sections/page-heading"
import { ScienceColumnNavTargets } from "@/components/science-section-anchors"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "科學實證 | Mark Biomedical 原益菌",
  description: "科學實證專欄與產學內文入口。",
}

export default function ScienceIndexPage() {
  return (
    <>
      <PageHeading
        title="科學實證"
        description="各主題內文持續更新，點擊專欄以進入獨立頁面閱讀。"
      />
      <ScienceColumnNavTargets />
    </>
  )
}
