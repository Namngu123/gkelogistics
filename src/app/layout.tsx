import './globals.css'
import { inter } from './fonts'

export const metadata = {
  title: 'GKE Logistics',
  description: 'Dịch vụ giao nhận hàng hoá toàn quốc',
  verification: {
    google: 'googleacfe680a1455168f.html',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
