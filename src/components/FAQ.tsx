'use client';

import { useState } from 'react';
import { faqData } from '@/constants/faq';
import {
  usePageAnimation,
  fadeInUp,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';

export default function FAQ() {
  const isLoaded = usePageAnimation(100);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 max-w-3xl">
      {/* Section Header */}
      <div className={`mb-12 sm:mb-16 text-center ${fadeInUp(isLoaded)}`}>
        <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 sm:mb-6">
          FAQ
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight tracking-tighter mb-4 sm:mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Common questions about my design process, pricing, and how we can work
          together.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 sm:space-y-6">
        {faqData.map((item, index) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div
              key={item.id}
              className={`bg-gray-50/30 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ${fadeInUp(
                isLoaded
              )}`}
              style={{ transitionDelay: getStaggerDelay(index + 1) }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl sm:rounded-2xl transition-all duration-200 active:scale-[0.98]"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <div className="relative">
                        <div className="w-4 h-0.5 bg-gray-600 rounded-full" />
                        <div
                          className={`w-0.5 h-4 bg-gray-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                            isOpen
                              ? 'opacity-0 scale-0'
                              : 'opacity-100 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pt-2 border-t border-gray-200">
                    <div
                      className="text-sm sm:text-base text-gray-600 leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact CTA */}
      <div
        className={`mt-12 sm:mt-16 text-center ${fadeInUp(isLoaded)}`}
        style={{ transitionDelay: getStaggerDelay(faqData.length + 1) }}
      >
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            I&apos;d love to hear about your project and discuss how we can work
            together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
