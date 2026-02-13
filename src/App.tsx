
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhatsIncluded from './components/WhatsIncluded';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden selection:bg-[#25D366] selection:text-[#0A0F1E]">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>

        <Features />
        <HowItWorks />
        <WhatsIncluded />
        <SocialProof />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
