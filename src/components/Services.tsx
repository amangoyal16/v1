'use client';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🚀',
    title: 'MVP Sprint',
    description: 'Launch your MVP with clarity and speed.',
    highlights: [
      'Product strategy session',
      '5–7 UX/UI screens',
      'Interactive prototype',
    ],
    price: '$3,500',
  },
  {
    icon: '🎯',
    title: 'Product Design',
    description: 'Transform your vision into a polished product.',
    highlights: [
      'User research & strategy',
      'Complete UX/UI design',
      'Design system creation',
    ],
    price: '$5,000',
  },
  {
    icon: '⚡',
    title: 'Rapid Development',
    description: 'Fast-track your product to market.',
    highlights: [
      'Full-stack development',
      'Cloud infrastructure',
      'Performance optimization',
    ],
    price: '$4,500',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Design. Strategy. Execution.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Clear outcomes, no fluff. Choose the service that fits your next big
            move.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="mr-2 text-primary-500">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-xl font-medium text-gray-700 mb-6">
                  Starting at {service.price}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-300"
                >
                  Start a Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center py-12">
          <p className="text-gray-600 text-base">
            Tech-ready delivery with Figma, Framer, Webflow, and AWS systems —
            designed to ship fast.
          </p>
        </div>
      </div>
    </section>
  );
}
