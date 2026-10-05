import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { RepairPage } from '@/pages/RepairPage';
import { FaqPage } from '@/pages/FaqPage';
import { QuotePage } from '@/pages/QuotePage';
import { TipsPage } from '@/pages/TipsPage';
import { CleaningPage } from '@/pages/CleaningPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { type PageId } from '@/data/site';

function App() {
  const [page, setPage] = useState<PageId>('home');

  const handleNavigate = (newPage: PageId) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'XraySensorFix — Dental X-Ray Sensor & Imaging Repair Experts',
      products: 'Products — XraySensorFix',
      repair: 'Start Your Repair — XraySensorFix',
      faq: 'FAQ — XraySensorFix',
      quote: 'Free Quote — XraySensorFix',
      tips: 'Tips & Tricks — XraySensorFix',
      cleaning: 'Cleaning Process — XraySensorFix',
      contact: 'Contact Us — XraySensorFix',
      privacy: 'Privacy Policy — XraySensorFix',
      terms: 'Terms & Conditions — XraySensorFix',
    };
    document.title = titles[page];
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'repair':
        return <RepairPage />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      case 'tips':
        return <TipsPage onNavigate={handleNavigate} />;
      case 'cleaning':
        return <CleaningPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
