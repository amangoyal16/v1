import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  perfectFor: string;
  delay?: number;
  index: number;
  totalCards: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  perfectFor,
  delay = 0.8,
  index,
  totalCards,
}: PricingCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate z-index so that last card (highest index) has highest z-index
  const zIndex = totalCards - index;

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * (index + 1)]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        zIndex,
        position: 'relative',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="my-12 sticky top-20"
    >
      <div className="text-secondary p-6 rounded-t-lg bg-royalSky">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-2xl font-bold">{price}</p>
        </div>
        <p className="max-w-lg mt-2">{description}</p>
      </div>
      <div className="bg-secondary p-6 rounded-b-lg text-royalSky">
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <p>
            <strong>Perfect if:</strong> {perfectFor}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
