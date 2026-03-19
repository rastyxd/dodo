import Nav from './components/Nav';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Moments from './components/Moments';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="fixed w-[300px] h-[300px] rounded-full top-[-80px] right-[-80px] -z-10 opacity-35 blur-[60px] bg-d-yellow" />
      <div className="fixed w-[200px] h-[200px] rounded-full bottom-[100px] left-[-60px] -z-10 opacity-35 blur-[60px] bg-d-peach" />
      <Nav />
      <Hero />
      <HowItWorks />
      <Moments />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
