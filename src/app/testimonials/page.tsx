'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "I've never seen anyone ship faster and with such insane quality. His attention to detail and creativity were unmatched. The process was smooth, efficient, and quick. Couldn't be happier with the end result. Sahil is a must-hire!",
      name: 'Danny Postma',
      title: 'Founder, HeadshotPro',
      image: '/founders/tyler.png',
    },
    {
      quote:
        'I worked with Sahil on a landing page project. He is really good with attention to detail and very much open to feedback and quickly iterated the designs to deliver the final work. I had given the wireframes drawn by hand and his ability to capture the vision is truly exceptional. Thank you Sahil. Looking forward to working with you more.',
      name: 'Sanjay Nediyara',
      title: 'Founder & CEO, StartGlobal',
      image: '/founders/nam_le.png',
    },
    {
      quote:
        'Working with Aman was an absolute game-changer for our product. His strategic approach to UX design helped us increase our conversion rate by 40% within the first month. He&apos;s not just design beautiful interfaces - he thinks like a product owner.',
      name: 'Thanasi Bakalis',
      title: 'VP of Product, TechFlow',
      image: '/founders/Thanasi.jpeg',
    },
    {
      quote:
        'Aman&apos;s ability to translate complex user requirements into intuitive design solutions is remarkable. He delivered our MVP design ahead of schedule and the quality exceeded our expectations. Our investors were impressed!',
      name: 'Keiji Yamamoto',
      title: 'Co-founder, DataVault',
      image: '/founders/keiji.jpeg',
    },
    {
      quote:
        'I&apos;ve worked with many designers, but Aman stands out for his collaborative approach and deep understanding of SaaS products. He helped us redesign our entire platform, resulting in a 60% improvement in user engagement.',
      name: 'Veronika Schmidt',
      title: 'Head of Design, CloudSync',
      image: '/founders/Veronika.webp',
    },
    {
      quote:
        'Aman&apos;s design system work transformed how our team builds products. His attention to scalability and consistency has saved us countless hours and improved our design quality across all touchpoints.',
      name: 'Tyler Chen',
      title: 'CTO, InnovateLabs',
      image: '/founders/tyler.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 max-w-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16 max-w-2xl">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6">
            CLIENT TESTIMONIALS
          </p>
          <h1 className="text-3xl font-medium text-gray-900 leading-tight tracking-tighter mb-6">
            I&apos;ve been fortunate to work with amazing people who&apos;ve
            shaped me professionally and personally. Here&apos;s what they say
            about working with me.
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white">
              <blockquote className="text-xl text-gray-900 leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Ready to work together?
          </h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              Let&apos;s Work Together
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
              Copy Email
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
