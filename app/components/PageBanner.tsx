'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PageBannerProps {
  title: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function PageBanner({ title, breadcrumbs = [] }: PageBannerProps) {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-br from-deepBlue via-slate to-emerald py-16 md:py-20">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>{t('home')}</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-white font-medium">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins">
          {title}
        </h1>
      </div>
    </div>
  );
}
