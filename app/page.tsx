'use client';

import { useLanguage } from './context/LanguageContext';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, TrendingUp, PieChart, Target, Shield, ChevronRight } from 'lucide-react';

const CONTACT_INFO = {
  phone: '[PHONE]',
  whatsapp: '[WHATSAPP NUMBER]',
  bookingLink: '[BOOKING LINK]',
};

export default function Home() {
  const { t } = useLanguage();

  const featuredServices = [
    {
      title: t('wealthManagement'),
      description: t('wealthDesc'),
      icon: PieChart,
      href: '/services/wealth-management',
    },
    {
      title: t('investmentPlanning'),
      description: t('investmentDesc'),
      icon: TrendingUp,
      href: '/services/investment-planning',
    },
    {
      title: t('retirementPlanning'),
      description: t('retirementDesc'),
      icon: Target,
      href: '/services/retirement-planning',
    },
    {
      title: t('insuranceDecisions'),
      description: t('insuranceDesc'),
      icon: Shield,
      href: '/services/insurance-advisory',
    },
  ];

  const nextSlots = [
    'Tomorrow, 10:00 AM',
    'Tomorrow, 2:00 PM',
    'Nov 4, 11:00 AM',
    'Nov 4, 4:00 PM',
  ];

  const processSteps = [
    { title: t('discover'), description: t('discoverDesc') },
    { title: t('plan'), description: t('planDesc') },
    { title: t('implement'), description: t('implementDesc') },
    { title: t('review'), description: t('reviewDesc') },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate via-deepBlue to-emerald overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-deepBlue/90 to-slate/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-emerald/20 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('sebiCertified')}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
                {t('heroHeadline')}
              </h1>

              <p className="text-xl mb-8 text-gray-200">
                {t('heroSubheadline')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={CONTACT_INFO.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Calendar size={20} />
                  {t('bookMeeting')}
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I'd like to discuss financial planning`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <MessageCircle size={20} />
                  {t('whatsappUs')}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <Phone size={20} />
                  {t('callNow')}
                </a>
              </div>

              {/* Next Available Slots */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{t('nextAvailableSlots')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {nextSlots.map((slot, index) => (
                    <div key={index} className="bg-white/20 rounded-lg px-4 py-2 text-sm">
                      {slot}
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3 text-gray-300">
                  Final availability confirmed on booking page.
                </p>
              </div>
            </div>

            {/* Right Content - Trust Badge */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-accentGold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shantanu Pandey</h3>
                  <p className="text-emerald font-medium">{t('sebiCertified')}</p>
                </div>
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-gray-300">Experience</span>
                    <span className="font-semibold">10+ Years</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-gray-300">Clients Served</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-300">Specialization</span>
                    <span className="font-semibold">Goal-based Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-poppins">{t('services')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique goals and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-deepBlue font-medium hover:gap-3 transition-all"
                  >
                    {t('learnMore')}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-deepBlue hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              View All Services
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-poppins">{t('processTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven four-step approach to help you achieve financial success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-deepBlue to-emerald"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={CONTACT_INFO.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              <Calendar size={20} />
              {t('bookMeeting')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
