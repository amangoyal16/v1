'use client';

import Image from 'next/image';
import { foundersImageArray } from '@/constants/testimonials';

export default function FoundersImages() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-4 mb-8">
        {foundersImageArray.map((testimonial) => (
          <div key={testimonial.name} className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm font-medium text-gray-500 tracking-tighter mb-6 text-center ml-2 -mt-2">
        Trusted by 10+ founders and product teams
      </p>
    </div>
  );
}
