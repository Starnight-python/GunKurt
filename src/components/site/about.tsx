import Image from 'next/image'
import Reveal from './reveal'

const STATS = [
  { value: '18', label: 'треков на сборнике' },
  { value: '19.7k', label: 'лайков в тиктоке' },
  { value: '900+', label: 'фото в тгк' },
  { value: '4000', label: 'метров глубины вайба' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
          погружение
        </p>
        <h2 className="glow-text mt-4 font-display text-4xl font-extrabold text-slate-50 md:text-5xl">
          о нём
        </h2>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal className="h-full">
          <div className="card-glass glow-ring relative h-full min-h-[300px] overflow-hidden rounded-3xl">
            <Image
              src="/images/abyss.png"
              alt="тёмная бездна с медузами и светящимися частицами"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-cyan-100/80">
              <span
                aria-hidden
                className="animate-blink h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.8)]"
              />
              точка погружения: −1344 м
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-6">
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-slate-300/85">
              «ружьё курта» — артист из ставрополя, который делает музыку для поздней ночи:
              медленные биты, честные тексты и меланхолия, в которой тепло. его символ —
              кит 🐋: огромный, тихий, плывущий где-то совсем рядом с дном.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300/85">
              он поёт про то, о чём обычно молчат: про потерю связи, про свой жизненный путь, про то,
              как тяжело держаться на плаву. и всё равно каждый релиз заканчивается
              обнимашками 🫂 среди тех, с кем он делал музыку — <span className="text-cyan-200/90">nedonebo</span>,{' '}
              <span className="text-cyan-200/90">Vspak</span>,{' '}
              <span className="text-cyan-200/90">ЗАВТРА БРОШУ</span>,{' '}
              <span className="text-cyan-200/90">Nebo7</span> и{' '}
              <span className="text-cyan-200/90">720vozduha</span>.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <figure className="card-glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-xl"
                >
                  🐋
                </span>
                <div>
                  <div className="font-display text-sm text-cyan-100">ружьё курта</div>
                  <div className="text-xs text-slate-400/70">пост из тгк</div>
                </div>
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-200/90">
                «ставьте нашу песню на репит вк или на яндексе и ложитесь спать»
              </blockquote>
              <figcaption className="mt-3 text-xs text-slate-400/60">…и обнял 🫂</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="card-glass rounded-2xl p-4 text-center">
                  <div className="glow-text font-display text-2xl font-bold text-cyan-100">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-slate-400/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
