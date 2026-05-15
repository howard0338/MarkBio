import { SiteHeader } from "@/components/site-header"
import { siteContainer, siteCopy } from "@/lib/site-layout"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="pt-16 sm:pt-[4.5rem] md:pt-20">{children}</main>
      <footer className="mt-12 border-t border-sky-200/50 bg-white/50">
        <div className={`${siteContainer} ${siteCopy} py-6 text-xs text-brand-navy/70 sm:text-sm`}>
          <p>2026年 馬克生醫股份有限公司®</p>
          <p>地址：台北市中山區松江路101號4樓之2</p>
        </div>
      </footer>
    </div>
  )
}
