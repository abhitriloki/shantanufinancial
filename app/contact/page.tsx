'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, MessageCircle, Send } from 'lucide-react';

const CONTACT_INFO = {
  phone: '[PHONE]',
  whatsapp: '[WHATSAPP NUMBER]',
  email: '[EMAIL]',
  address: '[ADDRESS, GORAKHPUR, UP]',
  bookingLink: '[BOOKING LINK]',
  mapLink: '[MAP LINK]',
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    services: [] as string[],
    contactMethod: 'call',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const serviceOptions = [
    'Wealth Management',
    'Investment Planning',
    'Retirement Planning',
    'Insurance Advisory',
    'Tax Planning',
    'Estate Planning',
  ];

  return (
    <div>
      <PageBanner
        title={t('contact')}
        breadcrumbs={[{ name: t('contact'), href: '/contact' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-deepBlue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">{CONTACT_INFO.phone}</p>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I'd like to discuss financial planning`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">Quick Response</p>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-deepBlue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-600">{CONTACT_INFO.email}</p>
            </a>

            <a
              href={CONTACT_INFO.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-accentGold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Book Meeting</h3>
              <p className="text-sm text-gray-600">Schedule Online</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="calculator-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="calculator-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="calculator-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="calculator-input"
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Services of Interest (Select multiple)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({ ...formData, services: [...formData.services, service] });
                            } else {
                              setFormData({
                                ...formData,
                                services: formData.services.filter((s) => s !== service),
                              });
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {['call', 'whatsapp', 'email'].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span className="text-sm capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="calculator-input"
                    placeholder="Tell us about your financial goals..."
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      I consent to being contacted and agree to the Privacy Policy and Terms of Service. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-emerald/10 border border-emerald text-emerald px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Office Info & Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins">Visit Our Office</h2>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-deepBlue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Office Address</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    {CONTACT_INFO.mapLink && CONTACT_INFO.mapLink !== '[MAP LINK]' && (
                      <a
                        href={CONTACT_INFO.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deepBlue hover:underline text-sm mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    )}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                {CONTACT_INFO.mapLink && CONTACT_INFO.mapLink !== '[MAP LINK]' ? (
                  <iframe
                    src={CONTACT_INFO.mapLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="text-center p-8">
                    <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Map will be embedded here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
