import type { Metadata } from 'next'
import Music from '@/components/site/music'
import Player from '@/components/site/player'

export const metadata: Metadata = {
  title: 'музыка и плеер',
  description:
    'все релизы ружья курта и плеер с отрывками прямо на сайте: новый трек «АЕ», «автопилот» feat. nedonebo и другие 🐋',
}

export default function MusicPage() {
  return (
    <>
      <Music />
      <Player />
    </>
  )
}
