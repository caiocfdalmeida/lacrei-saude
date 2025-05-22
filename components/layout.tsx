import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Lacrei Saúde',
  description: 'Sistema baseado no Marsha Design System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
