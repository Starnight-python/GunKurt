import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './reveal'
import AePlayer from './ae-player'

export default function Soon() {
  return (
    <section id="soon" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <Reveal>
        <article className="card-glass glow-ring relative overflow-hidden rounded-[2rem]">
          {/* backdrop art */}
          <Image
            src="/images/ae.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#04070d]/95 via-[#04070d]/75 to-[#04070d]/90"
          />

          <div className="relative grid gap-8 p-7 md:grid-cols-[1.1fr_1fr] md:items-center md:p-12">
            <div>
              <p className="flex items-center gap-2.5 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-red-200/85 md:text-xs">
                <span
                  aria-hidden
                  className="animate-blink h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.8)]"
                />
                уже вышло · новый релиз
              </p>
              <h2 className="glow-text mt-5 font-display text-6xl font-extrabold leading-none text-slate-50 md:text-7xl">
                «АЕ»
              </h2>
              <p className="mt-3 font-display text-sm text-cyan-100/85 md:text-base">
                уже на всех площадках 💔
              </p>
              <p className="mt-5 max-w-md leading-relaxed text-slate-300/85">
                глубоко личный трек перед альбомом: сведение и обложка — сам, музыка —
                cyberwwway. а в конце — пасхалка с найтивыходом: конец = начало 🐋 нажми
                play и слушай прямо на сайте
              </p>
              <Link
                href="/release"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-200/25 px-6 py-3 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
              >
                всё о релизе
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>

            <AePlayer />
          </div>
        </article>
      </Reveal>
    </section>
  )
}
