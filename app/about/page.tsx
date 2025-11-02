'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, TrendingUp, Shield, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const achievements = [
    { icon: Award, label: t('sebiCertified'), value: 'Verified' },
    { icon: Users, label: 'Clients Served', value: '500+' },
    { icon: TrendingUp, label: 'Years of Experience', value: '10+' },
    { icon: Shield, label: 'Trust Rating', value: '4.9/5' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings. Your trust is our most valuable asset.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'Every plan we create is customized to help you achieve your specific financial goals.',
    },
    {
      icon: Heart,
      title: 'Client-First Philosophy',
      description: 'Your financial wellbeing is our priority. We provide unbiased advice focused on your best interests.',
    },
  ];

  return (
    <div>
      <PageBanner
        title={t('about')}
        breadcrumbs={[{ name: t('about'), href: '/about' }]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center">
                <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-deepBlue">SP</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-4 font-poppins">Shantanu Pandey</h2>
              <p className="text-xl text-emerald font-semibold mb-4">{t('sebiCertified')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 10 years of experience in financial planning and wealth management, I am dedicated to helping individuals and families in Gorakhpur achieve their financial goals through personalized, goal-based planning strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My approach combines deep market knowledge with a genuine commitment to understanding your unique financial situation, ensuring every recommendation aligns with your long-term objectives.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-deepBlue to-emerald rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-deepBlue mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background & Qualifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 font-poppins">Background & Qualifications</h3>
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-deepBlue">Professional Certifications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <span>{t('sebiCertified')} - Registered Investment Advisor</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certified Financial Planner (CFP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <span>NISM Certified - Mutual Fund Distributor</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-deepBlue">Education</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <span>MBA in Finance - University of Delhi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <span>B.Com (Honors) - Banaras Hindu University</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-deepBlue">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Wealth Management', 'Retirement Planning', 'Investment Planning', 'Tax Planning', 'Insurance Planning', 'Estate Planning', 'Goal-based Planning', 'Portfolio Management'].map((area, index) => (
                  <span key={index} className="bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 font-poppins text-center">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-poppins">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Local Roots */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-poppins">Rooted in Gorakhpur</h3>
            <p className="text-lg leading-relaxed mb-4">
              Born and raised in Gorakhpur, I understand the unique financial needs and aspirations of our community. My deep connection to this region drives my commitment to providing accessible, high-quality financial planning services to local families and businesses.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're planning for your children's education, building wealth for retirement, or protecting your family's financial future, I'm here to guide you every step of the way with personalized advice rooted in local understanding and global best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
