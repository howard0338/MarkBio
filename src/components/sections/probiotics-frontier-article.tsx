import {
  probioticsFrontierIntro,
  probioticsFrontierReferences,
  probioticsFrontierRelatedLinks,
  probioticsFrontierThemes,
} from "@/content/probiotics-frontier"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ProbioticsFrontierArticle() {
  return (
    <div className="mx-auto max-w-3xl">
      {probioticsFrontierIntro.length > 0 ? (
        <div className="mb-10 space-y-4 border-b border-sky-200/50 pb-10">
          {probioticsFrontierIntro.map((p, i) => (
            <p
              key={i}
              className="text-pretty text-sm leading-relaxed text-brand-navy/75 sm:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      ) : null}
      <ol className="space-y-0">
        {probioticsFrontierThemes.map((theme, ti) => (
          <li
            key={theme.title}
            className={cn(ti > 0 && "mt-10 border-t border-sky-200/50 pt-10")}
          >
            <section aria-labelledby={`frontier-theme-${ti}`}>
              <h2
                id={`frontier-theme-${ti}`}
                className="text-balance text-lg font-semibold tracking-[-0.02em] text-brand-navy sm:text-xl"
              >
                {ti + 1}. {theme.title}
              </h2>
              {theme.paragraphs.map((p, pi) => (
                <p
                  key={pi}
                  className="mt-4 text-pretty text-sm leading-relaxed text-brand-navy/75 sm:text-base"
                >
                  {p}
                </p>
              ))}
              {theme.bullets && theme.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-brand-navy/75 marker:text-brand-electric/80 sm:text-base">
                  {theme.bullets.map((item, bi) => (
                    <li key={`${ti}-b-${bi}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {theme.subBlocks?.map((block) => (
                <div key={block.title} className="mt-8">
                  <h3 className="text-base font-semibold text-brand-navy sm:text-lg">
                    {block.title}
                  </h3>
                  {block.intro ? (
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-brand-navy/75 sm:text-base">
                      {block.intro}
                    </p>
                  ) : null}
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-navy/75 marker:text-brand-electric/80 sm:text-base">
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {theme.footnote ? (
                <p className="mt-4 text-pretty text-sm leading-relaxed text-brand-navy/70 sm:text-base">
                  {theme.footnote}
                </p>
              ) : null}
            </section>
          </li>
        ))}
      </ol>

      <section
        className="mt-10 border-t border-sky-200/50 pt-10"
        aria-labelledby="frontier-related"
      >
        <h2
          id="frontier-related"
          className="text-balance text-lg font-semibold tracking-[-0.02em] text-brand-navy sm:text-xl"
        >
          延伸閱讀
        </h2>
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed sm:text-base">
          {probioticsFrontierRelatedLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-electric underline-offset-2 transition-colors hover:text-blue-700 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-10 border-t border-sky-200/50 pt-10"
        aria-labelledby="frontier-refs"
      >
        <h2
          id="frontier-refs"
          className="text-balance text-lg font-semibold tracking-[-0.02em] text-brand-navy sm:text-xl"
        >
          參考文獻
        </h2>
        <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-xs leading-relaxed text-brand-navy/70 sm:text-sm">
          {probioticsFrontierReferences.map((ref, i) => (
            <li key={i} className="pl-1 marker:text-brand-navy/50">
              {ref}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
