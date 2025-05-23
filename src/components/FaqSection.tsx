'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'What types of companies or founders do you work with?',
    a: "I primarily partner with early-stage founders, growing startups, and small teams looking to move fast and build strong foundations. Whether you're at idea stage, MVP, or scaling phase, I help craft products that are designed to grow.",
  },
  {
    q: 'Do you only handle design, or do you also work on product strategy?',
    a: 'Both. My strength lies in bridging product strategy with design execution. I help you define what needs to be built, why it matters, and then design intuitive experiences that align with those goals.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'It depends on the scope. Most projects take between 2 to 6 weeks. MVP sprint → ~3 weeks. Full website or app UX/UI → ~4–6 weeks. Ongoing product support → Monthly retainer model. I prioritize momentum without compromising quality.',
  },
  {
    q: 'Which tools and technologies do you work with?',
    a: 'For design: Figma, Framer, Webflow, Adobe Suite. For development: React, Next.js, AWS stack (S3, EC2, Cloudfront), WordPress (where needed). I also work with analytics (GA, Sentry, Clarity) to inform design and strategy decisions.',
  },
  {
    q: 'How involved will I be during the project?',
    a: "You'll be involved at key decision points — kickoff, mid-way check-ins, and final delivery. I value collaboration but handle the heavy lifting so you can stay focused on your bigger vision.",
  },
  {
    q: 'What happens if my scope changes midway?',
    a: "No problem — startups evolve quickly. If new features or changes arise, we'll adapt with a scoped change process so timelines and priorities stay clear and manageable.",
  },
  {
    q: 'How do we start working together?',
    a: "It starts with a discovery call — a 15-minute conversation to understand your goals, timelines, and needs. From there, I'll recommend a plan that suits your stage and objectives.",
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. I offer flexible post-launch support options — from design iterations, roadmap planning, UX optimization, to marketing collateral — to help your product grow after launch.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">❓</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently
            <br />
            asked questions
          </h2>
        </div>
        <p className="mb-12 text-gray-600 text-lg">
          Still have questions?{' '}
          <a href="#contact" className="underline hover:text-gray-900">
            Drop us a line
          </a>
        </p>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-10 flex flex-col items-center w-full max-w-md mb-8 lg:mb-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <img
              src="/about-me.jpg"
              alt="Avatar"
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Short on time?
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Let&apos;s get started with a brief intro call.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-full font-medium shadow hover:bg-gray-900 transition flex items-center gap-2"
            >
              Book a Call <span aria-hidden>→</span>
            </motion.button>
          </motion.div>
          {/* Right: FAQ Accordions */}
          <div className="flex-1 w-full">
            <ul className="space-y-4">
              {faqs.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 text-lg font-medium flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                  >
                    {item.q}
                    <span className="ml-2 text-gray-400">
                      {openIndex === idx ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 45 }}
                          transition={{ duration: 0.3 }}
                        >
                          +
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ rotate: 45 }}
                          animate={{ rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          +
                        </motion.span>
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 text-base">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
