'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { TrendingUp, PieChart, Target, Shield, Receipt, FileText, Users, BarChart, GraduationCap, Home as HomeIcon, CreditCard, Briefcase, Plane, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();

  const mainServices = [
    {
      title: t('wealthManagement'),
      description: 'End-to-end portfolio design, risk management, and periodic rebalancing.',
      icon: PieChart,
      href: '/services/wealth-management',
    },
    {
      title: t('investmentPlanning'),
      description: 'Equity, debt, and hybrid strategies aligned to your goals and risk profile.',
      icon: TrendingUp,
      href: '/services/investment-planning',
    },
    {
      title: t('retirementPlanning'),
      description: 'Plan for financial freedom with sustainable withdrawal and tax-efficient assets.',
      icon: Target,
      href: '/services/retirement-planning',
    },
    {
      title: 'Insurance Advisory',
      description: 'Right-size life, health, and term cover to protect your family.',
      icon: Shield,
      href: '/services/insurance-advisory',
    },
    {
      title: 'Tax Planning',
      description: 'Optimize your tax liability through strategic investment and planning.',
      icon: Receipt,
      href: '/services/tax-planning',
    },
    {
      title: 'Estate Planning',
      description: 'Structure your wealth transfer with proper documentation and legal guidance.',
      icon: FileText,
      href: '/services/estate-planning',
    },
  ];

  const additionalServices = [
    { name: 'Goal-based Planning', icon: Target },
    { name: 'Portfolio Review & Rebalancing', icon: BarChart },
    { name: 'Risk Profiling', icon: Shield },
    { name: 'SIP Planning', icon: TrendingUp },
    { name: "Children's Education & Marriage Planning", icon: GraduationCap },
    { name: 'NPS/ELSS/PPF Guidance', icon: PieChart },
    { name: 'Debt & Loan Planning', icon: CreditCard },
    { name: 'Emergency Fund Setup', icon: Briefcase },
    { name: 'Mutual Fund Advisory', icon: TrendingUp },
    { name: 'NRI Advisory', icon: Plane },
  ];

  return (
    <div>
      <PageBanner
        title={t('services')}
        breadcrumbs={[{ name: t('services'), href: '/services' }]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="inline-flex items-center gap-2 text-deepBlue font-medium group-hover:gap-3 transition-all">
                    {t('learnMore')}
                    <ChevronRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-deepBlue to-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your financial goals and how we can help you achieve them.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-deepBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            {t('bookMeeting')}
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
