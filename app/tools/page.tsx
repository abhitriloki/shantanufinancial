'use client';

import PageBanner from '../components/PageBanner';
import Calculators from '../components/Calculators';
import { useLanguage } from '../context/LanguageContext';

export default function ToolsPage() {
  const { t } = useLanguage();

  return (
    <div>
      <PageBanner
        title={t('tools')}
        breadcrumbs={[{ name: t('tools'), href: '/tools' }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Financial Calculators</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our free financial calculators to plan your investments, estimate returns, and make informed financial decisions. All calculators provide instant results and detailed breakdowns.
            </p>
          </div>

          <Calculators />
        </div>
      </div>
    </div>
  );
}
