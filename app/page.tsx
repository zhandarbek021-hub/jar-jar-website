import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Location from '@/components/sections/Location';
import Advantages from '@/components/sections/Advantages';
import Apartments from '@/components/sections/Apartments';
import Gallery from '@/components/sections/Gallery';
import Infrastructure from '@/components/sections/Infrastructure';
import Construction from '@/components/sections/Construction';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Advantages />
      <Apartments />
      <Gallery />
      <Infrastructure />
      <Construction />
      <Contact />
      <Footer />
    </main>
  );
}
