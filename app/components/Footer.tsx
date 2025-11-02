'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const CONTACT_INFO = {
  businessName: '[BUSINESS NAME]',
  advisorName: 'Shantanu Pandey',
  phone: '[PHONE]',
  whatsapp: '[WHATSAPP NUMBER]',
  email: '[EMAIL]',
  address: '[ADDRESS, GORAKHPUR, UP]',
  mapLink: '[MAP LINK]',
  linkedin: '[LINKEDIN_URL]',
  facebook: '[FACEBOOK_URL]',
  instagram: '[INSTAGRAM_URL]',
  twitter: '[TWITTER_URL]',
  youtube: '[YOUTUBE_URL]',
};

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('process'), href: '/process' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('about'), href: '/about' },
    { name: t('compliance'), href: '/compliance' },
    { name: t('faqs'), href: '/faqs' },
    { name: t('contact'), href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: CONTACT_INFO.facebook, label: 'Facebook' },
    { icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram' },
    { icon: Twitter, href: CONTACT_INFO.twitter, label: 'Twitter' },
    { icon: Youtube, href: CONTACT_INFO.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">{CONTACT_INFO.businessName}</h3>
            <p className="text-gray-300 mb-4">
              {CONTACT_INFO.advisorName}, {t('sebiCertified')}
            </p>
            <p className="text-sm text-gray-400">
              Professional financial planning and wealth management services in Gorakhpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">{t('contactInfo')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-2 text-gray-300 hover:text-emerald transition-colors">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-2 text-gray-300 hover:text-emerald transition-colors">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
            {CONTACT_INFO.mapLink && CONTACT_INFO.mapLink !== '[MAP LINK]' && (
              <a
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-emerald hover:underline"
              >
                View on Google Maps
              </a>
            )}
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">{t('followUs')}</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-emerald rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-emerald/20 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('sebiCertified')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="space-y-2 text-xs text-gray-400">
            <p>{t('disclaimer1')}</p>
            <p>{t('disclaimer2')}</p>
            <p>{t('disclaimer3')}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} {CONTACT_INFO.businessName}. {t('allRightsReserved')}.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:text-white transition-colors">
                {t('compliance')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
