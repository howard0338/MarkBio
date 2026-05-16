import { HeroSection } from "@/components/sections/hero-section"
import { HeroBridgeSection } from "@/components/sections/hero-bridge"
import { HomeHighlightsSection } from "@/components/sections/home-highlights"
import { ProductFeatureIllustrations } from "@/components/sections/product-feature-illustrations"
import { siteContainer } from "@/lib/site-layout"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroBridgeSection />
      <HomeHighlightsSection />
      <section className="border-t border-sky-200/40 bg-sky-50/25">
        <div className={`${siteContainer} py-10 sm:py-12 md:py-14`}>
          <ProductFeatureIllustrations
            layout="vertical"
            headingId="home-features-heading"
            title="三大核心優勢（品牌卡通形象：馬克熊來為您解說）"
          />
        </div>
      </section>
    </>
  )
}
