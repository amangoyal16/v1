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
import Pricing from '@/components/Pricing';
import ProjectShowcase from '@/components/ProjectShowcase';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import CaseStudySection from '@/components/CaseStudySection';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: 'url(/noise.webp)',
          backgroundSize: '30%',
        }}
      ></div>
      <Hero />
      <AboutMe />
      <ProjectShowcase />
      <Pricing />
      <TestimonialCarousel />
      <FaqSection />
      <Footer />
    </div>
  );
}
