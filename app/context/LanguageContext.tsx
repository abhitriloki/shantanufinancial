'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    process: 'Process',
    pricing: 'Fees',
    blog: 'Insights',
    tools: 'Tools',
    about: 'About',
    compliance: 'Compliance',
    faqs: 'FAQs',
    contact: 'Contact',
    
    // Hero
    heroHeadline: 'SEBI-Certified Financial Consultant in Gorakhpur',
    heroSubheadline: 'Goal-based planning to build, protect, and grow your wealth.',
    bookMeeting: 'Book a Meeting',
    whatsappUs: 'WhatsApp Us',
    callNow: 'Call Now',
    nextAvailableSlots: 'Next Available Slots',
    
    // Services
    wealthManagement: 'Wealth Management',
    wealthDesc: 'End-to-end portfolio design, risk management, and periodic rebalancing.',
    investmentPlanning: 'Investment Planning',
    investmentDesc: 'Equity, debt, and hybrid strategies aligned to your goals and risk profile.',
    retirementPlanning: 'Retirement Planning',
    retirementDesc: 'Plan for financial freedom with sustainable withdrawal and tax-efficient assets.',
    insuranceDecisions: 'Insurance Decisions',
    insuranceDesc: 'Right-size life, health, and term cover to protect your family.',
    learnMore: 'Learn More',
    
    // Process
    processTitle: 'Our Process',
    discover: 'Discover',
    plan: 'Plan',
    implement: 'Implement',
    review: 'Review',
    discoverDesc: 'We understand your financial goals, risk tolerance, and current situation.',
    planDesc: 'We create a customized financial plan tailored to your specific needs.',
    implementDesc: 'We help you execute the plan with the right investment vehicles.',
    reviewDesc: 'We monitor and adjust your portfolio regularly to stay on track.',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Disclaimers
    disclaimer1: 'Investments are subject to market risks. Past performance is not indicative of future results.',
    disclaimer2: 'Content on this website is for educational purposes only and does not constitute investment advice.',
    disclaimer3: 'Mutual Fund investments are subject to market risks; read all scheme related documents carefully.',
    
    // Calculators
    sipCalculator: 'SIP Calculator',
    retirementCalculator: 'Retirement Corpus Calculator',
    emiCalculator: 'EMI Calculator',
    goalPlanner: 'Goal Planner',
    loanEmiCalculator: 'Loan EMI Calculator',
    interestCalculator: 'Interest Calculator',
    calculate: 'Calculate',
    reset: 'Reset',
    results: 'Results',
    calculatorDisclaimer: 'Results are estimates only. Consult advisor for personalized advice.',
    
    // Common
    sebiCertified: 'SEBI Certified',
    yearsExperience: 'Years of Experience',
  },
  hi: {
    // Header
    home: 'होम',
    services: 'सेवाएं',
    process: 'प्रक्रिया',
    pricing: 'शुल्क',
    blog: 'लेख',
    tools: 'उपकरण',
    about: 'हमारे बारे में',
    compliance: 'अनुपालन',
    faqs: 'सामान्य प्रश्न',
    contact: 'संपर्क करें',
    
    // Hero
    heroHeadline: 'गोरखपुर में SEBI-प्रमाणित वित्तीय सलाहकार',
    heroSubheadline: 'अपनी संपत्ति बनाने, सुरक्षित करने और बढ़ाने के लिए लक्ष्य-आधारित योजना।',
    bookMeeting: 'मीटिंग बुक करें',
    whatsappUs: 'व्हाट्सएप करें',
    callNow: 'अभी कॉल करें',
    nextAvailableSlots: 'अगली उपलब्ध स्लॉट',
    
    // Services
    wealthManagement: 'संपत्ति प्रबंधन',
    wealthDesc: 'पूर्ण पोर्टफोलियो डिज़ाइन, जोखिम प्रबंधन और समय-समय पर पुनर्संतुलन।',
    investmentPlanning: 'निवेश योजना',
    investmentDesc: 'आपके लक्ष्यों और जोखिम प्रोफ़ाइल के अनुरूप इक्विटी, ऋण और हाइब्रिड रणनीतियाँ।',
    retirementPlanning: 'सेवानिवृत्ति योजना',
    retirementDesc: 'स्थायी निकासी और कर-कुशल संपत्तियों के साथ वित्तीय स्वतंत्रता की योजना।',
    insuranceDecisions: 'बीमा निर्णय',
    insuranceDesc: 'अपने परिवार की सुरक्षा के लिए जीवन, स्वास्थ्य और टर्म कवर।',
    learnMore: 'और जानें',
    
    // Process
    processTitle: 'हमारी प्रक्रिया',
    discover: 'खोज',
    plan: 'योजना',
    implement: 'कार्यान्वयन',
    review: 'समीक्षा',
    discoverDesc: 'हम आपके वित्तीय लक्ष्यों, जोखिम सहनशीलता और वर्तमान स्थिति को समझते हैं।',
    planDesc: 'हम आपकी विशिष्ट आवश्यकताओं के अनुरूप एक अनुकूलित वित्तीय योजना बनाते हैं।',
    implementDesc: 'हम सही निवेश साधनों के साथ योजना को लागू करने में मदद करते हैं।',
    reviewDesc: 'हम ट्रैक पर बने रहने के लिए नियमित रूप से आपके पोर्टफोलियो की निगरानी और समायोजन करते हैं।',
    
    // Footer
    quickLinks: 'त्वरित लिंक',
    contactInfo: 'संपर्क जानकारी',
    followUs: 'हमें फॉलो करें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
    
    // Disclaimers
    disclaimer1: 'निवेश बाजार जोखिमों के अधीन हैं। पिछला प्रदर्शन भविष्य के परिणामों का संकेत नहीं है।',
    disclaimer2: 'इस वेबसाइट पर सामग्री केवल शैक्षिक उद्देश्यों के लिए है और निवेश सलाह नहीं है।',
    disclaimer3: 'म्यूचुअल फंड निवेश बाजार जोखिमों के अधीन हैं; सभी योजना संबंधित दस्तावेजों को ध्यान से पढ़ें।',
    
    // Calculators
    sipCalculator: 'SIP कैलकुलेटर',
    retirementCalculator: 'सेवानिवृत्ति कैलकुलेटर',
    emiCalculator: 'EMI कैलकुलेटर',
    goalPlanner: 'लक्ष्य योजनाकार',
    loanEmiCalculator: 'लोन EMI कैलकुलेटर',
    interestCalculator: 'ब्याज कैलकुलेटर',
    calculate: 'गणना करें',
    reset: 'रीसेट करें',
    results: 'परिणाम',
    calculatorDisclaimer: 'परिणाम केवल अनुमान हैं। व्यक्तिगत सलाह के लिए सलाहकार से परामर्श करें।',
    
    // Common
    sebiCertified: 'SEBI प्रमाणित',
    yearsExperience: 'वर्षों का अनुभव',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
