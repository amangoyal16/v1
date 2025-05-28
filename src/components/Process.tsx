'use client';
import { motion } from 'framer-motion';

const process = [
  {
    icon: '🎯',
    title: 'Week 1: Discovery & Scoping',
    description: `You share the idea – We do a quick call to see if this makes sense. I ask annoying questions about your assumptions until we're both clear on what you're actually building and why.`,
  },
  {
    icon: '⚡',
    title: 'Week 2-4: Execution',
    description:
      'I do the work. You review. We iterate. No endless meetings - just focused execution and regular check-ins.',
  },
  {
    icon: '🚀',
    title: 'Week 4+: Launch',
    description:
      'You have something real you can put in front of users, investors, or customers.',
  },
];

export default function Process() {
  return (
    <section className="container py-24">
      <div className="px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How This Actually Works
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {process.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
