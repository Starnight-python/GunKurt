'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, Play, Send } from 'lucide-react'

export default function Hero() {
  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const gx = useSpring(mx, { stiffness: 50, damping: 18 })
  const gy = useSpring(my, { stiffness: 50, damping: 18 })

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
    >
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-whale.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070d]/70 via-[#04070d]/35 to-[#04070d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#04070d_100%)]" />
      </div>

      {/* mouse glow */}
      <motion.div
        aria-hidden
        style={{ left: gx, top: gy }}
        className="pointer-events-none absolute z-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,.10),transparent_65%)] blur-2xl"
      />

      {/* sonar rings */}
      <div aria-hidden className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="animate-sonar absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10"
            style={{ animationDelay: `${i * 1.5}s` }}
          />
        ))}
      </div>

      {/* drifting whales */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[20%] -left-[10%] z-0 select-none"
        animate={{ x: ['-4vw', '118vw'] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      >
        <div className="animate-floaty text-6xl opacity-30 blur-[0.6px] drop-shadow-[0_0_18px_rgba(103,232,249,.45)] md:text-8xl">
          🐋
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[62%] -left-[10%] z-0 select-none"
        animate={{ x: ['-6vw', '116vw'] }}
        transition={{ duration: 64, repeat: Infinity, ease: 'linear', delay: -18 }}
      >
        <div className="animate-floaty text-4xl opacity-15 blur-[1px]" style={{ animationDelay: '-3s' }}>
          🐋
        </div>
      </motion.div>

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-24 pt-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-7 flex items-center gap-2.5 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200/70 md:text-xs"
        >
          <span
            aria-hidden
            className="animate-blink h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.8)]"
          />
          ставрополь · меланхоличный рэп · глубина 4000 м
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="glow-text font-display font-extrabold leading-[0.95]"
        >
          <span className="block text-[clamp(3.2rem,12vw,8rem)] text-slate-50">ружьё</span>
          <span className="block text-[clamp(3.2rem,12vw,8rem)] bg-gradient-to-r from-cyan-200 via-sky-300 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,232,249,.3)]">
            курта
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-slate-300/85 md:text-lg"
        >
          музыка, в которую уходят под воду 🐋 честные тексты, тёплые биты и кит,
          который обнимает на глубине. ставь на репит — и ложись спать 🫂
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://zvonko.link/2BD466D"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-ring group flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-3.5 font-display text-sm font-bold text-[#04121c] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_50px_rgba(103,232,249,.5)]"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden />
            слушать «автопилот»
          </a>
          <a
            href="https://t.me/gunkurtt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-cyan-200/25 px-7 py-3.5 font-display text-sm text-cyan-100 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10"
          >
            <Send className="h-4 w-4" aria-hidden />
            телеграм 🐋
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400/70 transition hover:text-cyan-200"
      >
        нырни ниже
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          aria-hidden
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  )
}
