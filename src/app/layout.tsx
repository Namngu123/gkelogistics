import './globals.css'
import { inter } from './fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
