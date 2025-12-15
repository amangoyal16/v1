'use client';

import { calLink, projectsLink, cvLink } from '@/constants/info';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black  rounded-md flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-200 hidden md:block">
                Aman Goyal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=" md:flex items-center space-x-2 md:space-x-6">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-sm font-medium transition-colors duration-200"
            >
              Resume
            </a>
            <Link
              href={projectsLink}
              target="_blank"
              className="bg-white border whitespace-nowrap border-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Work
            </Link>
            {/* <Link
              href={calLink}
              className="bg-black whitespace-nowrap text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book an Intro Call
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
