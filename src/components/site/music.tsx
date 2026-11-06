import Image from 'next/image'
import { ArrowUpRight, Music2, Play } from 'lucide-react'
import Reveal from './reveal'

export default function Music() {
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

      <div className="mt-14 flex flex-col gap-8">
        {/* автопилот — featured */}
        <Reveal>
          <article className="card-glass glow-ring overflow-hidden rounded-3xl md:grid md:grid-cols-[minmax(0,420px)_1fr]">
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[380px]">
              <Image
                src="/images/cover-autopilot.png"
                alt="обложка трека «автопилот» — ночная дорога уходит в океан"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-[#04070d]/30 md:block"
              />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/15 px-3 py-1 font-display text-cyan-100">
                  новый релиз
                </span>
                <span className="text-slate-400/70">feat. nedonebo</span>
              </div>
              <h3 className="glow-text mt-5 font-display text-4xl font-extrabold text-slate-50 md:text-5xl">
                автопилот
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300/80">
                самая душевная и вместе с тем тяжёлая работа. включай на всех платформах,
                ставь на репит — и ложись спать 🫂
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/75">
                <li className="rounded-full border border-white/10 px-3 py-1">сведение — 16 плюс</li>
                <li className="rounded-full border border-white/10 px-3 py-1">обложка — rpncl</li>
                <li className="rounded-full border border-white/10 px-3 py-1">музыка — почтиполночь</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://zvonko.link/2BD466D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,.45)]"
                >
                  <Play className="h-4 w-4 fill-current" aria-hidden />
                  все платформы
                </a>
                <a
                  href="https://music.yandex.ru/artist/17309017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-cyan-200/25 px-6 py-3 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
                >
                  <Music2 className="h-4 w-4" aria-hidden />
                  яндекс музыка
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* сборник */}
        <Reveal delay={0.1}>
          <article className="card-glass overflow-hidden rounded-3xl md:grid md:grid-cols-[1fr_minmax(0,360px)]">
            <div className="order-2 flex flex-col justify-center p-7 md:order-1 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 font-display text-red-200/90">
                  <span aria-hidden className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-400 align-middle" />
                  сборник
                </span>
                <span className="text-slate-400/70">18 треков · выход 30 октября</span>
              </div>
              <h3 className="glow-text mt-5 font-display text-3xl font-extrabold text-slate-50 md:text-4xl">
                вся глубина одним погружением
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300/80">
                восемнадцать треков — от самых тёплых до самых тёмных. вся история
                ружья курта на одной глубине: включай и ныряй 🐋
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://music.yandex.ru/artist/17309017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,.45)]"
                >
                  <Music2 className="h-4 w-4" aria-hidden />
                  яндекс музыка
                </a>
                <a
                  href="https://t.me/gunkurtt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-cyan-200/25 px-6 py-3 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
                >
                  подробности в тгк
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </div>
            <div className="relative order-1 min-h-[280px] overflow-hidden md:order-2 md:min-h-[340px]">
              <Image
                src="/images/cover-collection.png"
                alt="обложка сборника — кит под лучами лунного света в тёмной воде"
                fill
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
