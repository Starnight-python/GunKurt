'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play, Square } from 'lucide-react'

const ALBUM_ID = 45073324

export default function AePlayer({ className = '' }: { className?: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={`card-glass glow-ring overflow-hidden rounded-3xl ${className}`}>
        <div className="flex items-center justify-between gap-4 p-4 pb-3 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/ae.png" alt="" fill sizes="44px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold text-cyan-100">
                «АЕ» — ружьё курта
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400/70">
                официальный плеер · яндекс музыка
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPlaying(false)}
            aria-label="остановить плеер"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-red-200/90 transition hover:bg-red-400/20"
          >
            <Square className="h-3.5 w-3.5 fill-current" aria-hidden />
          </button>
        </div>
        <iframe
          src={`https://music.yandex.ru/iframe/#album/${ALBUM_ID}`}
          title="плеер: «АЕ»"
          height={200}
          allow="autoplay; encrypted-media; clipboard-write; fullscreen"
          allowFullScreen
          className="w-full border-0"
        />
      </div>
    )
  }

  return (
    <div className={`card-glass glow-ring overflow-hidden rounded-3xl ${className}`}>
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label="слушать «АЕ» прямо на сайте"
        className="group flex w-full items-center gap-5 p-5 text-left transition-colors hover:bg-cyan-300/5 md:p-6"
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl md:h-24 md:w-24">
          <Image
            src="/images/ae.png"
            alt="обложка трека «АЕ»"
            fill
            sizes="96px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-[#04070d]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Play className="h-8 w-8 fill-cyan-300 text-cyan-300" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-bold text-slate-50 md:text-xl">
            «АЕ» — ружьё курта
          </h2>
          <p className="mt-1 text-xs text-slate-400/70 md:text-sm">
            новый трек · нажми play — плеер яндекс музыки откроется прямо здесь
          </p>
        </div>
        <span className="hidden shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 font-display text-xs font-bold text-[#04121c] transition-all duration-300 group-hover:bg-cyan-200 group-hover:shadow-[0_0_30px_rgba(103,232,249,.45)] sm:flex">
          <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          слушать
        </span>
      </button>
    </div>
  )
}
