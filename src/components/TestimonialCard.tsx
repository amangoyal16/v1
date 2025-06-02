'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    title: string;
    company: string;
    quote: string;
    image: string;
    is_visible: boolean;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <blockquote className="text-base md:text-lg text-gray-900 leading-relaxed mb-8">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-white group-hover:ring-gray-100 transition-all duration-300">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
            {testimonial.name}
          </p>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}
