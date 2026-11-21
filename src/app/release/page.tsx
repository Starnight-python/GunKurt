import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink, Gamepad2, Gift, Heart, SlidersHorizontal } from 'lucide-react'
import Reveal from '@/components/site/reveal'
import AePlayer from '@/components/site/ae-player'

export const metadata: Metadata = {
  title: '«АЕ» — уже вышел 💔',
  description:
    'трек «АЕ» ружья курта уже на всех площадках. сведение и обложка — сам, музыка — cyberwwway. в конце — пасхалка с найтивыходом: конец = начало 🐋',
}

const FACTS = [
  {
    icon: Heart,
    title: '«глубоко личный»',
    text: 'сел сводить его сам ещё год тому назад — и благополучно забыл. недавно попался на глаза, включил и решил: треку быть',
  },
  {
    icon: SlidersHorizontal,
    title: 'всё сделал сам — почти',
    text: 'сведение и обложка — его руками, а музыку к «АЕ» сделал cyberwwway. релизный пост коротко: «сведение: я / обложка: я / музыка: cyberwwway»',
  },
  {
    icon: Gamepad2,
    title: 'для поездок по ночному Вайс-Сити',
    text: 'так он сам описал настроение трека. и просьба от автора: «трек короткий пиздеееец. хотя бы 30 секунд уделяем» — 30 секунд найдётся у каждого',
  },
  {
    icon: Gift,
    title: 'пасхалка: итоги в тгк',
    text: 'в самом конце трека — кусок личной записи найтивыхода. версии собирались в тгк, конкурс завершился — итоги ищи в его канале',
  },
]

const QUOTES = [
  {
    date: '8 ноября · тгк',
    text: 'следующий трек глубоко личный. поэтому сел сводить его сам ещё год тому назад, после чего благополучно забыл. но сегодня неожиданно этот малыш попался мне на глаза. я такой включил и думаю бля.. а почему я это не показывал никому. так что походу ещё трек вам бахну перед альбомом 🐋',
  },
  {
    date: '15 ноября · тгк',
    text: 'ружьë курта — АЕ. в эту пятницу 💔',
  },
  {
    date: 'релизный пост · тгк',
    text: 'сведение: я / обложка: я / музыка: cyberwwway 🫶',
  },
  {
    date: 'после релиза · тгк',
    text: 'конец = начало. всё как в жизни. а это дань уважения — тому, кто вложился в этот почерк: одному из первых и крупнейших артистов эморэп-культуры 🐋',
  },
]

const LINKS = [
  {
    name: 'яндекс музыка',
    url: 'https://music.yandex.ru/album/45073324',
    note: 'альбом «АЕ» — слушай прямо в плеере выше',
  },
  {
    name: 'вконтакте',
    url: 'https://vk.ru/audio?z=audio_playlist-2000166087_30166087/fd18242d99498475c6',
    note: 'плейлист с «АЕ»',
  },
  {
    name: 'zvonko',
    url: 'https://zvonko.link/2CE7126',
    note: 'быстрая ссылка от автора',
  },
  {
    name: 'тгк',
    url: 'https://t.me/gunkurtt',
    note: 'анонсы, пасхалки и обнимашки',
  },
]

