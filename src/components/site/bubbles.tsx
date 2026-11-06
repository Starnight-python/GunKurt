'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  speed: number
  sway: number
  phase: number
  alpha: number
  kind: 'bubble' | 'dot'
}

export default function Bubbles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = window.innerWidth < 640 ? 26 : 48

    const spawn = (initial: boolean): Particle => {
      const kind: Particle['kind'] = Math.random() < 0.45 ? 'bubble' : 'dot'
      return {
        x: Math.random() * window.innerWidth,
        y: initial ? Math.random() * window.innerHeight : window.innerHeight + 16,
        r: kind === 'bubble' ? 1.5 + Math.random() * 3.5 : 0.6 + Math.random() * 1.4,
        speed: 0.15 + Math.random() * 0.45,
        sway: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.15 + Math.random() * 0.4,
        kind,
      }
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const parts: Particle[] = []
    for (let i = 0; i < count; i++) parts.push(spawn(true))

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        if (!reduced) {
          p.y -= p.speed
          p.x += Math.sin(t / 1600 + p.phase) * p.sway * 0.3
          if (p.y < -14 || p.x < -20 || p.x > w + 20) Object.assign(p, spawn(false))
        }
        const twinkle = 0.5 + 0.5 * Math.sin(t / 900 + p.phase)
        if (p.kind === 'bubble') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(103, 232, 249, ${p.alpha * (0.35 + 0.3 * twinkle)})`
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(p.x - p.r * 0.32, p.y - p.r * 0.32, p.r * 0.24, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(186, 240, 255, ${p.alpha * 0.22 * twinkle})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 222, 255, ${p.alpha * twinkle})`
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}
