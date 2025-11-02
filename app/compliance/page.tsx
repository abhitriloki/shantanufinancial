'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { Shield, FileText, AlertTriangle, Phone, Mail } from 'lucide-react';

export default function CompliancePage() {
  const { t } = useLanguage();

  return (
    <div>
      <PageBanner
        title={t('compliance')}
        breadcrumbs={[{ name: t('compliance'), href: '/compliance' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* SEBI Registration */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-deepBlue rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 font-poppins">SEBI Registration</h2>
                <p className="text-gray-600">
                  Shantanu Pandey is a {t('sebiCertified')} professional operating under the regulatory framework of the Securities and Exchange Board of India.
                </p>
              </div>
            </div>

            <div className="bg-emerald/10 border border-emerald rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-deepBlue">Registration Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration Type:</span>
                  <span className="font-medium">{t('sebiCertified')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Advisor Name:</span>
                  <span className="font-medium">Shantanu Pandey</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-emerald">Active & Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimers */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-accentGold rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 font-poppins">Important Disclaimers</h2>
                <p className="text-gray-600">
                  Please read these important disclosures carefully before proceeding with any investment decisions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-medium text-yellow-800">
                  {t('disclaimer1')}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-medium text-yellow-800">
                  {t('disclaimer2')}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-medium text-yellow-800">
                  {t('disclaimer3')}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-medium text-yellow-800">
                  Estate planning content is informational only; please consult a qualified lawyer for legal advice.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-medium text-yellow-800">
                  Tax planning content is informational only; please consult a Chartered Accountant for filing or legal interpretation.
                </p>
              </div>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 font-poppins">Code of Conduct</h2>
                <p className="text-gray-600">
                  We adhere to the highest standards of professional conduct and ethics as mandated by SEBI.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-deepBlue">Our Commitments</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Provide unbiased, client-focused financial advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Maintain complete transparency in all dealings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Disclose all conflicts of interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Protect client confidentiality and data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Comply with all regulatory requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Avoid misleading claims or guaranteed returns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Grievance Redressal */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-deepBlue rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 font-poppins">Grievance Redressal</h2>
                <p className="text-gray-600">
                  If you have any complaints or concerns, please reach out to us using the contact information below.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-deepBlue">Contact for Complaints</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-deepBlue" />
                    <span>[PHONE]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-deepBlue" />
                    <span>[EMAIL]</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-deepBlue">SEBI SCORES Portal</h3>
                <p className="text-sm text-gray-700 mb-3">
                  For unresolved grievances, you may register your complaint on the SEBI Complaints Redress System (SCORES):
                </p>
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-deepBlue hover:underline text-sm font-medium"
                >
                  Visit SEBI SCORES Portal →
                </a>
              </div>

              <div className="bg-emerald/10 border border-emerald rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Response Time:</strong> We aim to acknowledge all complaints within 48 hours and resolve them within 15 working days. For complex matters, we'll keep you informed of the progress.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              For more information about SEBI regulations and investor protection, visit:
            </p>
            <a
              href="https://www.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-deepBlue hover:underline font-medium"
            >
              SEBI Official Website →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
