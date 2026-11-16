'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Send, X } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'главная' },
  { href: '/release', label: 'релиз', soon: true },
  { href: '/music', label: 'музыка' },
  { href: '/about', label: 'о нём' },
  { href: '/links', label: 'связь' },
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-cyan-200/10 bg-[#04070d]/70 py-3 backdrop-blur-xl'
          : 'py-5'
      }`}
    >
      <nav
        aria-label="основная навигация"
        className="mx-auto flex max-w-6xl items-center justify-between px-5"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-slate-100"
        >
          <span
            aria-hidden
            className="text-xl transition-transform duration-500 group-hover:rotate-12"
          >
            🐋
          </span>
          ружьё курта
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-1.5 text-sm transition ${
                  active
                    ? 'text-cyan-200 drop-shadow-[0_0_10px_rgba(103,232,249,.5)]'
                    : 'text-slate-300/80 hover:text-cyan-200'
                }`}
              >
                {l.soon && (
                  <span
                    aria-hidden
                    className="animate-blink h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)]"
                  />
                )}
                {l.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://t.me/gunkurtt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-100 transition duration-300 hover:bg-cyan-300/15 hover:shadow-[0_0_24px_rgba(103,232,249,.25)]"
          >
            <Send className="h-4 w-4" aria-hidden />
            тгк
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'закрыть меню' : 'открыть меню'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/5 text-cyan-100 transition duration-300 hover:bg-cyan-300/15 md:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-3xl border border-cyan-200/15 bg-[#04070d]/95 p-2.5 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 rounded-2xl px-4 py-3 font-display text-sm transition ${
                  active ? 'bg-cyan-300/10 text-cyan-200' : 'text-slate-200/85 hover:bg-cyan-300/5'
                }`}
              >
                {l.soon && (
                  <span
                    aria-hidden
                    className="animate-blink h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)]"
                  />
                )}
                {l.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
