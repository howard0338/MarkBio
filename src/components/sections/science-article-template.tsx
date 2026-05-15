import { PageHeading } from "@/components/sections/page-heading"
import { siteContainer, siteCopy } from "@/lib/site-layout"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function ScienceArticleTemplate({ title, subtitle, children }: Props) {
  return (
    <article>
      <PageHeading title={title} description={subtitle} />
      <div className={cn(siteContainer, siteCopy, "py-10 sm:py-12")}>
        {children ?? (
          <p className="text-brand-navy/60">內容建置中，敬請期待。</p>
        )}
      </div>
    </article>
  )
}
