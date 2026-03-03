import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Filip Opacki - Korepetycje z Matematyki | o-korki.pl',
  description: 'Profesjonalne korepetycje z matematyki. Doświadczony korepetytor - Filip Opacki. Przygotowanie do matury podstawowej i rozszerzonej. Indywidualne podejscie, sprawdzone metody, gwarantowane wyniki.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
