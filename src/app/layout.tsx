import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Plataforma inclusiva de saúde',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
