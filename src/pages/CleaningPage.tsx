import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CLEANING_STEPS, type PageId } from '@/data/site';

export function CleaningPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 animate-fade-in">
            <Sparkles className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Cleaning Process
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Proper cleaning extends the life of your dental imaging sensors and cameras. Follow our
            step-by-step guide for safe, effective maintenance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-accent-200 hidden md:block" />

            <div className="space-y-8">
              {CLEANING_STEPS.map((step, i) => (
                <div
                  key={step.step}
                  className="reveal-left relative flex gap-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-heading font-bold shadow-lg z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 rounded-2xl bg-neutral-50 card-shadow p-6">
                    <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-3">
              Need Professional Help?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              If cleaning doesn't resolve your issue, our technicians are ready to diagnose and repair your
              equipment. Get started today.
            </p>
            <button
              onClick={() => onNavigate('repair')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Repair <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
