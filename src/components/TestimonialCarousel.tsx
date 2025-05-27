'use client';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './AnimatedTestimonials';

const testimonials = [
  {
    quote:
      'Aman worked with us at a critical point of our product development. We had just scheduled our Alpha Launch and wanted to optimize our application for mobile devices. We had a tight timeline and Aman was able to direct the team in a way that got us to the finish line and ensured that the designs were user friendly. He was very proactive in suggesting changes to the UI/UX and I felt like I had someone in the cockpit with me driving as opposed to someone just doing the work because he had to. It was a great experience and would recommend working with Aman any time! Thanks Aman for your efforts and a successful launch!',
    name: 'Tyler Stambaugh 🧲',
    designation: 'Co-Founder @ MAGNETIQ',
    src: 'founders/tyler.png',
  },
  {
    quote:
      "Aman and I worked together on several projects like college e-magazine, vectors, logos, brochures etc. and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods. We miss his smile in the college! Any team would be lucky to have Aman, and I couldn't recommend him more for any business looking for new talent.",
    name: 'Pratik Ranjan',
    designation: 'Senior Product Manager @ Eshopbox | LinkedIn Top Voice',
    src: 'founders/Thanasi.jpeg',
  },
  {
    quote:
      "Aman is a person who is capable of turning the process of cooperation into an engaging win-win competition. We worked together on several projects in the course of the last year. Aman's professionalism and healthy perfectionism always motivated me to do my own part of the job better. Not once did he raise the motivation of the whole team with his energetic and adventurous approach to solving problems. I highly recommend Aman as a professional programmer whose work in the team makes other team members strive for better results.",
    name: 'Krishan Rathore',
    designation:
      'Senior Software Engineer | React Native | React Js | NextJS | NestJS | Tailwind | Android',
    src: 'founders/keiji.jpeg',
  },
  {
    quote:
      'Aman takes great ownership of his work commitments and is an amazing colleague to work with. Deliverables are timely and high quality. We are incredibly lucky to have Aman part of our team!',
    name: 'Nam Le',
    designation:
      'Culture x Innovation | AI & Web3 Strategist | Forbes Next 1000',
    src: 'founders/nam_le.png',
  },
  {
    quote:
      "Aman is a hard working individual and has a great understanding of UI/UX and Frontend. Easy to manage guy with a problem solving attitude. He's an asset for whichever organization he works for.",
    name: 'Akash Trivedi',
    designation: 'IT Business Consultant',
    src: 'founders/Veronika.webp',
  },
  {
    quote:
      'As a partners on several projects, I was impressed with his ability to consider – and balance – strategic issues, creative concepts and practical considerations. It was also impressive to watch him (over a period of several months) shepherd a very important and complex launch campaign through numerous client presentations and shifts in direction. These "big picture" skills are matched by a keen eye and a real attention to detail. He is the personality who have abilities to learn new things quickly and bring your imagination into reality cartoon characters are the real life friend for him to work on creative art. I strongly recommend Aman Goyal for these skills.',
    name: 'Akhilesh Pratap Shahi',
    designation: 'Data Engineer @ Jio Platforms Limited (JPL)',
    src: 'founders/akhilesh.jpg',
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]"
      >
        Testimonials
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        What people say about me
      </motion.p>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}
