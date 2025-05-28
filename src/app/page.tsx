'use client';
import { Navbar } from '@/components/ui/navbar';
import FaqSection from '@/components/FaqSection';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';
import Pricing from '@/components/Pricing';
import ProjectShowcase from '@/components/ProjectShowcase';
import Process from '@/components/Process';
import Hero from '@/components/Hero';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <AboutMe />
      <ProjectShowcase />
      <Pricing />
      <Process />
      <Testimonial />
      <ContactUs />
      <FaqSection />

      <Footer />
    </>
  );
}
