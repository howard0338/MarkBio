import { HeroSection } from "@/components/sections/hero-section"
import { HeroBridgeSection } from "@/components/sections/hero-bridge"
import { HomeHighlightsSection } from "@/components/sections/home-highlights"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroBridgeSection />
      <HomeHighlightsSection />
    </>
  )
}
