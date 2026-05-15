"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const MAIN_IMAGE = {
  src: "/images/產品.png",
  alt: "TCELL-1 原益菌產品",
} as const

const PRODUCT_THUMBNAILS = [
  { src: "/images/產品副圖/活存菌.png", alt: "活存菌" },
  { src: "/images/產品副圖/抗菌力.png", alt: "抗菌力" },
  { src: "/images/產品副圖/耐受力.png", alt: "耐受力" },
  { src: "/images/產品副圖/認證書.jpg", alt: "認證書" },
] as const

const GALLERY_THUMBNAILS = [MAIN_IMAGE, ...PRODUCT_THUMBNAILS] as const

type GalleryImage = (typeof GALLERY_THUMBNAILS)[number]

export function ProductImageGallery() {
  const [activeImage, setActiveImage] = React.useState<GalleryImage>(MAIN_IMAGE)

  const isMainImage = activeImage.src === MAIN_IMAGE.src

  React.useEffect(() => {
    if (isMainImage) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(MAIN_IMAGE)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMainImage])

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[22rem]">
      <div className="overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/5] w-full">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={isMainImage ? MAIN_IMAGE.alt : "產品圖片"}
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-contain transition-opacity duration-200"
            unoptimized
            priority={isMainImage}
          />
        </div>
      </div>

      <ul
        className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2"
        aria-label="產品圖片縮圖"
      >
        {GALLERY_THUMBNAILS.map((thumb) => {
          const isActive = activeImage.src === thumb.src
          const isMainThumb = thumb.src === MAIN_IMAGE.src

          return (
            <li key={thumb.src}>
              <button
                type="button"
                onClick={() => setActiveImage(thumb)}
                className={cn(
                  "group relative aspect-square w-full overflow-hidden rounded-lg border bg-white/80 p-0.5 shadow-sm transition sm:p-1",
                  isActive
                    ? "border-brand-electric ring-2 ring-brand-electric/30"
                    : "border-sky-200/70 hover:border-brand-electric/50 hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric/60"
                )}
                aria-label={isMainThumb ? "產品主圖" : "切換預覽"}
                aria-pressed={isActive}
              >
                <Image
                  src={thumb.src}
                  alt=""
                  fill
                  sizes="4rem"
                  className="object-contain p-0.5 transition group-hover:scale-[1.02]"
                  unoptimized
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
