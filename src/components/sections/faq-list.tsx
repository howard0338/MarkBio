import { faqItems } from "@/content/faq-items"
import { siteCopy } from "@/lib/site-layout"
import { cn } from "@/lib/utils"

export function FaqList() {
  return (
    <div className={cn(siteCopy, "w-full space-y-3")}>
      {faqItems.map((item) => (
        <details
          key={item.id}
          className="group overflow-hidden rounded-xl border border-sky-200/50 bg-white/50 shadow-sm ring-1 ring-sky-200/20 backdrop-blur-sm transition-colors open:bg-white/80"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 py-3.5 text-left sm:py-4 [&::-webkit-details-marker]:hidden">
            <span className="min-w-0 text-sm font-semibold leading-snug text-brand-navy sm:text-base">
              <span className="text-brand-electric/90">Q</span>
              {item.id.replace("q", "")}
              {". "}
              {item.question}
            </span>
            <span
              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-sky-200/60 bg-sky-50/80 text-xs text-brand-navy/50 transition group-open:rotate-45 group-open:text-brand-electric"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="border-t border-sky-200/40 pb-4 pt-1">
            {item.lead ? <p>{item.lead}</p> : null}
            {item.paragraphs?.map((p, i) => (
              <p key={i} className="mt-3 first:mt-0">
                {p}
              </p>
            ))}
            {item.points && item.points.length > 0 ? (
              <ul className="mt-3 list-none space-y-3 pl-0">
                {item.points.map((pt) => (
                  <li
                    key={pt.title}
                    className="border-l-2 border-brand-electric/35 pl-3.5"
                  >
                    <p className="text-sm font-medium text-brand-navy sm:text-base">
                      {pt.title}
                    </p>
                    <p className="mt-1 text-brand-navy/70">{pt.text}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  )
}
