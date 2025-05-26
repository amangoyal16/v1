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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-4 min-h-[80vh] text-center flex flex-col justify-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-xl font-medium text-gray-600">
              👋 Let&apos;s create something amazing together!
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1] text-gray-900"
          >
            I help founders and teams turn ideas into{' '}
            <span className="text-[#111827]">products that grow.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed mx-auto"
          >
            Since 2020, I&apos;ve helped 20+ founders transform their brands
            across AI, dating, healthcare, e-commerce, fashion and more through
            designs that create meaningful connections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Button className="rounded-full  px-10 py-6 bg-[#111827] hover:bg-[#1F2937] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Work
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-10 py-6 border-2 text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Call
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Project Screens Carousel */}
      <div className="h-[400px] w-full overflow-hidden hidden">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {projectScreens.map((screen, index) => (
            <div
              key={index}
              className="relative w-[800px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={screen}
                alt={`Project Screen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
