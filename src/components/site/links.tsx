import { ArrowUpRight, Clapperboard, Link2, Music2, Send } from 'lucide-react'
import Reveal from './reveal'

const LINKS = [
  {
    href: 'https://t.me/gunkurtt',
    icon: Send,
    title: 'телеграм',
    sub: 'тгк «ружьё курта» — посты, анонсы и обнимашки 🫂',
    tag: 't.me/gunkurtt',
  },
  {
    href: 'https://www.tiktok.com/@gunkurtt',
    icon: Clapperboard,
    title: 'тикток',
    sub: 'клипы и вайб в коротком формате',
    tag: '@gunkurtt',
  },
  {
    href: 'https://music.yandex.ru/artist/17309017',
    icon: Music2,
    title: 'яндекс музыка',
    sub: 'все треки и релизы артиста',
    tag: 'music.yandex.ru',
  },
  {
    href: 'https://zvonko.link/2BD466D',
    icon: Link2,
    title: 'все платформы',
    sub: 'одна ссылка — весь «автопилот»: яндекс, вк, apple, spotify',
    tag: 'zvonko.link',
  },
]

export default function Links() {
  return (
    <section id="links" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
          связь
        </p>
        <h2 className="glow-text mt-4 font-display text-4xl font-extrabold text-slate-50 md:text-5xl">
          где найти
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l, i) => (
          <Reveal key={l.href} delay={i * 0.08} className="h-full">
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass group flex h-full flex-col gap-8 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200/30 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,.35)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200 transition-all duration-300 group-hover:bg-cyan-300/20 group-hover:shadow-[0_0_24px_rgba(103,232,249,.35)]">
                  <l.icon className="h-5 w-5" aria-hidden />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-50">{l.title}</h3>
                <p className="mt-1 text-xs text-cyan-100/60">{l.tag}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/75">{l.sub}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-sm text-slate-400/70">
          весь вайб живёт в тгк — заходи, там тепло 🐋
        </p>
      </Reveal>
    </section>
  )
}
