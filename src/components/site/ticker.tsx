const ITEMS = [
  'автопилот',
  'nedonebo',
  'ставрополь',
  'ложись спать',
  'на репит',
  'твой джоэл',
  'обнял 🫂',
  'глубже',
]

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div
      aria-hidden
      className="marquee-hover relative overflow-hidden border-y border-cyan-200/10 bg-[#050d18]/80 py-4"
    >
      <div className="animate-marquee flex w-max items-center whitespace-nowrap font-display text-sm text-cyan-100/60">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{t}</span>
            <span className="text-cyan-300/50">🐋</span>
          </span>
        ))}
      </div>
    </div>
  )
}
