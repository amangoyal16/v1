'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Briefcase,
  MessageCircle,
  DollarSign,
  Zap,
  Package,
  PenTool,
  HelpCircle,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'services', label: 'Services', icon: Zap },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'blog', label: 'Blog', icon: PenTool },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

export default function FloatingBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Find active section
      const sections = navItems.map((item) => item.id);
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className="sticky bottom-6  w-full max-w-xl mx-auto transform -translate-x-1/2 z-[9999] pointer-events-auto scale-[1.2]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="bg-black/90 backdrop-blur-lg rounded-full px-3 py-2 shadow-2xl border border-white/10 w-full"
        layout
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      >
        <div className="flex items-center justify-center gap-1 w-full">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                layout
              >
                {/* Background for active state */}
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                  />
                )}

                {/* Icon */}
                <IconComponent size={20} className="relative z-10" />

                {/* Label - appears only for active section */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 24,
                      }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden relative z-10"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
