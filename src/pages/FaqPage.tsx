import { useState } from 'react';
import { ChevronDown, Phone, Mail, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FAQS, type PageId } from '@/data/site';

export function FaqPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-500/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 animate-fade-in">
            <HelpCircle className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Answers to common questions about our dental imaging repair services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="reveal rounded-2xl bg-neutral-50 card-shadow overflow-hidden"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 text-primary-600 font-heading font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-heading font-semibold text-neutral-900">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 pl-16 text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              We're here to help. Reach out and our team will get back to you quickly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:408-657-8601"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                408-657-8601
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-600 font-semibold border border-primary-200 hover:bg-primary-50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
