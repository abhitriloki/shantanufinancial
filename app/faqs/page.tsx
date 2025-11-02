'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQsPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer as a SEBI-certified financial consultant?',
      answer: 'We offer comprehensive financial planning services including wealth management, investment planning, retirement planning, tax planning, insurance advisory, estate planning, and goal-based financial planning. Each service is tailored to your unique financial situation and goals.',
    },
    {
      question: 'How are you different from other financial advisors?',
      answer: 'As a SEBI-certified consultant, we adhere to strict regulatory standards and ethical guidelines. We provide unbiased, goal-based financial planning with complete transparency. Our approach focuses on your long-term financial wellbeing rather than pushing specific products.',
    },
    {
      question: 'What are your fees for financial planning services?',
      answer: 'Our fee structure depends on the scope and complexity of services required. We offer both fee-based advisory and commission-based distribution models. We provide complete transparency in our fee structure during the initial consultation. Please visit our Pricing page or contact us for detailed information.',
    },
    {
      question: 'How do I get started with financial planning?',
      answer: 'Getting started is easy! Simply book a free initial consultation through our website, WhatsApp, or phone. During this meeting, we'll discuss your financial goals, current situation, and how we can help. There's no obligation, and we'll provide clear next steps based on your needs.',
    },
    {
      question: 'What documents do I need to bring for the first meeting?',
      answer: 'For the initial consultation, bring any existing investment statements, insurance policies, tax returns, details of assets and liabilities, and information about your financial goals. Don't worry if you don't have everything - we can work with what you have and gather additional information over time.',
    },
    {
      question: 'Do you work with clients outside Gorakhpur?',
      answer: 'Yes! While we're based in Gorakhpur, we serve clients across India. We offer virtual consultations via video calls, making it convenient to work with us regardless of your location. We also provide NRI advisory services for clients living abroad.',
    },
    {
      question: 'What is goal-based financial planning?',
      answer: 'Goal-based planning means creating a customized financial strategy aligned with your specific life goals - whether it's buying a home, funding children's education, planning retirement, or building wealth. We quantify each goal, create a roadmap to achieve it, and regularly monitor progress.',
    },
    {
      question: 'How often will we review my financial plan?',
      answer: 'We recommend quarterly reviews for active portfolios and at least annual reviews for all clients. We also conduct reviews when there are significant life changes (marriage, childbirth, job change, etc.) or major market movements. You can always reach out for ad-hoc reviews as needed.',
    },
    {
      question: 'Are mutual fund investments safe?',
      answer: 'Mutual funds are subject to market risks, and returns are not guaranteed. However, when properly selected based on your risk profile and investment horizon, mutual funds can be an effective tool for wealth creation. We help you choose appropriate funds and diversify to manage risk effectively.',
    },
    {
      question: 'What is your investment philosophy?',
      answer: 'We believe in long-term, disciplined investing aligned with your goals and risk tolerance. We focus on asset allocation, diversification, and regular portfolio rebalancing. We avoid market timing and focus on staying invested through market cycles to benefit from compounding.',
    },
    {
      question: 'Do you provide tax filing services?',
      answer: 'We provide tax planning advice to optimize your tax liability through strategic investments and planning. However, for actual tax filing and legal interpretation, we recommend consulting a Chartered Accountant. We work collaboratively with CAs to ensure comprehensive financial management.',
    },
    {
      question: 'How do I know if I'm saving enough for retirement?',
      answer: 'Use our Retirement Calculator on the Tools page for a quick estimate, or book a consultation for a detailed retirement analysis. We'll assess your current savings, expected expenses, inflation, and investment returns to create a personalized retirement plan that ensures financial freedom in your golden years.',
    },
  ];

  return (
    <div>
      <PageBanner
        title={t('faqs')}
        breadcrumbs={[{ name: t('faqs'), href: '/faqs' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, processes, and financial planning.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-semibold text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-deepBlue flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Still Have Questions?</h3>
            <p className="mb-6">
              Can't find the answer you're looking for? Feel free to reach out to us directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-deepBlue hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Contact Us
              </a>
              <a
                href="[BOOKING LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all backdrop-blur-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
