import Bubbles from '@/components/site/bubbles'
import DepthMeter from '@/components/site/depth-meter'
import Nav from '@/components/site/nav'
import Hero from '@/components/site/hero'
import Ticker from '@/components/site/ticker'
import About from '@/components/site/about'
import Music from '@/components/site/music'
import Player from '@/components/site/player'
import Links from '@/components/site/links'
import Footer from '@/components/site/footer'

export default function Home() {
  return (
    <div className="grain relative flex min-h-screen flex-col overflow-x-clip">
      {/* deep ocean gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            'radial-gradient(1200px 800px at 85% -10%, rgba(34,211,238,.08), transparent 60%), radial-gradient(900px 700px at -10% 30%, rgba(45,212,191,.06), transparent 55%), linear-gradient(180deg, #04070d 0%, #05101d 30%, #040a12 70%, #02060c 100%)',
        }}
      />
      <Bubbles />
      <DepthMeter />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Music />
        <Player />
        <Links />
      </main>
      <Footer />
    </div>
  )
}
