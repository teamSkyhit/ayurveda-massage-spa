import Hero from "../components/Hero";
import About from "../components/About";
import Treatments from "../components/Treatments";
import ProcessSection from "../components/ProcessSection";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import SeoAccordion from "../components/SeoAccordion";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Treatments />
      <ProcessSection />
      <Features />
      <Gallery />
      <Booking />
      <SeoAccordion />
    </div>
  );
}
