import { FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TERMS_CONDITIONS, type PageId } from '@/data/site';

export function TermsPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 animate-fade-in">
            <FileText className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-white/60 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Last Updated: {TERMS_CONDITIONS.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="text-neutral-600 leading-relaxed mb-8">{TERMS_CONDITIONS.intro}</p>

            <div className="space-y-8">
              {TERMS_CONDITIONS.sections.map((section, i) => (
                <div key={i} className="reveal">
                  <h2 className="font-heading font-bold text-xl text-neutral-900 mb-3">{section.title}</h2>
                  {section.body && <p className="text-neutral-600 leading-relaxed mb-3">{section.body}</p>}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-neutral-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="text-neutral-600 leading-relaxed mt-3 font-medium">{section.note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-100">
              <button
                onClick={() => onNavigate('privacy')}
                className="text-primary-600 font-medium hover:underline"
              >
                View our Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
