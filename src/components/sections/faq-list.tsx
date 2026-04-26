import { faqItems } from "@/content/faq-items"

export function FaqList() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqItems.map((item) => (
        <details
          key={item.id}
          className="group overflow-hidden rounded-xl border border-sky-200/50 bg-white/50 shadow-sm ring-1 ring-sky-200/20 backdrop-blur-sm transition-colors open:bg-white/80"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
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
          <div className="border-t border-sky-200/40 px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
            {item.lead ? (
              <p className="text-sm leading-relaxed text-brand-navy/75 sm:text-base">
                {item.lead}
              </p>
            ) : null}
            {item.paragraphs?.map((p, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-relaxed text-brand-navy/75 first:mt-0 sm:text-base"
              >
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
                    <p className="mt-1 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
                      {pt.text}
                    </p>
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
