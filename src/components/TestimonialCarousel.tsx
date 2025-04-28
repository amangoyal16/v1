'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    avatar: '/testimonial-avatar.jpg',
    name: 'Tyler Stambaugh 🧲',
    company: 'Co-Founder @ MAGNETIQ',
    text: 'Aman worked with us at a critical point of our product development. We had just scheduled our Alpha Launch and wanted to optimize our application for mobile devices. We had a tight timeline and Aman was able to direct the team in a way that got us to the finish line and ensured that the designs were user friendly. He was very proactive in suggesting changes to the UI/UX and I felt like I had someone in the cockpit with me driving as opposed to someone just doing the work because he had to. It was a great experience and would recommend working with Aman any time! Thanks Aman for your efforts and a successful launch!',
  },
  {
    avatar: '/testimonial-avatar-2.jpg',
    name: 'Pratik Ranjan',
    company: 'Senior Product Manager @ Eshopbox | LinkedIn Top Voice',
    text: "Aman and I worked together on several projects like college e-magazine, vectors, logos, brochures etc. and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods. We miss his smile in the college! Any team would be lucky to have Aman, and I couldn't recommend him more for any business looking for new talent.",
  },
  {
    avatar: '/testimonial-avatar-3.jpg',
    name: 'Krishan Rathore',
    company:
      'Senior Software Engineer | React Native | React Js | NextJS | NestJS | Tailwind | Android',
    text: "Aman is a person who is capable of turning the process of cooperation into an engaging win-win competition. We worked together on several projects in the course of the last year. Aman's professionalism and healthy perfectionism always motivated me to do my own part of the job better. Not once did he raise the motivation of the whole team with his energetic and adventurous approach to solving problems. I highly recommend Aman as a professional programmer whose work in the team makes other team members strive for better results.",
  },
  {
    avatar: '/testimonial-avatar-4.jpg',
    name: 'Nam Le',
    company: 'Culture x Innovation | AI & Web3 Strategist | Forbes Next 1000',
    text: 'Aman takes great ownership of his work commitments and is an amazing colleague to work with. Deliverables are timely and high quality. We are incredibly lucky to have Aman part of our team!',
  },
  {
    avatar: '/testimonial-avatar-5.jpg',
    name: 'Akash Trivedi',
    company: 'IT Business Consultant',
    text: "Aman is a hard working individual and has a great understanding of UI/UX and Frontend. Easy to manage guy with a problem solving attitude. He's an asset for whichever organization he works for.",
  },
  {
    avatar: '/testimonial-avatar-6.jpg',
    name: 'Akhilesh Pratap Shahi',
    company: 'Data Engineer @ Jio Platforms Limited (JPL)',
    text: 'As a partners on several projects, I was impressed with his ability to consider – and balance – strategic issues, creative concepts and practical considerations. It was also impressive to watch him (over a period of several months) shepherd a very important and complex launch campaign through numerous client presentations and shifts in direction. These "big picture" skills are matched by a keen eye and a real attention to detail. He is the personality who have abilities to learn new things quickly and bring your imagination into reality cartoon characters are the real life friend for him to work on creative art. I strongly recommend Aman Goyal for these skills.',
  },
];

const DURATION = 5000; // ms

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Infinite looping helpers
  const testimonialCount = testimonials.length;
  const getIndex = (i: number) => (i + testimonialCount) % testimonialCount;

  // Auto-scroll
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => getIndex(prev + 1));
    }, DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // Animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute' as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: 'absolute' as const,
      transition: { duration: 0.6, ease: 'easeInOut' },
    }),
  };

  // Manual navigation
  const goTo = (i: number) => {
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[220px]">
      <div className="relative h-full min-h-[220px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <div className="min-w-full">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-lg text-gray-900">
                    {testimonials[index].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[index].company}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg max-w-xl">
                {testimonials[index].text}
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === index ? 'bg-gray-400' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
            data-index={idx}
            onClick={() => goTo(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}
