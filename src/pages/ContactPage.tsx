import { useRef, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useFormspree } from '@/hooks/useFormspree';

export function ContactPage() {
  const containerRef = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useFormspree({ formType: 'Contact Message' });

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
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent-500/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 animate-fade-in">
            <MessageSquare className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We're here to help with your dental X-ray sensor, 3D scanner & camera repairs, or anything else.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="reveal-left">
                <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">Get in Touch</h2>
                <p className="text-neutral-500 mb-6">
                  Reach out through any of the channels below. We typically respond within a few hours during
                  business hours.
                </p>

                <div className="space-y-4">
                  <ContactInfoCard
                    icon={Phone}
                    label="Phone"
                    value="408-657-8601"
                    href="tel:408-657-8601"
                    sub="Remote Support Line"
                  />
                  <ContactInfoCard
                    icon={Mail}
                    label="Email"
                    value="info@xraysensorfix.com"
                    href="mailto:info@xraysensorfix.com"
                    sub="We reply within 24 hours"
                  />
                  <ContactInfoCard
                    icon={MapPin}
                    label="Location"
                    value="San Jose, California, USA"
                    sub="Ship devices to our lab"
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div className="reveal-left rounded-2xl bg-neutral-50 card-shadow p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-heading font-semibold text-neutral-900">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-neutral-600">{item.day}</span>
                      <span className={`font-medium ${item.hours === 'Closed' ? 'text-red-500' : 'text-neutral-900'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                ref={formRef}
                className="reveal-right rounded-3xl bg-neutral-50 card-shadow p-8 md:p-10 space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">Send Us a Message</h2>
                  <p className="text-sm text-neutral-500">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(408) 555-0100"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option>Repair Inquiry</option>
                      <option>Free Quote Request</option>
                      <option>Technical Support</option>
                      <option>Warranty Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your device and the issue you're experiencing..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="text-sm text-green-700">
                      Thank you! Your message has been sent. We'll get back to you shortly.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2 border-t border-neutral-100">
                  <p className="text-sm text-neutral-500">
                    We'll never share your information. Privacy is our priority.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  sub,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  sub: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 card-shadow card-shadow-hover p-5">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">{label}</p>
        <p className="font-heading font-bold text-neutral-900">{value}</p>
        <p className="text-xs text-neutral-500">{sub}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
