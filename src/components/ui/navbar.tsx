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

export function Navbar() {
  return (
    <>
      <nav className=" container py-4 px-2 md:px-0 border-b border-secondary/50  bg-primary  sticky top-0 z-50 shadow-sm ">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            Aman Goyal
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="primarySecond"
              size={'sm'}
              className="text-sm font-medium rounded-full"
            >
              View Work
            </Button>
            <Button
              variant="secondary"
              size={'sm'}
              className="text-sm font-medium rounded-full"
            >
              Book a Intro Call
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
