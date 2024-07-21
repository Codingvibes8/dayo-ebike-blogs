import { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/app/components-ui/globals.css';
import { AppProps } from 'next/app';

import Navbar from '@/app/components-ui/header/Navbar';
import { Inter } from 'next/font/google';
import Providers from '@/app/components-ui/providers/providers';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  Component: ReactNode;
  PageProps: AppProps;
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'dayoblogs',
  description: 'ebike blogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body className={`relative  inter.className min-h-screen`}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
