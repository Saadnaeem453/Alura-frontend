import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PricingSection from '@/components/sections/PricingSection';
import AboutSection from '@/components/sections/AboutSection';
import ParticlesBackground from '@/components/ui/particles/ParticlesBackground';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Alura | Advanced Cloud-based Call Center Solution</title>
        <meta name="description" content="Alura - A modern cloud-based call center platform. Customize agents, make calls to leads, and purchase Twilio numbers with ease." />
        <meta name="keywords" content="call center, cloud calling, twilio, vapi, voice api, call agents, business communication" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen bg-secondary-900 text-gray-100 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10">
          <Navbar />
          
          <main className=''>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PricingSection />
            <AboutSection />
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
}
