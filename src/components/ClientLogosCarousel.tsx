'use client';

import Image from 'next/image';
import { usePageAnimation, fadeInUp } from '@/hooks/usePageAnimation';

const clientLogos = [
  { name: 'ARKivist', path: '/client-logo/arkivist/logo-dark.svg' },
  { name: 'Shiseido', path: '/client-logo/shiseido/logo-dark.svg' },
  { name: 'ARORA', path: '/client-logo/arora/logo-dark.svg' },
  { name: 'BILLIEBOT', path: '/client-logo/billiebot/logo-dark.svg' },
  { name: 'Blackbeard', path: '/client-logo/blackbeard/logo-dark.svg' },
  { name: 'Hive', path: '/client-logo/hive/logo-dark.svg' },
  { name: 'Jeeves', path: '/client-logo/jeeves/logo-dark.svg' },
  { name: 'Magnetiq', path: '/client-logo/magnetiq/logo-dark.svg' },
  { name: 'Bellwether', path: '/client-logo/bellwether/logo-dark.svg' },
  { name: 'Myosin', path: '/client-logo/myosin/logo-dark.svg' },
  { name: 'Netcetera', path: '/client-logo/netcetera/logo-dark.svg' },
  { name: 'Superworld', path: '/client-logo/superworld/logo-dark.svg' },
  { name: 'Tribl', path: '/client-logo/tribl/logo-dark.svg' },
];

export default function ClientLogosCarousel() {
  const isLoaded = usePageAnimation(100);

  return (
    <section className=" overflow-hidden  max-w-2xl mx-auto px-4">
      {/* Section Header */}
      <div className={` mb-4  ${fadeInUp(isLoaded)}`}>
        <h2 className="text-lg  text-gray-700 font-medium">
          Amazing companies I&apos;ve had the pleasure to work with
        </h2>
      </div>

      {/* Infinite Carousel */}
      <div
        className={`relative ${fadeInUp(isLoaded)}`}
        style={{ transitionDelay: '200ms' }}
      >
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll-infinite px-4 ">
          {/* First set of logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center h-12 sm:h-14"
            >
              <div className="relative h-6 sm:h-7 w-16 sm:w-22 lg:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter brightness-0"
                  onError={(e) => {
                    // Fallback if logo doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center h-12 sm:h-14"
            >
              <div className="relative h-6 sm:h-7 w-16 sm:w-22 lg:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter brightness-0"
                  onError={(e) => {
                    // Fallback if logo doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
