import type { Metadata } from 'next'
import About from '@/components/site/about'

export const metadata: Metadata = {
  title: 'о нём',
  description:
    'ружьё курта — артист из мурманска. музыка для поздней ночи: медленные биты, честные тексты и кит, который обнимает на глубине 🐋',
}

export default function AboutPage() {
  return <About />
}
