import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jar Jar Residence | Премиум жильё в центре города',
  description: 'Откройте для себя роскошные квартиры в Jar Jar Residence - премиум жилой комплекс бизнес-класса в центре города. Современная архитектура, премиум инфраструктура и городской образ жизни.',
  keywords: 'роскошные квартиры, недвижимость, жилой комплекс, премиум жильё, бизнес класс, современная архитектура',
  openGraph: {
    title: 'Jar Jar Residence | Премиум жильё в центре города',
    description: 'Откройте для себя роскошные квартиры в Jar Jar Residence - премиум жилой комплекс бизнес-класса.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
