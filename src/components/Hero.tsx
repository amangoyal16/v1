'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projectScreens = [
  '/clients/ARKivist-desktop.png',
  '/clients/Jeeves.png',
  '/clients/MUV-desktop.png',
  '/clients/Myosin-Website.png',
];

export default function Hero() {
  const pressLogos = [
    {
      name: 'Forbes',
      logo: '/press/forbes.svg',
      projectName: 'ARKivist',
      hyperlink:
        'https://www.forbes.com/sites/zengernews/2023/09/12/fashion-clutches-technology-at-new-york-fashion-week-nolcha-shows-at-mercedes-benz-manhattan/?sh=608fdd4a6b54',
    },
    {
      name: 'Google',
      logo: '/press/googleio.svg',
      projectName: 'Arora',
      hyperlink:
        'https://www.youtube.com/watch?t=816&v=kjo40RHSQ4k&feature=youtu.be',
    },
    {
      name: 'Coinbase',
      logo: '/press/coinbase.svg',
      projectName: 'Pollinate',
      hyperlink: 'https://twitter.com/coinbase/status/1455697165473304577',
    },
    {
      name: 'Hypebeast',
      logo: '/press/hypebeast.svg',
      projectName: 'Pollinate',
      hyperlink:
        'https://hypebeast.com/2021/10/nft-magazine-crypto-art-fair-info',
    },
    {
      name: 'Yahoo',
      logo: '/press/yahoo.svg',
      projectName: 'Pollinate',
      hyperlink:
        'https://www.yahoo.com/now/unrevealed-host-york-fashion-week-193600313.html',
    },
    {
      name: 'PBS',
      logo: '/press/pbs.svg',
      projectName: 'Pollinate',
      hyperlink:
        'https://www.pbs.org/video/augmented-reality-animation-at-queens-world-film-festival-qpj8o8/',
    },
  ];
  return (
    <section className="container mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight  "
      >
        Helping founders and teams turn ideas into products.
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-secondary/70"
      >
        Since 2020, I&apos;ve helped 20+ founders transform their brands across
        AI, dating, healthcare, e-commerce, fashion and more through designs
        that create meaningful connections.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-6 mt-6"
      >
        <Button
          variant="secondary"
          className="rounded-full text-base font-medium text-primary "
        >
          Book an Intro Call
        </Button>
        <Button
          variant="primarySecond"
          className="rounded-full text-base font-medium text-secondary "
        >
          View Work
        </Button>
      </motion.div>

      <div className="px-4 mt-12 ">
        <p className=" text-sm text-white">Featured in</p>
        <div className="flex items-center justify-center gap-12 ">
          {pressLogos.map((press, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image
                src={press.logo}
                alt={press.name}
                width={160}
                height={40}
                className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 invert"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <div className="relative">
          <Image
            src="/project-mockup/ARKivist-desktop.png"
            alt="ARKivist Desktop Screenshot"
            width={1200}
            height={675}
            className="rounded-lg shadow-lg"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-primary to-transparent rounded-b-lg" />
          <p className="absolute bottom-8 left-8 right-8 text-secondary text-lg font-medium">
            I turn raw ideas into products users get, love, and stick with —
            without dragging you through 12-week discovery phases or pretty
            decks that don&apos;t ship.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
