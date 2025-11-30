import { Playfair_Display, Inter, Italiana } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/components/negocia/ToastManager';

// Serif para títulos principales
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

// Sans-serif para textos de cuerpo
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

// Cursiva para énfasis
const italiana = Italiana({
  subsets: ["latin"],
  variable: '--font-italiana',
  weight: '400'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${italiana.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SidebarProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
