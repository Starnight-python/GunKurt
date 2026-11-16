import type { Metadata } from 'next'
import Links from '@/components/site/links'
import Reveal from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'связь',
  description:
    'где найти ружья курта: тгк, тикток, яндекс музыка и все платформы. плюс реквизиты для поддержки проекта 🫂',
}

function Support() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-24 md:pb-32">
      <Reveal>
        <div className="card-glass flex flex-col items-center gap-5 rounded-3xl p-8 text-center md:p-10">
          <h2 className="font-display text-xl font-bold text-slate-50">поддержать проект 🫂</h2>
          <p className="max-w-lg text-sm leading-relaxed text-slate-300/80">
            к каждому сниппету в тгк он прикрепляет реквизиты — «если вдруг кто-то
            выразит желание поддержать проект, я буду очень благодарен»
          </p>
          <p className="inline-block rounded-2xl border border-cyan-200/20 bg-cyan-300/5 px-6 py-3.5 font-display text-base tracking-[0.14em] text-cyan-100 md:text-lg">
            2202 2050 5709 1230 · сбер
          </p>
          <p className="text-[11px] text-slate-500/80">реквизиты из тгк · по желанию, без обид 🐋</p>
        </div>
      </Reveal>
    </section>
  )
}

export default function LinksPage() {
  return (
    <>
      <Links />
      <Support />
    </>
  )
}
