import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

import { ClerkProvider } from '@clerk/nextjs';

// Barlow is a variable font, so we can use it to create multiple weights
const barlow = Barlow({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Shopwell',
  description: 'Welcome to Shopwell, your ultimate shopping destination 🛍️!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${barlow.variable} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
