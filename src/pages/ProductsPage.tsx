import { ArrowRight, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRODUCTS, type PageId } from '@/data/site';
import { ProductSlideshow } from '@/components/ProductSlideshow';
import { productImageMap } from '@/data/productImages';

export function ProductsPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-accent-500/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 animate-fade-in-up">
            Our Products
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Professional repair services for all your dental imaging equipment. Contact us for details and pricing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.title}
                className="reveal group rounded-2xl bg-neutral-50 card-shadow card-shadow-hover overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden bg-neutral-50">
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
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-sm text-neutral-400 mb-6">
                    Contact us for detailed product information and repair options.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-primary-600">
                      {product.price}
                      <span className="text-sm font-normal text-neutral-400"> starting</span>
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-10 text-center">
            <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Ship your device to us or get a free quote. Our expert technicians are ready to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('repair')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Repair <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-600 font-semibold border border-primary-200 hover:bg-primary-50 transition-all duration-300"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
