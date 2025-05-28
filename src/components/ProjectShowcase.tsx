'use client';
import { motion } from 'framer-motion';
import { Carousel } from './ui/Carousel';
import { Button } from './ui/button';
import { ProjectCardView } from './ui/ProjectCardView';

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
          What I&apos;ve Actually Done:
        </h2>
        <p className="text-lg  mb-4 text-secondary/50">
          Helped 20+ founders launch V1s that landed funding, press, or real
          traction Delivered product design for brands like Shiseido — where
          design had to deliver business results
        </p>
      </div>
      <div className="w-full py-12">
        <Carousel slides={projects} />
        {/* <ProjectCardView /> */}
      </div>

      <div className="flex justify-center">
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-6 mt-6"
        >
          <Button className="rounded-full bg-primary text-white font-medium text-lg">
            Let&apos;s Build This Thing
          </Button>
          <Button
            variant="secondary"
            className="rounded-full text-lg font-medium text-primary"
          >
            Show Me How
          </Button>
        </motion.div>
      </div>
    </>
  );
}
