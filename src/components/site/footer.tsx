const NAV = [
  { href: '#about', label: 'глубина' },
  { href: '#music', label: 'музыка' },
  { href: '#links', label: 'связь' },
]

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-cyan-200/10 bg-[#03070d]/90 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 text-center">
        {/* whale + sonar */}
        <div aria-hidden className="relative flex items-center justify-center">
          <span className="animate-sonar absolute h-24 w-24 rounded-full border border-cyan-200/15" />
          <span
            className="animate-sonar absolute h-24 w-24 rounded-full border border-cyan-200/10"
            style={{ animationDelay: '1.5s' }}
          />
          <span className="relative text-4xl drop-shadow-[0_0_16px_rgba(103,232,249,.5)]">🐋</span>
        </div>

        <p className="font-display text-sm font-semibold text-slate-100">
          ружьё курта <span className="text-slate-500/70">·</span>{' '}
          <span className="font-normal text-slate-400/80">ставрополь</span>
        </p>

        <nav aria-label="навигация в подвале" className="flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs text-slate-400/70 transition hover:text-cyan-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <p className="max-w-md text-sm leading-relaxed text-slate-400/70">
          погружайся в тгк — там черновики, анонсы и обнимашки 🫂
        </p>

        <div className="flex flex-col items-center gap-2.5">
          <p className="text-xs text-slate-500/90">
            made by{' '}
            <a
              href="https://t.me/starnight_official"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-200/90 underline decoration-cyan-200/30 underline-offset-4 transition hover:text-cyan-100 hover:decoration-cyan-200/80 hover:drop-shadow-[0_0_10px_rgba(103,232,249,.65)]"
            >
              starnight
            </a>{' '}
            for gunskurt 🖤
          </p>
          <p className="text-[10px] text-slate-600">
            © 2026 ружьё курта · https · csp · без трекеров 🔒
          </p>
        </div>
      </div>
    </footer>
  )
}
