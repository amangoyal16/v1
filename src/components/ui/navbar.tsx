'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './button';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Process',
    link: '#process',
  },
  {
    name: 'Services',
    link: '#services',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current: number) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="py-2 px-6 md:px-8 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm md:hidden">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Aman Goyal
          </Link>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium"
                  onClick={(e) => {
                    scrollToSection(e, item.name.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button className="rounded-full px-6 py-5 bg-black text-white hover:bg-black/90 shadow-sm w-full justify-center">
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'hidden md:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4'
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => scrollToSection(e, navItem.name.toLowerCase())}
              className={cn(
                'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
              )}
            >
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          ))}
          <Button className="rounded-full px-8 py-6 bg-black text-white hover:bg-black/90 shadow-sm transition-all duration-200 hover:shadow-md">
            Contact
          </Button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
