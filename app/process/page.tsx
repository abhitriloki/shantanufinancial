'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { Search, FileText, TrendingUp, BarChart, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProcessPage() {
  const { t } = useLanguage();

  const processSteps = [
    {
      number: 1,
      title: t('discover'),
      icon: Search,
      description: t('discoverDesc'),
      details: [
        'Initial consultation to understand your current financial situation',
        'Discussion of your short-term and long-term financial goals',
        'Risk tolerance assessment and investment experience evaluation',
        'Review of existing investments, insurance, and financial commitments',
        'Analysis of cash flows, income sources, and expenses',
      ],
      duration: '1-2 weeks',
    },
    {
      number: 2,
      title: t('plan'),
      icon: FileText,
      description: t('planDesc'),
      details: [
        'Development of comprehensive financial plan aligned with your goals',
        'Asset allocation strategy based on your risk profile',
        'Recommendation of specific investment vehicles and products',
        'Tax optimization strategies and insurance coverage planning',
        'Detailed roadmap with timelines and milestones',
      ],
      duration: '2-3 weeks',
    },
    {
      number: 3,
      title: t('implement'),
      icon: TrendingUp,
      description: t('implementDesc'),
      details: [
        'Guidance on opening necessary investment accounts',
        'Execution of recommended investment transactions',
        'Setting up systematic investment plans (SIPs) where applicable',
        'Ensuring proper documentation and compliance',
        'Coordination with fund houses, insurance companies, and other providers',
      ],
      duration: '1-2 weeks',
    },
    {
      number: 4,
      title: t('review'),
      icon: BarChart,
      description: t('reviewDesc'),
      details: [
        'Quarterly portfolio performance reviews and analysis',
        'Annual comprehensive financial plan review',
        'Rebalancing to maintain target asset allocation',
        'Adjustments based on life changes or market conditions',
        'Continuous support and guidance throughout your financial journey',
      ],
      duration: 'Ongoing',
    },
  ];

  return (
    <div>
      <PageBanner
        title={t('processTitle')}
        breadcrumbs={[{ name: t('process'), href: '/process' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">
              Our Four-Step Financial Planning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, client-focused approach designed to help you achieve your financial goals with confidence and clarity.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Step Number & Icon */}
                    <div className="md:w-64 bg-gradient-to-br from-deepBlue to-emerald p-8 flex flex-col items-center justify-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold">{step.number}</span>
                      </div>
                      <Icon size={48} className="mb-4" />
                      <h3 className="text-2xl font-bold text-center">{step.title}</h3>
                      <div className="mt-4 bg-white/20 px-4 py-2 rounded-full text-sm">
                        {step.duration}
                      </div>
                    </div>

                    {/* Step Details */}
                    <div className="flex-1 p-8">
                      <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                      <h4 className="font-semibold mb-4 text-deepBlue">What We Do:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Our Process Works */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-center">
              Why Our Process Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Comprehensive Analysis</h3>
                <p className="text-sm text-gray-600">
                  We take time to understand your complete financial picture before making recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Personalized Planning</h3>
                <p className="text-sm text-gray-600">
                  No cookie-cutter solutions. Every plan is tailored to your unique goals and circumstances.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600">
                  We're with you for the long term, adapting your plan as your life and goals evolve.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards financial freedom. Book a free consultation to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="[BOOKING LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-deepBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Calendar size={20} />
                {t('bookMeeting')}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-medium transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
