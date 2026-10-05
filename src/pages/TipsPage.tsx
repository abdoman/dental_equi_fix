import { Lightbulb, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TIPS, type PageId } from '@/data/site';

export function TipsPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-500/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 animate-fade-in">
            <Lightbulb className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Tips & Tricks
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Expert advice to keep your dental imaging equipment running smoothly and avoid costly repairs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((tip, i) => (
              <div
                key={tip.title}
                className="reveal group rounded-2xl bg-neutral-50 card-shadow card-shadow-hover p-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <span className="font-heading font-bold text-primary-600">{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-900 pt-1.5">{tip.title}</h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Warning box */}
          <div className="reveal mt-12 rounded-2xl bg-yellow-50 border border-yellow-200 p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-neutral-900 mb-1">Important Notice</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                These tips are general guidelines. Always refer to your device manufacturer's documentation
                for specific care instructions. If you're unsure, contact us — we're happy to help.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-3">
              Still Having Issues With Your Equipment?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Don't wait until it gets worse. Get a free diagnostic and quote from our expert technicians.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('repair')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Repair <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-600 font-semibold border border-primary-200 hover:bg-primary-50 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5" />
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
