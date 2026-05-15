import { scienceColumns } from "@/components/science-nav-data"
import { ScienceArticleProse } from "@/components/sections/science-article-prose"
import { ScienceArticleTemplate } from "@/components/sections/science-article-template"
import { getScienceArticleBody } from "@/content/science-article-bodies"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const bySlug = Object.fromEntries(
  scienceColumns.map((c) => {
    const slug = c.href.split("/").pop()!
    return [slug, c]
  })
) as Record<string, (typeof scienceColumns)[number]>

export function generateStaticParams() {
  return scienceColumns.map((c) => ({
    slug: c.href.split("/").pop()!,
  }))
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props): Metadata {
  const col = bySlug[params.slug]
  if (!col) {
    return { title: "專欄 | Mark Biomedical" }
  }
  const body = getScienceArticleBody(params.slug)
  return {
    title: `${col.title} | 科學實證 | Mark Biomedical 原益菌`,
    description: body?.lead ?? col.subtitle,
  }
}

export default function ScienceArticlePage({ params }: Props) {
  const col = bySlug[params.slug]
  if (!col) {
    notFound()
  }
  const body = getScienceArticleBody(params.slug)
  return (
    <ScienceArticleTemplate title={col.title} subtitle={col.subtitle}>
      {body ? (
        <ScienceArticleProse body={body} />
      ) : (
        <p className="text-brand-navy/60">內容建置中，敬請期待。</p>
      )}
    </ScienceArticleTemplate>
  )
}
