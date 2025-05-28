'use client';

import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import FaqSection from './FaqSection';

export default function Pricing() {
  const pricingPlans = [
    {
      title: 'The Product Sprint',
      price: '$3,500',
      description: `In 2 weeks, we'll kill the noise and lock your product into something testable, fundable, and worth building.`,
      features: [
        '2-week deep dive into your product concept',
        'Clear product definition & positioning',
        'Priority features, risks, and roadmap',
        'Feature prioritization framework',
        '3 calls, async support',
      ],
      perfectFor: `You have an idea but feel overwhelmed by where to start, or you've been 'planning' for months and need someone to help you cut through the noise.`,
      imageSrc: '/images/product-sprint.jpg',
    },
    {
      title: 'The Prototype Drop',
      price: '$6,500',
      description:
        'Get something real you can show users, investors, or teammates — in 4 weeks.',
      features: [
        'Complete product definition and PRD',
        'Clickable Figma prototype',
        'Design system starter kit',
        'Handoff-ready file + specs',
        '4-week timeline',
      ],
      perfectFor: `You're past the idea stage and need someone to translate your vision into something tangible that developers can actually build.`,
      imageSrc: '/images/prototype-drop.jpg',
    },
    {
      title: 'The MVP Launch',
      price: '$15K+',
      description:
        'You want it done. I bring in my dev partner. You get product, design, code, and deployment.',
      features: [
        'Complete product development (I handle everything)',
        'Full UI/UX design and user testing',
        'Frontend and backend development',
        'Deployment and hosting setup',
        'Weekly builds and demos',
        'Post-launch support for 30 days',
      ],
      perfectFor: `You want to focus on running your business while someone else handles the entire product development process. You'll get weekly updates, but I'll handle the execution.`,
      imageSrc: '/images/mvp-launch.jpg',
    },
  ];

  return (
    <>
      <section className="container mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]"
        >
          Services/Pricing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Clear outcomes, no fluff. Choose the service that fits your next big
          move.
        </motion.p>

        <div className="relative">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              index={index}
              totalCards={pricingPlans.length}
              delay={0.8 + index * 0.2}
            />
          ))}
        </div>
      </section>
    </>
  );
}
