'use client'

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

export default function DepthMeter() {
  const { scrollYProgress } = useScroll()
  const fill = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [depth, setDepth] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setDepth(Math.round(v * 4000))
  })

  const zone = depth < 200 ? 'поверхность' : depth < 1000 ? 'сумрак' : depth < 3000 ? 'полночь' : 'бездна'

  return (
    <div
      aria-hidden
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      <span className="font-display text-[10px] uppercase tracking-[0.3em] text-cyan-200/40">
        эхолот
      </span>
      <div className="relative h-56 w-px bg-cyan-100/10">
        <motion.div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-cyan-300/80 to-teal-300/30"
          style={{ height: fill }}
        />
        <span className="absolute left-1/2 top-0 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-cyan-200/40" />
        <span className="absolute left-1/2 top-[5%] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-cyan-200/40" />
        <span className="absolute left-1/2 top-[25%] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-cyan-200/40" />
        <span className="absolute bottom-0 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-red-400/60" />
      </div>
      <div className="font-display text-xs font-semibold tabular-nums text-cyan-200/80">
        −{depth} м
      </div>
      <div className="text-[10px] text-slate-400/60">{zone}</div>
    </div>
  )
}
