import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope } from "next/font/google";
import Bubbles from "@/components/site/bubbles";
import DepthMeter from "@/components/site/depth-meter";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gunkurtt.site"),
  title: {
    default: "ружьё курта 🐋",
    template: "%s · ружьё курта 🐋",
  },
  description:
    "артист из мурманска. «автопилот» feat. nedonebo уже на всех платформах — ставь на репит и ложись спать 🫂",
  keywords: ["ружьё курта", "gunkurtt", "gunskurt", "автопилот", "nedonebo", "рэп", "мурманск"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ружьё курта 🐋",
    description:
      "музыка, в которую уходят под воду. «автопилот» feat. nedonebo — слушай и ложись спать 🫂",
    images: ["/images/hero-whale.png"],
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${manrope.variable} antialiased`}>
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
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
