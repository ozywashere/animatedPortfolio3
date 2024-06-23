'use client';
import { Sora } from 'next/font/google';
import './globals.css';
import Transition from '@/components/Transition';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Nav from '@/components/Nav';
import Header from '@/components/Header';
import TopLeftImg from '@/components/TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${sora.className} page bg-site text-white bg-cover bg-no-repeat relative overflow-x-hidden`}>
        <div>
          <AnimatePresence mode="wait">
            <motion.div className="h-full">
              <Transition key={pathname} />
              <Nav />
              <Header />
              <TopLeftImg />
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
