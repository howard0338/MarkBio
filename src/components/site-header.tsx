"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { scienceColumns } from "@/components/science-nav-data"
import { cn } from "@/lib/utils"

const otherNav = [
  { href: "/founder", label: "創辦人" },
  { href: "/product", label: "產品" },
  { href: "/faq", label: "常見問題" },
] as const

/** 大選單三欄分組（Photoroom 式欄位標題 + 兩則連結） */
const scienceMegaGroups = [
  {
    label: "產品與健康",
    items: [scienceColumns[0]!, scienceColumns[1]!],
  },
  {
    label: "實證與聲譽",
    items: [scienceColumns[2]!, scienceColumns[3]!],
  },
  {
    label: "臨床與選擇",
    items: [scienceColumns[4]!, scienceColumns[5]!],
  },
] as const

const HOVER_CLOSE_MS = 380

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scienceOpen, setScienceOpen] = React.useState(false)
  const [scienceMega, setScienceMega] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [megaTop, setMegaTop] = React.useState(0)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const topBarRef = React.useRef<HTMLDivElement | null>(null)

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const openMega = React.useCallback(() => {
    clearCloseTimer()
    setScienceMega(true)
  }, [clearCloseTimer])

  const scheduleCloseMega = React.useCallback(() => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => {
      setScienceMega(false)
    }, HOVER_CLOSE_MS)
  }, [clearCloseTimer])

  const updateMegaTop = React.useCallback(() => {
    const el = topBarRef.current
    if (!el) return
    setMegaTop(el.getBoundingClientRect().bottom)
  }, [])

  React.useLayoutEffect(() => {
    updateMegaTop()
    const el = topBarRef.current
    if (!el) return
    const ro = new ResizeObserver(() => updateMegaTop())
    ro.observe(el)
    window.addEventListener("scroll", updateMegaTop, { passive: true })
    window.addEventListener("resize", updateMegaTop)
    return () => {
      ro.disconnect()
      window.removeEventListener("scroll", updateMegaTop)
      window.removeEventListener("resize", updateMegaTop)
    }
  }, [updateMegaTop])

  React.useEffect(() => {
    if (!scienceMega) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearCloseTimer()
        setScienceMega(false)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [scienceMega, clearCloseTimer])

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center"
    >
      <div
        ref={topBarRef}
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
                className="h-12 w-auto object-contain object-left mix-blend-multiply sm:h-14 md:h-16"
                priority
                unoptimized
              />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="主要導航"
          >
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-[-0.01em] text-brand-navy/60 transition-colors hover:bg-sky-200/30 hover:text-brand-navy sm:px-3.5 lg:px-4"
            >
              首頁
            </Link>
            {otherNav.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-[-0.01em] text-brand-navy/60 transition-colors hover:bg-sky-200/30 hover:text-brand-navy sm:px-3.5 lg:px-4"
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <Link
                href="/science"
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
                onFocus={openMega}
                className={cn(
                  "flex items-center gap-0.5 rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-[-0.01em] outline-none transition-colors sm:px-3.5 lg:px-4",
                  scienceMega
                    ? "bg-sky-200/50 text-brand-navy"
                    : "text-brand-navy/60 hover:bg-sky-200/30 hover:text-brand-navy"
                )}
                aria-expanded={scienceMega}
                aria-haspopup="true"
              >
                科學實證
                <ChevronDown
                  className={cn(
                    "size-3.5 opacity-60 transition-transform duration-200",
                    scienceMega && "rotate-180"
                  )}
                  aria-hidden
                />
              </Link>
            </div>
            <Link
              href={otherNav[2]!.href}
              className="rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-[-0.01em] text-brand-navy/60 transition-colors hover:bg-sky-200/30 hover:text-brand-navy sm:px-3.5 lg:px-4"
            >
              {otherNav[2]!.label}
            </Link>
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

      {/* 背景微暗（Photoroom 感，不攔截點擊下層） */}
      <AnimatePresence>
        {scienceMega && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none fixed inset-0 z-40 bg-slate-900/[0.06]"
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* 全寬 Mega menu：hover 延遲關閉，與觸發區共用 enter/leave 邏輯 */}
      <AnimatePresence>
        {scienceMega && (
          <motion.div
            key="science-mega"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: megaTop }}
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
            className="pointer-events-auto fixed left-0 right-0 z-50 max-h-[min(70vh,32rem)] overflow-y-auto border-b border-sky-200/50 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            role="navigation"
            aria-label="科學實證專欄"
          >
            <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:px-10">
              <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
                {scienceMegaGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brand-navy/40">
                      {group.label}
                    </p>
                    <ul className="mt-4 flex flex-col gap-1">
                      {group.items.map((col) => (
                        <li key={col.id}>
                          <Link
                            href={col.href}
                            className="block rounded-lg px-2.5 py-2.5 transition-colors hover:bg-sky-100/60"
                          >
                            <span className="text-sm font-medium text-brand-navy">
                              {col.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-brand-navy/50">
                              {col.subtitle}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-sky-200/50 pt-4">
                <Link
                  href="/science"
                  className="text-sm font-medium text-brand-electric transition-colors hover:text-blue-600"
                >
                  科學實證總覽 →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-sky-200/30"
            >
              首頁
            </Link>
            {otherNav.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-sky-200/30"
              >
                {item.label}
              </Link>
            ))}
            <div className="rounded-lg">
              <button
                type="button"
                onClick={() => setScienceOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-brand-navy hover:bg-sky-200/30"
                aria-expanded={scienceOpen}
              >
                科學實證
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 opacity-60 transition-transform",
                    scienceOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              {scienceOpen && (
                <ul className="ml-1 border-l border-sky-200/60 pl-2">
                  {scienceColumns.map((col) => (
                    <li key={col.id}>
                      <Link
                        href={col.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-2.5 py-2 text-left hover:bg-sky-200/30"
                      >
                        <span className="text-sm font-medium text-brand-navy">
                          {col.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-brand-navy/55">
                          {col.subtitle}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="px-2.5 py-1.5">
                    <Link
                      href="/science"
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-brand-electric"
                    >
                      科學實證總覽
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              href={otherNav[2]!.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-sky-200/30"
            >
              {otherNav[2]!.label}
            </Link>
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
