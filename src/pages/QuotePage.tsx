import { useRef, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Tag, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useFormspree } from '@/hooks/useFormspree';
import { type PageId } from '@/data/site';

export function QuotePage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useFormspree({ formType: 'Free Quote Request' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    submit(new FormData(formRef.current)).then(() => {
      if (status === 'success') formRef.current?.reset();
    });
  };

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-500/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Free Quote
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Get a no-obligation repair estimate for your dental imaging equipment. No cost, no commitment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: '24-Hour Response', desc: 'We respond to all quote requests within one business day.' },
              { icon: ShieldCheck, title: 'No Obligation', desc: 'Free estimate with zero commitment. You decide if you want to proceed.' },
              { icon: Tag, title: 'Save Up to 70%', desc: 'Repair costs a fraction of replacement. See your savings instantly.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="reveal text-center rounded-2xl bg-neutral-50 card-shadow p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            className="reveal rounded-3xl bg-neutral-50 card-shadow p-8 md:p-10 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-4">
              <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">Request Your Free Quote</h2>
              <p className="text-sm text-neutral-500">Fill out the form and we'll send your estimate within 24 hours.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Dr. John Smith"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(408) 555-0100"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Device Type *</label>
                <select
                  name="deviceType"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                >
                  <option value="">Select device type</option>
                  <option>Dental X-Ray Sensor</option>
                  <option>3D Scanner Camera</option>
                  <option>IntraOral Camera</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">Brand & Model</label>
                <input
                  type="text"
                  name="brandModel"
                  placeholder="e.g. Dexis Platinum, Carestream RVG-6100"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">Describe the Problem *</label>
                <textarea
                  name="problem"
                  rows={4}
                  placeholder="Describe the issue you're experiencing with your device..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-700">
                  Thank you! Your quote request has been sent. We'll respond within 24 hours.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="reveal mt-10 text-center">
            <p className="text-neutral-500">
              Prefer to talk? Call us at{' '}
              <a href="tel:408-657-8601" className="text-primary-600 font-semibold">
                408-657-8601
              </a>{' '}
              or{' '}
              <button onClick={() => onNavigate('contact')} className="text-accent-600 font-semibold hover:underline">
                send us a message
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
