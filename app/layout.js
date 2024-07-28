import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from './components/GoogleAnalytics';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
