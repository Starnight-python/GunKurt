'use client'

import { useEffect, useState } from 'react'
import { Send } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'глубина' },
  { href: '#music', label: 'музыка' },
  { href: '#links', label: 'связь' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-slate-100"
        >
          <span
            aria-hidden
            className="text-xl transition-transform duration-500 group-hover:rotate-12"
          >
            🐋
          </span>
          ружьё курта
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300/80 transition hover:text-cyan-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://t.me/gunkurtt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-100 transition duration-300 hover:bg-cyan-300/15 hover:shadow-[0_0_24px_rgba(103,232,249,.25)]"
        >
          <Send className="h-4 w-4" aria-hidden />
          тгк
        </a>
      </nav>
    </header>
  )
}
