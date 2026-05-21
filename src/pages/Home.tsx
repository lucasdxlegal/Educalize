import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Benefits from "../components/sections/Benefits";
import About from "../components/sections/About";
import Platform from "../components/sections/Platform";
import Certificate from "../components/sections/Certificate";
import Content from "../components/sections/Content";
import Testimonials from "../components/sections/Testimonials";
import Offer from "../components/sections/Offer";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div id="home-page-container" className="min-h-screen bg-[#020617] text-gray-100 font-sans selection:bg-brand-blue selection:text-white relative">
      {/* Background atmospheric accent effects as defined in Geometric Balance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[100px] pointer-events-none z-0"></div>
      {/* Floating Sticky Glass Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero Block */}
        <Hero />

        {/* Core Product Benefits */}
        <Benefits />

        {/* Detailed Narrative explaining mission & target audiences */}
        <About />

        {/* Premium Dashboard & Lessons platform preview */}
        <Platform />

        {/* Double Gold-Sealed authentic credentials validation */}
        <Certificate />

        {/* Slide-expandable lesson modules curriculum accordion */}
        <Content />

        {/* Teacher star ratings carousel feedback slider */}
        <Testimonials />

        {/* High-value core offer details */}
        <Offer />

        {/* Clean animated frequently asked questions */}
        <FAQ />
      </main>

      {/* Cinematic End-of-Funnel Conversion Box and footer metrics */}
      <Footer />
    </div>
  );
}
