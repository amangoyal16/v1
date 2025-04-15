'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './button';

export function Navbar() {
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 px-6 md:px-8 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          faizur
        </Link>

        <div className="hidden md:flex space-x-10 items-center">
          <a
            href="#projects"
            className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#process"
            className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            onClick={(e) => scrollToSection(e, 'process')}
          >
            Process
          </a>
          <a
            href="#services"
            className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            onClick={(e) => scrollToSection(e, 'testimonials')}
          >
            Testimonials
          </a>
          <Button className="rounded-full px-8 py-6 bg-black text-white hover:bg-black/90 shadow-sm transition-all duration-200 hover:shadow-md">
            Contact
          </Button>
        </div>

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
            <a
              href="#projects"
              className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium"
              onClick={(e) => {
                scrollToSection(e, 'projects');
                setIsMenuOpen(false);
              }}
            >
              Projects
            </a>
            <a
              href="#process"
              className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium"
              onClick={(e) => {
                scrollToSection(e, 'process');
                setIsMenuOpen(false);
              }}
            >
              Process
            </a>
            <a
              href="#services"
              className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium"
              onClick={(e) => {
                scrollToSection(e, 'services');
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-medium"
              onClick={(e) => {
                scrollToSection(e, 'testimonials');
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </a>
            <Button className="rounded-full px-6 py-5 bg-black text-white hover:bg-black/90 shadow-sm w-full justify-center">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
