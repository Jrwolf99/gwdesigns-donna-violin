import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import NavBar from './NavBar';
import SampleButton from '@/components/SampleButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Donna Wolf Violinist',
  description:
    'Donna Wolf is a violinist that can play for your wedding, party, or event.',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`font-sans text-white bg-gray-900 ${inter.className}`}>
        <NavBar />
        <div>{children}</div>
        <footer className="flex flex-col items-center justify-center w-full h-24 mt-16 mb-8 pt-20 pb-24 gap-4">
          <p>© 2024 Donna Wolf Violin</p>
          <p className="text-sm">
            Website designed and made by{' '}
            <a
              href="https://jrwolf.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 cursor-pointer"
            >
              Jonathan Wolf
            </a>
          </p>
        </footer>

        <SampleButton />
      </body>
    </html>
  );
}
