import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from './components/ReactQueryProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Search Repositories',
  description: 'Search for repositories on GitHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
