import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import ThemeToggleButton from '@/app/components/ThemeToggleButton';
import AnimatedCursor from '@/app/components/AnimatedCursor'; // Import the new cursor component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikhil Bramhandam - Portfolio',
  description: 'Applied AI Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black transition-colors duration-300 cursor-none`}>
        {/* Added cursor-none to hide default system cursor on body */}
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AnimatedCursor /> {/* Add the animated cursor here */}
          <ThemeToggleButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
