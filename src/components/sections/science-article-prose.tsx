import type { ScienceArticleBody } from "@/content/science-article-bodies"
import { siteCopy } from "@/lib/site-layout"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = {
  body: ScienceArticleBody
}

export function ScienceArticleProse({ body }: Props) {
  const hasLead = body.lead.trim().length > 0

  return (
    <div className={cn(siteCopy, "w-full")}>
      {hasLead ? (
        <p className="text-brand-navy/80">{body.lead}</p>
      ) : null}

      {body.sections.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className={cn(
            index === 0
              ? hasLead
                ? "mt-8"
                : ""
              : "mt-10 border-t border-sky-200/50 pt-10"
          )}
          aria-labelledby={`article-section-${index}`}
        >
          <h2
            id={`article-section-${index}`}
            className="text-balance text-lg font-semibold tracking-[-0.02em] text-brand-navy sm:text-xl"
          >
            {section.title}
          </h2>
          {section.paragraphs.map((p, pi) => (
            <p key={pi} className="mt-4 text-brand-navy/75">
              {p}
            </p>
          ))}
          {section.listItems && section.listItems.length > 0 ? (
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-brand-navy/75 marker:text-brand-electric/80">
              {section.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.links && section.links.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-electric underline-offset-2 transition-colors hover:text-blue-700 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {section.table ? (
            <div className="mt-5 space-y-2">
              {section.table.caption ? (
                <p className="text-xs font-medium text-brand-navy/55 sm:text-sm">
                  {section.table.caption}
                </p>
              ) : null}
              <div className="overflow-x-auto rounded-xl border border-sky-200/50 bg-white/40 shadow-sm ring-1 ring-sky-200/20">
                <table className="w-full min-w-[min(100%,32rem)] text-left text-sm text-brand-navy/85">
                  <thead>
                    <tr className="border-b border-sky-200/50 bg-sky-100/40">
                      {section.table.headers.map((h, hi) => (
                        <th
                          key={hi}
                          className="px-3 py-2.5 font-semibold text-brand-navy first:pl-4 last:pr-4 sm:px-4 sm:py-3"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="border-b border-sky-200/30 last:border-0"
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-3 py-2.5 align-top first:pl-4 last:pr-4 sm:px-4 sm:py-3"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  )
}
