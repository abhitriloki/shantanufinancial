'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const { t } = useLanguage();

  const advisoryPackages = [
    {
      name: 'Basic Advisory',
      price: '₹10,000 - ₹25,000',
      period: 'One-time',
      description: 'Ideal for individuals seeking initial financial guidance',
      features: [
        'Comprehensive financial health check',
        'Goal setting and prioritization',
        'Investment portfolio review',
        'Basic tax planning advice',
        'Insurance coverage analysis',
        'Written financial plan document',
      ],
    },
    {
      name: 'Comprehensive Planning',
      price: '₹50,000 - ₹1,00,000',
      period: 'Annual',
      description: 'Complete financial planning with ongoing support',
      features: [
        'All Basic Advisory features',
        'Detailed retirement planning',
        'Estate planning guidance',
        'Advanced tax optimization',
        'Quarterly portfolio reviews',
        'Unlimited consultation calls',
        'Annual plan updates',
      ],
      popular: true,
    },
    {
      name: 'Wealth Management',
      price: 'Custom Pricing',
      period: 'Based on AUM',
      description: 'For high net worth individuals and families',
      features: [
        'All Comprehensive Planning features',
        'Dedicated relationship manager',
        'Monthly portfolio reviews',
        'Multi-generational planning',
        'Succession planning',
        'NRI tax and investment advisory',
        'Personalized service',
      ],
    },
  ];

  return (
    <div>
      <PageBanner
        title={t('pricing')}
        breadcrumbs={[{ name: t('pricing'), href: '/pricing' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Our fee structure is clear, with no hidden charges. Choose the service level that best fits your needs.
            </p>
          </div>

          {/* Advisory Fee Structure */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 font-poppins text-center">Fee-Based Advisory</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {advisoryPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                    pkg.popular ? 'ring-2 ring-deepBlue transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-deepBlue to-emerald text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-2 font-poppins">{pkg.name}</h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-deepBlue">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">/ {pkg.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={20} className="text-emerald flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-medium transition-all ${
                        pkg.popular
                          ? 'bg-deepBlue hover:bg-opacity-90 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution Model */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Commission-Based Distribution</h3>
            <p className="text-gray-700 mb-6">
              For clients who prefer not to pay upfront advisory fees, we also offer commission-based mutual fund distribution services. Under this model:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-deepBlue">How It Works</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>No upfront fees from clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Commission paid by fund houses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Typically 0.5% - 1.5% annually on AUM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Full transparency on commissions received</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-deepBlue">Services Included</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Fund selection and research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Portfolio construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Transaction processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald flex-shrink-0 mt-1" />
                    <span>Periodic reviews and rebalancing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <Info size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-3 text-blue-900">Important Information</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>Fees are negotiable based on portfolio size and service requirements</li>
                  <li>All fees and commissions will be disclosed in writing before engagement</li>
                  <li>You have the freedom to choose between fee-based advisory or commission-based distribution</li>
                  <li>For complex cases, we offer customized pricing based on specific needs</li>
                  <li>Payment plans are available for comprehensive planning packages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-deepBlue">One-Time Services</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Portfolio Review</span>
                    <span className="font-medium">₹5,000 - ₹10,000</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Insurance Analysis</span>
                    <span className="font-medium">₹3,000 - ₹5,000</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Tax Planning Session</span>
                    <span className="font-medium">₹5,000 - ₹8,000</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Goal Planning Workshop</span>
                    <span className="font-medium">₹4,000 - ₹6,000</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-deepBlue">Specialized Advisory</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>NRI Advisory</span>
                    <span className="font-medium">Custom Pricing</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Business Financial Planning</span>
                    <span className="font-medium">Custom Pricing</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Estate Planning</span>
                    <span className="font-medium">Custom Pricing</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span>Second Opinion</span>
                    <span className="font-medium">₹3,000 - ₹5,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Not Sure Which Package Is Right for You?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your needs. We'll recommend the most suitable service level and provide a personalized quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-deepBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all"
              >
                Schedule Free Consultation
              </Link>
              <a
                href={`tel:[PHONE]`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-medium transition-all backdrop-blur-sm"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
