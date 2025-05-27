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
  return (
    <section className="max-w-2xl mx-auto mt-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1] "
      >
        I help founders and teams turn ideas into products that grow.
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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
        <Button className="rounded-full bg-primary text-white font-medium text-lg  ">
          Let&apos;s Build This Thing
        </Button>
        <Button
          variant="secondary"
          className="rounded-full text-lg font-medium text-primary "
        >
          Show Me How
        </Button>
      </motion.div>

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
