'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import { Navbar } from '@/components/ui/navbar';
import { motion } from 'framer-motion';
import FaqSection from '@/components/FaqSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';
import Process from '@/components/Process';
import ProjectShowcase from '@/components/ProjectShowcase';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import CaseStudySection from '@/components/CaseStudySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Project Showcase */}
      <ProjectShowcase />
      {/* Process Section - From Chaos to Clarity */}
      <Process />
      {/* Case Studies Section */}
      <CaseStudySection />
      {/* Services Section */}
      <Services />
      {/* About Me Section */}
      <AboutMe />
      {/* FAQ Section */}
      <FaqSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