export default function ReleasePage() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 md:pb-32 md:pt-44">
      {/* header */}
      <Reveal>
        <p className="flex items-center gap-2.5 font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/85 md:text-xs">
          <span
            aria-hidden
            className="animate-blink h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.8)]"
          />
          релиз · информация из тгк
        </p>
        <h1 className="glow-text mt-6 font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold leading-[0.9]">
          <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,232,249,.3)]">
            «АЕ»
          </span>
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-300/85 md:text-lg">
          <span className="text-cyan-100">уже на всех площадках</span> 💔 включай на
          репит: самый личный трек на сегодня и последний перед альбомом 🐋
        </p>
      </Reveal>

      {/* embedded player */}
      <Reveal delay={0.12}>
        <div className="mt-12">
          <AePlayer />
          <p className="mt-4 text-center text-xs text-slate-400/70">
            без подписки плеер играет отрывки · с плюсом — целиком
          </p>
        </div>
      </Reveal>

      {/* art + facts */}
      <div className="mt-20 grid items-stretch gap-10 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-14">
        <Reveal className="h-full">
          <div className="card-glass glow-ring relative h-full min-h-[320px] overflow-hidden rounded-3xl">
            <Image
              src="/images/ae.png"
              alt="арт к треку «АЕ» — одинокий кит ныряет в чёрную бездну под разбитым биолюминесцентным светом"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover opacity-90"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-cyan-100/80">
              <span
                aria-hidden
                className="animate-blink h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)]"
              />
              глубоко личный · обложка его руками
            </div>
          </div>
        </Reveal>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={0.08 + i * 0.06} className="h-full">
              <div className="card-glass h-full rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-base font-bold text-slate-50">{f.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300/80">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* easter egg: найтивыход */}
      <Reveal delay={0.14}>
        <div className="card-glass glow-ring mt-16 overflow-hidden rounded-3xl p-7 md:p-10">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
            пасхалка · спойлеры
          </p>
          <h2 className="glow-text mt-4 font-display text-3xl font-extrabold text-slate-50 md:text-4xl">
            конец = начало 🫂
          </h2>
          <div className="mt-7 grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-300/85">
              <p>
                в самом конце «АЕ» прячется кусок личной записи{' '}
                <span className="text-cyan-100">найтивыхода</span> — фраза{' '}
                <span className="text-cyan-100">«давайте начнем не с денег»</span>. канал
                сразу закружил спор: провокация или примирение? — а он ответил сам: «конец
                = начало. всё как в жизни».
              </p>
              <p>
                фишка раскрывается на репите: трек заканчивается фразой, с которой мог бы
                начаться — включаешь снова, и конец становится началом 🐋
              </p>
              <p>
                почему именно найтивыход? по его словам, это{' '}
                <span className="text-cyan-100">«дань уважения»</span> — одному из первых и
                крупнейших артистов эморэп-культуры, который вложился в этот почерк.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/5 p-6">
              <h3 className="font-display text-base font-bold text-cyan-100">
                конкурс завершён
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                версии собирались в тгк — конкурс с ништяком на выбор уже завершился,
                итоги у него в канале. а фраза всё ещё работает: поставь трек на репит —
                и конец станет началом 🐋
              </p>
              <a
                href="https://t.me/gunkurtt"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 font-display text-xs font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(103,232,249,.45)]"
              >
                итоги в тгк
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* platforms */}
      <div className="mt-20">
        <Reveal>
          <h2 className="glow-text font-display text-3xl font-extrabold text-slate-50 md:text-4xl">
            слушать «АЕ»
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-300/80">
            площадки, которые он сам дал в тгк после релиза
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {LINKS.map((l, i) => (
            <Reveal key={l.name} delay={0.06 + i * 0.05}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:border-cyan-200/40 hover:bg-cyan-300/5"
              >
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold text-slate-50">
                    {l.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-slate-400/70">
                    {l.note}
                  </span>
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-cyan-200/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* quotes from тгк */}
      <div className="mt-20">
        <Reveal>
          <h2 className="glow-text font-display text-3xl font-extrabold text-slate-50 md:text-4xl">
            слова из тгк
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-300/80">
            всё, что он сам рассказал об «АЕ» — дословно, прямо из канала
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <Reveal key={q.date} delay={0.1 + i * 0.08} className="h-full">
              <figure className="card-glass flex h-full flex-col rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-xl"
                  >
                    🐋
                  </span>
                  <div>
                    <div className="font-display text-sm text-cyan-100">ружьё курта</div>
                    <div className="text-xs text-slate-400/70">{q.date}</div>
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-200/90">
                  {q.text}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* donate + cta */}
      <Reveal delay={0.1}>
        <div className="card-glass mt-16 flex flex-col items-center gap-5 rounded-3xl p-8 text-center md:p-10">
          <h2 className="font-display text-xl font-bold text-slate-50">
            поддержать проект 🫂
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-slate-300/80">
            к каждому сниппету в тгк он прикрепляет реквизиты — «если вдруг кто-то
            выразит желание поддержать проект, я буду очень благодарен»
          </p>
          <p className="inline-block rounded-2xl border border-cyan-200/20 bg-cyan-300/5 px-6 py-3.5 font-display text-base tracking-[0.14em] text-cyan-100 md:text-lg">
            2202 2050 5709 1230 · сбер
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://t.me/gunkurtt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,.45)]"
            >
              следи за анонсами в тгк
            </a>
            <a
              href="/music"
              className="flex items-center gap-2 rounded-full border border-cyan-200/25 px-6 py-3 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
            >
              слушать прошлые релизы
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-14 text-center text-sm leading-relaxed text-slate-400/75">
          а после «АЕ» — альбом 🐋 в тгк уже мелькает «твой джоэл» — то ли новый трек,
          <br className="hidden sm:block" /> то ли что-то большее. следи — там всё раньше,
          чем где-либо
        </p>
      </Reveal>
    </section>
  )
}
