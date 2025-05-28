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

export default function ContactUs() {
  return (
    <>
      <section className=" max-w-4xl mx-auto bg-secondary rounded-lg overflow-hidden mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <img
            src="/project-mockup/ARKivist-desktop.png"
            alt="ARKivist Desktop Screenshot"
            className="h-full w-full object-cover object-center"
          />

          <div className="text-left py-8 px-4">
            <div className="text-left mb-16">
              <h2 className="text-3xl text-left font-bold text-primary">
                Contact Section
              </h2>
              <p className="text-gray-500 text-base mb-8">
                My work has been featured in major press releases
              </p>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">Send me an email with:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>What you&apos;re trying to build (one paragraph)</li>
                  <li>What&apos;s blocking you right now</li>
                  <li>When you want to launch</li>
                </ul>
                <p className="text-lg text-gray-700">
                  I&apos;ll respond within 24 hours with whether I can help and
                  which package makes sense for your situation.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Email:{' '}
                    <a
                      href="mailto:amangoyal676@gmail.com"
                      className="text-primary hover:underline"
                    >
                      amangoyal676@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    LinkedIn:{' '}
                    <a
                      href="https://linkedin.com/in/amangoyal-xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline "
                    >
                      linkedin.com/in/amangoyal-xyz
                    </a>
                  </p>
                </div>
                <p className="text-sm text-gray-500 italic">
                  P.S. - If you&apos;re not ready to move in the next 30 days no
                  worries, and come back when you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
