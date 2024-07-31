import '../styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'A description of my app',
  icons: {
    icon: '/favicon.ico',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
