import { siteContainer, siteCopy } from "@/lib/site-layout"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  description?: string
  className?: string
}

export function PageHeading({ title, description, className }: Props) {
  return (
    <header
      className={cn("border-b border-sky-200/40 bg-sky-50/30", className)}
    >
      <div className={cn(siteContainer, "py-10 sm:py-12")}>
        <h1 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className={cn(siteCopy, "mt-2 text-brand-navy/60")}>{description}</p>
        ) : null}
      </div>
    </header>
  )
}
