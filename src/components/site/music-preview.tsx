import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './reveal'

export default function MusicPreview() {
  return (
    <section id="music" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
          релизы
        </p>
        <h2 className="glow-text mt-4 font-display text-4xl font-extrabold text-slate-50 md:text-5xl">
          музыка
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <Link
          href="/music"
          className="card-glass glow-ring group mt-12 flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,.35)] sm:flex-row sm:items-stretch"
        >
          <div className="relative h-56 w-full shrink-0 sm:h-44 sm:w-56">
            <Image
              src="/images/cover-autopilot.png"
              alt="обложка трека «автопилот» — ночная дорога уходит в океан"
              fill
              sizes="(min-width: 640px) 224px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5 p-6 sm:flex-row sm:items-center md:p-8">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400/70">
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/15 px-3 py-1 font-display text-cyan-100">
                  новый релиз
                </span>
                <span className="normal-case tracking-normal">feat. nedonebo</span>
              </div>
              <h3 className="glow-text mt-3 font-display text-2xl font-extrabold text-slate-50 md:text-3xl">
                автопилот
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-slate-300/80">
                уже на всех площадках — ставь на репит и ложись спать 🫂
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-cyan-200/25 px-5 py-2.5 font-display text-xs text-cyan-100 transition-all duration-300 group-hover:border-cyan-200/60 group-hover:bg-cyan-300/10 sm:self-center">
              слушать
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mt-9 text-center text-sm text-slate-400/70">
          на странице «музыка» — все релизы и плеер с отрывками прямо на сайте 🐋
        </p>
      </Reveal>
    </section>
  )
}
