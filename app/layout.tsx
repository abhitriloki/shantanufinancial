import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Shantanu Pandey - SEBI Certified Financial Consultant in Gorakhpur',
  description: 'Goal-based financial planning, wealth management, investment planning, and retirement planning services in Gorakhpur. SEBI Certified.',
  keywords: 'financial consultant, SEBI certified, wealth management, investment planning, retirement planning, Gorakhpur, financial advisor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
