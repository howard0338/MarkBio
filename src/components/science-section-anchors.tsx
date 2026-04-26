import Link from "next/link"
import { scienceColumns } from "@/components/science-nav-data"

/** 科學實證專欄導覽：各主題獨立頁面 */
export function ScienceColumnNavTargets() {
  return (
    <section
      className="border-t border-sky-200/30 bg-sky-50/20"
      aria-label="科學實證專欄"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <h2 className="sr-only">專欄列表</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scienceColumns.map((col, i) => (
            <li key={col.id}>
              <Link
                href={col.href}
                className="block rounded-xl border border-sky-200/50 bg-white/50 px-4 py-3.5 text-left shadow-sm ring-1 ring-sky-200/20 backdrop-blur-sm transition-all hover:border-brand-electric/40 hover:bg-white/80 hover:shadow-md"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-widest text-brand-navy/40">
                  專欄 {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-brand-navy sm:text-base">
                  {col.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-brand-navy/55">
                  {col.subtitle}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
