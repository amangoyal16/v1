'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

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
    a: "It starts with a discovery call — a 30-minute conversation to understand your goals, timelines, and needs. From there, I'll recommend a plan that suits your stage and objectives.",
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. I offer flexible post-launch support options — from design iterations, roadmap planning, UX optimization, to marketing collateral — to help your product grow after launch.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-2xl mx-auto mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="  overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-royalBlue/20 rounded-lg transition-colors"
            >
              <span className="text-lg ">{faq.q}</span>
              <IconChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-royalSky/10"
                >
                  <p className="text-secondary/80 ">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
