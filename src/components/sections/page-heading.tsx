import { cn } from "@/lib/utils"

type Props = {
  title: string
  description?: string
  className?: string
}

export function PageHeading({ title, description, className }: Props) {
  return (
    <header
      className={cn("border-b border-sky-200/40 bg-sky-50/30 px-4 py-10 sm:px-6 sm:py-12 md:px-8", className)}
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-brand-navy/60 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}
