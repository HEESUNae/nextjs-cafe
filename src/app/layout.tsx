import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import RecoilRootProvider from '@/store/RecoilRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '카페라오',
  description: '커피를 주문할 수 있는 키오스크',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>
          <div className="header-container">
            <Image src={'/images/logo.jpg'} width={40} height={40} alt="" />
            <h1>
              <Link href={'/'}>Cafe Lao</Link>
            </h1>
          </div>
        </header>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
