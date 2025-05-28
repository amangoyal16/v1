'use client';
import { motion } from 'framer-motion';
import { IconCaretRightFilled } from '@tabler/icons-react';
const projects = [
  {
    title:
      'Project showcase - Demonstrating innovative design and development solutions',
    button: 'View Project',
    src: '/project-mockup/ARKivist-desktop.png',
  },
  {
    title: 'Another project showcase - Highlighting technical expertise',
    button: 'View Project',
    src: '/project-mockup/Jeeves.png',
  },
  {
    title:
      'Project showcase - Demonstrating innovative design and development solutions',
    button: 'View Project',
    src: '/project-mockup/ARKivist-desktop.png',
  },
  {
    title: 'Another project showcase - Highlighting technical expertise',
    button: 'View Project',
    src: '/project-mockup/Jeeves.png',
  },
];

export default function ProjectShowcase() {
  return (
    <>
      <div className="container mt-32 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Experts in Websites,
          <br />
          Product, & Development
        </h2>
        <p className="text-lg  mb-4 text-secondary/50">
          Helped 20+ founders launch V1s that landed funding, press, or real
          traction Delivered product design for brands like Shiseido — where
          design had to deliver business results
        </p>
      </div>

      <div className="container mt-8 flex flex-wrap gap-4">
        {[
          { label: 'Product Design', sub: 'View Examples' },
          { label: 'Product Design', sub: 'View Examples' },
          { label: 'Development', sub: 'View Examples' },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-royalBlue rounded-xl px-6 py-4 min-w-[200px] flex-1 max-w-xs flex flex-col justify-between shadow-sm border border-white/5"
          >
            <div className="text-base font-medium text-white mb-2">
              {item.label}
            </div>
            <div className="flex items-center text-sm text-secondary/70 font-normal">
              {item.sub}
              <IconCaretRightFilled className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
