import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope } from "next/font/google";
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
  title: "ружьё курта 🐋",
  description:
    "артист из ставрополя. «автопилот» feat. nedonebo уже на всех платформах — ставь на репит и ложись спать 🫂",
  keywords: ["ружьё курта", "gunkurtt", "gunskurt", "автопилот", "nedonebo", "рэп", "ставрополь"],
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
        {children}
      </body>
    </html>
  );
}
