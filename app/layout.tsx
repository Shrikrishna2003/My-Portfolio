import { Analytics } from '@vercel/analytics/next'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Shrikrishna Mokhashi | Python Full Stack Developer',
  description: 'Portfolio of Shrikrishna Mokhashi, a Computer Science Engineering graduate building practical full-stack, backend, and AI-powered applications.',
  openGraph: {
    title: 'Shrikrishna Mokhashi | Python Full Stack Developer',
    description: 'Explore Shrikrishna Mokhashi\'s projects, skills, experience, and education.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffafa' },
    { media: '(prefers-color-scheme: dark)', color: '#090909' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(() => { try { const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', d); document.documentElement.classList.toggle('light', !d) } catch {} })()` }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
