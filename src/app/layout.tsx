import type { Metadata } from 'next'
import { Manrope, Inter, IBM_Plex_Sans_Thai } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500'],
})

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-ibm-plex-thai',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'FORMCRAFT | From Concept to Creation.',
  description:
    'FORMCRAFT คือพาร์ตเนอร์ด้านการผลิตที่แม่นยำสำหรับโรงงานและองค์กร B2B เราดูแลทุกงานตั้งแต่ไอเดียจนถึงของจริง ด้วยความใส่ใจและความเป๊ะในทุกชิ้น',
  keywords:
    'precision manufacturing, OEM, custom production, prototyping, quality control, B2B manufacturing Thailand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="th"
      className={`${manrope.variable} ${inter.variable} ${ibmPlexSansThai.variable}`}
      style={
        {
          '--font-display': `var(--font-manrope), var(--font-ibm-plex-thai), system-ui, sans-serif`,
          '--font-body': `var(--font-manrope), var(--font-ibm-plex-thai), system-ui, sans-serif`,
          '--font-utility': `var(--font-inter), system-ui, sans-serif`,
        } as React.CSSProperties
      }
    >
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
