import { PageHeading } from "@/components/sections/page-heading"

type Props = {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function ScienceArticleTemplate({ title, subtitle, children }: Props) {
  return (
    <article>
      <PageHeading title={title} description={subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        {children ?? (
          <p className="text-sm leading-relaxed text-brand-navy/60 sm:text-base">
            內容建置中，敬請期待。
          </p>
        )}
      </div>
    </article>
  )
}
