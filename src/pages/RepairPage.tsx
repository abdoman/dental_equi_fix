import { useRef, type FormEvent } from 'react';
import { Package, Search, Wrench, CreditCard, CheckCircle2, ArrowRight, FileText, Truck, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useFormspree } from '@/hooks/useFormspree';
import { REPAIR_STEPS, type PageId } from '@/data/site';

const STEP_ICONS = [Truck, Search, Wrench, CreditCard];

export function RepairPage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Start Your Repair
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Dental X-Ray Sensor, 3D Scanner & Intraoral Camera Repair — Fast, Reliable, In-House Service
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mb-4">
              How Our Repair Service Works
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              A simple, transparent process designed to get your equipment back up and running quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REPAIR_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Package;
              return (
                <div
                  key={step.title}
                  className="reveal group relative rounded-2xl bg-neutral-50 card-shadow card-shadow-hover p-6"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                  {i < REPAIR_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-neutral-300" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Most repairs completed in 1–3 days', desc: 'Every repair includes a 6-month warranty for peace of mind.' },
              { title: 'Free repair estimate', desc: 'As soon as we receive your device, we send a free estimate by email or text.' },
              { title: 'Affordable repair cost: $250–$550', desc: 'Pricing depends on the model and type of damage.' },
              { title: 'Easy payment process', desc: 'We send a secure payment link by email or text. Once paid, we ship your device back ASAP.' },
              { title: '$100 discount available', desc: 'Complete our Google repair survey and receive $100 off your repair.' },
            ].map((benefit, i) => (
              <div
                key={benefit.title}
                className="reveal flex gap-4 rounded-2xl bg-white card-shadow p-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-neutral-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before You Ship */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal-scale rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 md:p-14">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-neutral-900 mb-4">
              Before You Ship Your Device
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Please fill out the Repair Form, submit, print, and include it inside your shipping package.
              This helps us process your repair quickly and send your estimate without delay.
            </p>
            <a
              href="#repair-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Fill Out Repair Form
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Repair Form */}
      <RepairFormSection />
    </div>
  );
}

/* ---------- REPAIR FORM ---------- */
function RepairFormSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useFormspree({ formType: 'Repair Form' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    submit(new FormData(formRef.current)).then(() => {
      if (status === 'success') formRef.current?.reset();
    });
  };

  return (
    <section id="repair-form" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mb-4">
            Repair Form
          </h2>
          <p className="text-neutral-500">Fill out the form below to start your repair process.</p>
        </div>

        {status === 'success' ? (
          <div className="reveal rounded-3xl bg-white card-shadow p-10 md:p-14 text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-3">Repair Form Submitted!</h3>
            <p className="text-neutral-600 max-w-lg mx-auto mb-8">
              Thank you! We've received your repair request. Please print your form details and include them
              in your shipping package. We'll contact you within 24 hours of receiving your device.
            </p>
            <button
              onClick={() => formRef.current?.reset()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-50 text-primary-600 font-semibold hover:bg-primary-100 transition-colors"
            >
              Submit Another Repair
            </button>
          </div>
        ) : (
        <form
          ref={formRef}
          className="reveal rounded-3xl bg-white card-shadow p-8 md:p-10 space-y-8"
          onSubmit={handleSubmit}
        >
          {/* General Info */}
          <div>
            <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">General Information</h3>
            <p className="text-sm text-neutral-500 mb-6">We need to know more about you!</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="Full Name" name="fullName" placeholder="Dr. John Smith" required />
              <FormField label="Practice / Company" name="company" placeholder="Smile Dental" />
              <FormField label="Email Address" name="email" type="email" placeholder="john@example.com" required />
              <FormField label="Phone Number" name="phone" type="tel" placeholder="(408) 555-0100" required />
            </div>
          </div>

          {/* Device Info */}
          <div>
            <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">Device Information</h3>
            <p className="text-sm text-neutral-500 mb-6">Tell us about the device you need repaired.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="Device Type" name="deviceType" placeholder="X-Ray Sensor / 3D Scanner / IntraOral Camera" required />
              <FormField label="Brand & Model" name="brandModel" placeholder="e.g. Dexis Platinum" required />
              <FormField label="Serial Number" name="serial" placeholder="If available" />
              <FormField
                label="Describe the Problem"
                name="problem"
                placeholder="e.g. No image, intermittent connectivity, cable damage"
                textarea
                required
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">Return Shipping Address</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Enter a shipping address for return shipping. A billing address may be entered later.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="Street Address" name="address" placeholder="123 Main St, Suite 100" required />
              <FormField label="City" name="city" placeholder="San Jose" required />
              <FormField label="State" name="state" placeholder="CA" required />
              <FormField label="ZIP Code" name="zip" placeholder="95110" required />
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-neutral-100">
            <p className="text-sm text-neutral-500">
              By submitting, you agree to our terms. We'll send a confirmation email shortly.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Repair Form
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
        )}
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClass =
    'w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200';
  return (
    <div className={textarea ? 'sm:col-span-2' : ''}>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} placeholder={placeholder} required={required} rows={3} className={baseClass} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={baseClass} />
      )}
    </div>
  );
}
