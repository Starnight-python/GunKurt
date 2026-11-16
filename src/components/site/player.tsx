'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play, Square } from 'lucide-react'
import Reveal from './reveal'

type Track = {
  ym: number
  title: string
  kind: 'сингл' | 'альбом'
  year?: string
  feat?: string
  note?: string
  cover: string
}

const TRACKS: Track[] = [
  {
    ym: 44699033,
    title: 'автопилот',
    kind: 'сингл',
    year: '2026',
    feat: 'feat. nedonebo',
    cover: '/images/cover-autopilot.png',
  },
  {
    ym: 37199643,
    title: 'когда мы перестали быть «мы»',
    kind: 'альбом',
    year: '2025',
    note: 'тут живут «мыльные люди» и «i don\'t feel»',
    cover: '/images/cover-collection.png',
  },
  {
    ym: 42210018,
    title: 'взрослые проблемы',
    kind: 'сингл',
    year: '2026',
    cover: '/images/abyss.png',
  },
  {
    ym: 33943611,
    title: 'альтуха',
    kind: 'сингл',
    cover: '/images/hero-whale.png',
  },
]

function TrackCard({
  t,
  active,
  onToggle,
  index,
}: {
  t: Track
  active: boolean
  onToggle: (ym: number) => void
  index: number
}) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article
        className={`card-glass h-full overflow-hidden rounded-3xl transition-all duration-300 ${
          active
            ? 'glow-ring border-cyan-200/30 shadow-[0_20px_70px_-25px_rgba(34,211,238,.45)]'
            : ''
        }`}
      >
        {!active ? (
          <button
            type="button"
            onClick={() => onToggle(t.ym)}
            aria-label={`слушать ${t.title}`}
            className="group flex w-full items-center gap-5 p-5 text-left transition-colors hover:bg-cyan-300/5"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl md:h-24 md:w-24">
              <Image src={t.cover} alt="" fill sizes="96px" className="object-cover" />
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-[#04070d]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Play className="h-7 w-7 fill-cyan-300 text-cyan-300" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/70">
                <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-2 py-0.5 text-cyan-100/90">
                  {t.kind}
                </span>
                {t.year && <span>{t.year}</span>}
                {t.feat && <span className="normal-case tracking-normal">{t.feat}</span>}
              </div>
              <h3 className="mt-2 truncate font-display text-base font-bold text-slate-50 md:text-lg">
                {t.title}
              </h3>
              {t.note && (
                <p className="mt-1 truncate text-xs text-slate-400/70">{t.note}</p>
              )}
            </div>
            <span className="hidden shrink-0 items-center gap-2 rounded-full border border-cyan-200/25 px-4 py-2 font-display text-xs text-cyan-100 transition group-hover:border-cyan-200/60 group-hover:bg-cyan-300/10 sm:flex">
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
              слушать
            </span>
          </button>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-4 p-4 pb-3 md:px-5">
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-bold text-cyan-100">
                  {t.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-400/70">
                  официальный плеер · яндекс музыка
                </p>
              </div>
              <button
                type="button"
                onClick={() => onToggle(t.ym)}
                aria-label={`остановить ${t.title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-red-200/90 transition hover:bg-red-400/20"
              >
                <Square className="h-3.5 w-3.5 fill-current" aria-hidden />
              </button>
            </div>
            <iframe
              src={`https://music.yandex.ru/iframe/#album/${t.ym}`}
              title={`плеер: ${t.title}`}
              height={t.kind === 'альбом' ? 480 : 200}
              allow="autoplay; encrypted-media; clipboard-write; fullscreen"
              allowFullScreen
              className="w-full border-0"
            />
          </div>
        )}
      </article>
    </Reveal>
  )
}

export default function Player() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (ym: number) => {
    setActive((cur) => (cur === ym ? null : ym))
  }

  return (
    <section
      id="player"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32"
    >
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
          прослушка
        </p>
        <h2 className="glow-text mt-4 font-display text-4xl font-extrabold text-slate-50 md:text-5xl">
          послушай прямо здесь
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-300/80">
          нажми на релиз — откроется официальный плеер яндекс музыки с отрывками.
          без переходов и лишних вкладок: ныряй и слушай 🐋
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TRACKS.map((t, i) => (
          <TrackCard key={t.ym} t={t} active={active === t.ym} onToggle={toggle} index={i} />
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href="https://music.yandex.ru/artist/17309017"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cyan-200/25 px-6 py-3 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
          >
            вся дискография в яндекс музыке
          </a>
          <p className="text-[11px] text-slate-500/80">
            без подписки плеер играет отрывки · с плюсом — целиком · плеер доступен
            там, где работает яндекс музыка
          </p>
        </div>
      </Reveal>
    </section>
  )
}
