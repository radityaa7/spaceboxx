import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import About from './components/About';
import Services from './components/Services';
import FeaturedService from './components/FeaturedService';
import Process from './components/Process';
import WhySpacebox from './components/WhySpacebox';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-sb-bg text-sb-ink">
      <Navbar />
      <main>
        <Hero />
        {/* <TrustSection /> */}
        <About />
        <Services />
        <FeaturedService />
        <Process />
        <WhySpacebox />
        <Portfolio />
        <Testimonials />
        <Team />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
