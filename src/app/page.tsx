/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import { Navbar } from '@/components/ui/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 animate-fade-in">
            <p className="text-xl font-medium mb-2">
              👋 Let's create something amazing together!
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in-up">
            Designing for{' '}
            <span className="inline-block rotate-3 transform hover:rotate-6 transition-transform duration-300">
              🚀
            </span>{' '}
            brands,
            <span className="block mt-2">founders & experiences</span>
            <span className="block mt-2 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              that inspire and connect.
            </span>
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Since 2018, I've helped 50+ founders transform their brands across
            AI, dating, healthcare, e-commerce, fashion and more through designs
            that create meaningful connections.
          </p>
          <div className="flex flex-wrap gap-6 mt-10 justify-center animate-fade-in-up delay-200">
            <Button className="rounded-full px-10 py-6 bg-black hover:bg-black/80 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Work
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-10 py-6 border-2 text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Call →
            </Button>
          </div>
        </div>
      </header>

      {/* UI Mockups Display - Floating Effect */}
      <div className="container mx-auto px-4 pb-16 md:pb-24 -mt-4 relative">
        <div className="relative w-full overflow-hidden rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-700 ease-in-out">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          <Image
            src="/dashboard-mockups.svg"
            alt="UI Dashboard Mockups"
            width={1200}
            height={600}
            className="w-full object-cover relative z-10"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-10 right-20 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-70 animate-pulse delay-700"></div>
      </div>

      {/* Project Showcase */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-baseline mb-12">
            <h2 className="text-4xl font-bold mr-2">Selected</h2>
            <p className="text-4xl font-normal">projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src="/clients/ARKivist-desktop.png"
                  alt="ARKivist Desktop App"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">ARKivist —</h3>
              <p className="text-gray-600">
                Designing a modern desktop application for digital asset
                management and archiving.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group md:mt-16">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src="/clients/Jeeves.png"
                  alt="Jeeves Financial Platform"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Jeeves —</h3>
              <p className="text-gray-600">
                Creating an intuitive financial platform with seamless payment
                experiences and expense management.
              </p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src="/clients/MUV-desktop.png"
                  alt="MUV Platform"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">MUV —</h3>
              <p className="text-gray-600">
                Developing a comprehensive mobility platform with intuitive
                navigation and user experience.
              </p>
            </div>

            {/* Project 4 */}
            <div className="group md:mt-16">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src="/clients/Myosin-Website.png"
                  alt="Myosin Website"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Myosin —</h3>
              <p className="text-gray-600">
                Crafting a responsive website with elegant design for a health
                and wellness brand.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" className="rounded-full px-8">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - From Chaos to Clarity */}
      <section
        id="process"
        className="py-24 md:py-32 bg-gradient-to-b from-[#FDF8F2] to-[#FDF8F2]/80"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-20 md:mb-24 space-y-4">
            <p className="text-sm uppercase tracking-wider text-center mb-2 font-medium text-gray-600">
              FROM CHAOS TO CLARITY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
              I keep the process simple and the results{' '}
              <span className="italic font-serif">extraordinary.</span>
            </h2>
          </div>

          <div className="flex justify-center my-16 relative">
            <div className="w-full max-w-md relative animate-float">
              <img
                src="/process-illustration.svg"
                alt="Process Illustration"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-10 top-1/4 w-20 h-20 bg-orange-50 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -right-10 bottom-1/4 w-24 h-24 bg-blue-50 rounded-full blur-xl opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-24">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[rgba(0,0,0,0.04)_0px_2px_12px] transform transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] animate-fadeIn">
              <div className="flex justify-center mb-6 group">
                <svg
                  className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Creative Director with Vision
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                I bring strategy and thoughtful, meaningful results, which
                drives business and improves ROI. My approach to design focuses
                on your key areas: design, business, marketing and psychology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[rgba(0,0,0,0.04)_0px_2px_12px] transform transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] animate-fadeIn delay-100">
              <div className="flex justify-center mb-6 group">
                <svg
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Fast Track Delivery
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                From concept to final design, ship on a Workflow in 7 sprint
                periods. I deliver results. I'll keep you updated every 48 hours
                to ensure your project stays on track.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[rgba(0,0,0,0.04)_0px_2px_12px] transform transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] animate-fadeIn delay-200">
              <div className="flex justify-center mb-6 group">
                <svg
                  className="w-10 h-10 transition-transform duration-300 group-hover:rotate-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Your Design Partner
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                As your design partner, I'm here to help you out with results
                first. This will drive business growth and help us build a
                strong partnership. If you need a change, let's charge ahead
                with fresh ideas. You'll always know what to expect from me.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-32 pt-16 border-t border-gray-100">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Brand</h2>
              <div className="flex items-center justify-center">
                <div className="w-8 h-0.5 bg-black"></div>
                <svg
                  className="mx-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="w-8 h-0.5 bg-black"></div>
              </div>
              <h2 className="text-3xl font-bold mt-6">
                Product Experience <span className="text-orange-500">✴️</span>
              </h2>
              <h2 className="text-3xl font-bold mt-6">Delivered</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-700 ease-out translate-y-4 opacity-0 animate-fadeIn">
                <div className="mb-4">
                  <img
                    src="/dashboard-mockups.svg"
                    alt="Web Apps"
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Web apps.</h3>
                <p className="text-gray-600 text-sm">
                  Designed interfaces for SaaS, dashboards, and products.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-700 ease-out translate-y-4 opacity-0 animate-fadeIn delay-100">
                <div className="mb-4">
                  <img
                    src="/clients/MUV-mobile.png"
                    alt="Mobile Apps"
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Mobile apps.</h3>
                <p className="text-gray-600 text-sm">
                  Shipped seamless cross-platform experiences for iOS, Android,
                  and hybrid apps.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-700 ease-out translate-y-4 opacity-0 animate-fadeIn delay-200">
                <div className="mb-4">
                  <img
                    src="/clients/Netcetera.png"
                    alt="Design Systems"
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Design system.</h3>
                <p className="text-gray-600 text-sm">
                  Delivered scalable design systems for 50+ products across
                  React, mobile, and complex platforms.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-700 ease-out translate-y-4 opacity-0 animate-fadeIn delay-300">
                <div className="mb-4">
                  <img
                    src="/clients/Jeeves.png"
                    alt="Product Consulting"
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Consulting.</h3>
                <p className="text-gray-600 text-sm">
                  Get a product that meets needs! I'll find the customers and
                  show you how to fix them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">faizur</h2>
              <p className="text-gray-600 mt-2">
                Design that inspires and connects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-3">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>hello@faizur.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Links</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Projects</li>
                  <li>About</li>
                  <li>Services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Social</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
            <p>© 2023 Faizur Design Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
