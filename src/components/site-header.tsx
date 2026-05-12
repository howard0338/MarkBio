"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/", label: "首頁" },
  { href: "/probiotics-frontier", label: "腸道菌醫學報告" },
  { href: "/science/awards", label: "國家新創奬" },
  { href: "/founder", label: "創辦人" },
  { href: "/product", label: "產品" },
  { href: "/science", label: "科學實證" },
  { href: "/faq", label: "常見問題" },
] as const

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinkClass =
    "rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-[-0.01em] text-brand-navy/60 transition-colors hover:bg-sky-200/30 hover:text-brand-navy sm:px-3.5 lg:px-4"

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center"
    >
      <div
        className={cn(
          "pointer-events-auto flex w-full min-h-12 items-center justify-center px-0 py-3 transition-colors duration-200 sm:min-h-14 sm:py-4",
          isScrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="flex min-h-12 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:min-h-14 sm:gap-4 sm:px-6 md:min-h-[3.5rem] md:px-8 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 max-w-[min(100%,20rem)] flex-shrink items-center leading-none sm:max-w-2xl"
          >
            {/*
            白底 LOGO 權宜：mix-blend-multiply 讓淺色底與 #F0F7FF 融合。透明底 PNG 可移除此屬性。 */}
            <span className="inline-block isolate [contain:paint]">
              <Image
                src="/images/logo.png"
                alt="Mark Biomedical 原益菌"
                width={360}
                height={100}
                className="h-10 w-auto object-contain object-left mix-blend-multiply sm:h-11 md:h-13"
                priority
                unoptimized
              />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="主要導航"
          >
            {mainNavItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 sm:flex sm:pr-0.5">
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className:
                  "h-7 text-xs text-brand-navy/70 hover:bg-sky-200/30 hover:text-brand-navy md:h-8",
              })}
            >
              聯絡我們
            </Link>
            <Link
              href="/product"
              className={cn(
                buttonVariants({ size: "sm", className: "h-7 border-0 md:h-8" }),
                "btn-electric-glow"
              )}
            >
              預約諮詢
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <Link
              href="/product"
              className={cn(
                buttonVariants({ size: "sm", className: "h-8 text-xs" }),
                "btn-electric-glow"
              )}
            >
              預約
            </Link>
            <Button
              variant="ghost"
              size="icon-sm"
              className="shrink-0 text-brand-navy"
              onClick={() => setMobileOpen(true)}
              aria-label="開啟選單"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[min(100%,20rem)] gap-0 border-l border-sky-200/60 bg-sky-50/85 p-0 backdrop-blur-xl"
        >
          <SheetHeader className="border-b border-sky-200/60 p-4 text-left">
            <SheetTitle className="font-semibold text-brand-navy">導航</SheetTitle>
          </SheetHeader>
          <nav
            className="flex max-h-[min(80vh,calc(100dvh-5rem))] flex-col overflow-y-auto p-2"
            aria-label="行動版選單"
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-sky-200/30"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border p-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={buttonVariants({ variant: "secondary", className: "w-full" })}
              >
                聯絡我們
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </motion.header>
  )
}
