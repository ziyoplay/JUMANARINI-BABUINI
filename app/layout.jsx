import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope'
});

const headingFont = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant'
});

export const metadata = {
  title: 'Doppi Travel — Туры по Хорезму, Хива',
  description: 'Приватные туры по Хорезму, поездки на Аральское море и трансферы из Хивы.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
