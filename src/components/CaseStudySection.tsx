'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const caseStudies = [
  {
    logo: '/logos/startup1.svg',
    headline: 'From 0 to 380K users & $48M raised',
    image: '/clients/Myosin-Website.png',
    company: 'TechFlow',
    tagline: 'AI-Powered Workflow Automation',
  },
  {
    logo: '/logos/startup2.svg',
    headline: '3x Revenue Growth in 12 Months',
    image: '/clients/MUV-desktop.png',
    company: 'DataSense',
    tagline: 'Enterprise Analytics Platform',
  },
];

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

const founderAvatars = [
  '/founders/tyler.png',
  '/founders/nam_le.png',
  '/founders/keiji.jpeg',
  '/founders/Veronika.webp',
  '/founders/Thanasi.jpeg',
];

export default function CaseStudySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Credibility Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            {founderAvatars.map((avatar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative -ml-4 first:ml-0"
              >
                <Image
                  src={avatar}
                  alt={`Founder ${idx + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-lg mb-4">Trusted by 40+ Founders</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            How I helped startups <span className="text-gray-600">succeed</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <Image
                  src={study.logo}
                  alt={`${study.company} logo`}
                  width={120}
                  height={40}
                  className="mb-6 grayscale"
                />
                <h3 className="text-2xl font-bold mb-6">{study.headline}</h3>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={study.image}
                  alt={study.company}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h4 className="text-xl font-semibold mb-2">
                    {study.company}
                  </h4>
                  <p className="text-gray-200">{study.tagline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-8">
            My work has been featured in major press releases
          </p>
          <div className="flex items-center justify-center gap-12">
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
                  width={120}
                  height={40}
                  className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
