import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustBadges />
      <Services />
      <Testimonials />
      <Pricing />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
