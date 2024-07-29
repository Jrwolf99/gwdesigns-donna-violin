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
      <body className={`font-sans text-black bg-white ${inter.className}`}>
        <NavBar />
        <div>{children}</div>
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t mt-16 mb-8 pt-20 pb-24 gap-4">
          <p>© 2024 Donna Wolf Violin</p>
          <p className="text-sm text-gray-500">
            Website designed and made by{' '}
            <a
              href="https://jrwolf.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
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
