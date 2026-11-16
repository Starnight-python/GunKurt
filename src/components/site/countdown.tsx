'use client'

import { useEffect, useState } from 'react'

const UNITS = [
  { key: 'd', label: 'дней' },
  { key: 'h', label: 'часов' },
  { key: 'm', label: 'минут' },
  { key: 's', label: 'секунд' },
] as const

const diff = (t: number) => {
  const ms = Math.max(0, t - Date.now())
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
    done: t - Date.now() <= 0,
  }
}

type Left = ReturnType<typeof diff>

export default function Countdown({
  target,
  className = '',
}: {
  target: string
  className?: string
}) {
  const [left, setLeft] = useState<Left | null>(null)

  useEffect(() => {
    const t = new Date(target).getTime()
    const tick = () => setLeft(diff(t))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  if (left?.done) {
    return (
      <div className={`card-glass glow-ring rounded-3xl p-7 text-center ${className}`}>
        <p className="glow-text font-display text-xl font-bold text-cyan-100">
          релиз уже здесь 💔
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-300/80">
          «АЕ» должен быть на площадках — свежие ссылки живут в тгк
        </p>
        <a
          href="https://t.me/gunkurtt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,.45)]"
        >
          открыть тгк 🐋
        </a>
      </div>
    )
  }

  return (
    <div
      role="timer"
      aria-label="обратный отсчёт до релиза"
      className={`grid grid-cols-4 gap-2.5 sm:gap-4 ${className}`}
    >
      {UNITS.map((u) => (
        <div key={u.key} className="card-glass rounded-2xl px-2 py-3.5 text-center sm:px-4 sm:py-5">
          <div className="glow-text font-display text-2xl font-extrabold tabular-nums text-cyan-100 sm:text-4xl md:text-5xl">
            {left ? String(left[u.key]).padStart(2, '0') : '··'}
          </div>
          <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400/70 sm:text-[11px]">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  )
}
