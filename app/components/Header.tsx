'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Menu, X, Globe, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

const CONTACT_INFO = {
  phone: '[PHONE]',
  whatsapp: '[WHATSAPP NUMBER]',
  email: '[EMAIL]',
  linkedin: '[LINKEDIN_URL]',
  facebook: '[FACEBOOK_URL]',
  instagram: '[INSTAGRAM_URL]',
  twitter: '[TWITTER_URL]',
};

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('process'), href: '/process' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('blog'), href: '/blog' },
    { name: t('tools'), href: '/tools' },
    { name: t('about'), href: '/about' },
    { name: t('faqs'), href: '/faqs' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 hover:text-emerald transition-colors">
              <Phone size={14} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1 hover:text-emerald transition-colors hidden md:flex">
              <Mail size={14} />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
              <Facebook size={16} />
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
              <Instagram size={16} />
            </a>
            <a href={CONTACT_INFO.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-bold text-deepBlue font-poppins">[BUSINESS NAME]</h1>
            <p className="text-xs text-gray-600">{t('sebiCertified')}</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-deepBlue transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-deepBlue transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
