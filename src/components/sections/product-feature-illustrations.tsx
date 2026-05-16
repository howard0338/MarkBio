import Image from "next/image"

import {
  productFeatureIntro,
  productFeatureItems,
} from "@/content/product-feature-illustrations"
import { siteCopy, sitePanel } from "@/lib/site-layout"
import { cn } from "@/lib/utils"

type Layout = "grid" | "vertical"

type Props = {
  layout?: Layout
  title?: string
  headingId?: string
  className?: string
}

export function ProductFeatureIllustrations({
  layout = "grid",
  title = "三大核心優勢",
  headingId = "product-features-heading",
  className,
}: Props) {
  const isVertical = layout === "vertical"

  return (
    <section
      className={cn(siteCopy, sitePanel, "bg-white/50", className)}
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="text-balance text-xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-2xl"
      >
        {title}
      </h2>
      <p className="mt-2 text-brand-navy/65">{productFeatureIntro}</p>

      <ul
        className={cn(
          isVertical
            ? "mt-8 flex flex-col gap-10 sm:mt-10 sm:gap-12"
            : "mt-6 grid grid-cols-3 gap-0.5 sm:gap-1"
        )}
      >
        {productFeatureItems.map((item) => (
          <li
            key={item.src}
            className={cn(
              "flex min-w-0 flex-col",
              isVertical
                ? "mx-auto w-full max-w-md items-center text-center"
                : "items-center text-center"
            )}
          >
            <div
              className={cn(
                "relative aspect-square w-full",
                isVertical ? "max-w-[14rem] sm:max-w-xs" : ""
              )}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes={
                  isVertical
                    ? "(min-width: 640px) 20rem, 70vw"
                    : "(min-width: 1024px) 380px, 33vw"
                }
                className="object-contain"
                unoptimized
              />
            </div>
            <h3
              className={cn(
                "font-semibold text-brand-navy",
                isVertical
                  ? "mt-4 text-base sm:mt-5 sm:text-lg"
                  : "mt-2 text-sm sm:mt-3 sm:text-base md:text-lg"
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                "text-brand-navy/75",
                isVertical
                  ? "mt-2 text-sm sm:text-base"
                  : "mt-1.5 text-xs sm:mt-2 sm:text-sm md:text-base"
              )}
            >
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
