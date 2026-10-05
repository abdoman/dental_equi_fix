import { useEffect, useState } from 'react';
import {
  Award,
  Headset,
  Layers,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  ShieldCheck,
  Wrench,
  Microscope,
  Camera,
  Activity,
  Quote,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ProductSlideshow } from '@/components/ProductSlideshow';
import { productImageMap } from '@/data/productImages';
import {
  SERVICES,
  FEATURES,
  TESTIMONIALS,
  PRODUCTS,
  SENSOR_BRANDS,
  SCANNER_BRANDS,
  CAMERA_BRANDS,
  BRANDS,
  type PageId,
} from '@/data/site';

const ICON_MAP: Record<string, typeof Award> = {
  award: Award,
  headset: Headset,
  layers: Layers,
  clock: Clock,
  sensor: Microscope,
  scanner: Activity,
  camera: Camera,
};

const HERO_IMG =
  'https://images.pexels.com/photos/6501869/pexels-photo-6501869.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop';
const LAB_IMG =
  'https://images.pexels.com/photos/38145576/pexels-photo-38145576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <HeroSection onNavigate={onNavigate} />
      <BrandsSection />
      <AboutSection />
      <ServicesSection onNavigate={onNavigate} />
      <FeaturesSection />
      <BrandLogosSection />
      <ProductsSection onNavigate={onNavigate} />
      <TestimonialsSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent-500/15 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-primary-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-white/90 font-medium">6-Month Warranty on All Repairs</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Dental X-Ray Sensor &{' '}
              <span className="gradient-text">Imaging Repair</span> Experts
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Precision repairs for the modern dental practice. Don't let equipment downtime slow your practice.
              Your high-tech diagnostic tools deserve specialist care.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Save Thousands', 'Fast Turnaround', 'Free Support'].map((tag, i) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass"
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + i * 0.1}s both` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  <span className="text-sm text-white font-medium">{tag}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('repair')}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Repair
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/30 to-accent-500/30 blur-2xl" />
              <img
                src={HERO_IMG}
                alt="Dental X-ray sensor in use"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] max-h-[600px]"
              />
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-neutral-900">1–3</p>
                    <p className="text-xs text-neutral-500">Days Turnaround</p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-600 fill-primary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-neutral-900">500+</p>
                    <p className="text-xs text-neutral-500">Sensors Repaired</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- BRANDS LIST ---------- */
function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <BrandCard title="Xray Sensors Repair Brands:" brands={SENSOR_BRANDS} />
          <BrandCard title="3D Scanner Repair Brands:" brands={SCANNER_BRANDS} />
          <BrandCard title="IntraOral Camera Repair Brands:" brands={CAMERA_BRANDS} />
        </div>
        <div className="text-center mt-10 reveal">
          <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
            Sensors & cameras, all brands — all repaired in-house.
          </h2>
        </div>
      </div>
    </section>
  );
}

function BrandCard({ title, brands }: { title: string; brands: string[] }) {
  return (
    <div className="reveal card-shadow card-shadow-hover rounded-2xl p-6 bg-neutral-50">
      <h3 className="font-heading font-semibold text-neutral-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <span
            key={brand}
            className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-sm text-neutral-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-200 to-accent-200 blur-2xl opacity-60" />
              <img
                src={LAB_IMG}
                alt="Technician repairing dental sensor electronics"
                className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-primary-600" />
                  <span className="font-heading font-bold text-neutral-900">In-House Lab</span>
                </div>
                <p className="text-xs text-neutral-500">
                  All repairs done in our state-of-the-art facility. No outsourcing.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              About Us
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mt-2 mb-6">
              About Xray Sensor Fix
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We are a specialized repair service dedicated to dental imaging equipment. With over 30 years
              of combined experience, our certified technicians have repaired thousands of dental X-ray
              sensors, 3D scanner cameras, and intraoral cameras from every major brand.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Our mission is simple: extend the life of your expensive imaging equipment with professional-grade
              repairs, rigorous testing, and honest pricing — saving you thousands compared to replacement.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '30+', label: 'Years Experience' },
                { num: '500+', label: 'Sensors Repaired' },
                { num: '10+', label: 'Brands Supported' },
                { num: '6mo', label: 'Warranty Period' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white card-shadow p-4"
                  style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both` }}
                >
                  <p className="text-2xl font-heading font-bold text-primary-600">{stat.num}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function ServicesSection({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Services</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mt-2">Our Services</h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
            Comprehensive repair services for all your dental imaging equipment needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Microscope;
            return (
              <div
                key={service.title}
                className="reveal group rounded-2xl bg-neutral-50 card-shadow card-shadow-hover p-8 cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => onNavigate('repair')}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600">{service.price}</span>
                  <span className="flex items-center gap-1 text-sm text-accent-600 font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
function FeaturesSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Xray Sensor Fix
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mt-2">
            Trusted by Dental Professionals
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] ?? Award;
            return (
              <div
                key={feature.title}
                className="reveal-scale group text-center rounded-2xl bg-white card-shadow card-shadow-hover p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- BRAND LOGOS ---------- */
function BrandLogosSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Xray Sensor Fix
          </span>
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-2">
            We Work With All Major Brands
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee shrink-0">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center w-40 h-24 rounded-2xl bg-neutral-50 border border-neutral-200 shrink-0 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-heading font-bold text-lg text-neutral-400 hover:text-primary-600 transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function ProductsSection({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Xray Sensor Fix
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mt-2">Our Products</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.title}
              className="reveal group rounded-2xl bg-white card-shadow card-shadow-hover overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-neutral-50">
                <ProductSlideshow
                  images={productImageMap[product.title] ?? [product.image]}
                  alt={product.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-semibold shadow-lg z-10">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">{product.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-heading font-bold text-primary-600">
                    {product.price}
                    <span className="text-sm font-normal text-neutral-400"> starting</span>
                  </p>
                  <button
                    onClick={() => onNavigate('products')}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-medium text-sm hover:bg-primary-100 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === active ? 'opacity-100 translate-y-0' : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="rounded-3xl bg-neutral-50 card-shadow p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-bold text-neutral-900">{t.author}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-primary-600' : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent-500/15 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal-scale">
        <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-6">
          Ready to Fix Your Sensor?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Fast, affordable, and reliable dental X-ray sensor repair trusted by dentists, DSOs, and imaging
          dealers nationwide. Get your free estimate today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onNavigate('repair')}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Repair
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
