import { FounderSection } from "@/components/sections/founder-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "創辦人 | Mark Biomedical 原益菌",
  description: "原益菌創辦理念與團隊願景。",
}

export default function FounderPage() {
  return <FounderSection />
}
