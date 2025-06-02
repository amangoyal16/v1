'use client';

import Link from 'next/link';
import { productsData } from '@/constants/products';
import { ArrowUpRightIcon } from '@/components/Icons';

export default function Products() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-base text-gray-600 mb-4">MY PRODUCTS</p>
        <h2 className="text-3xl font-semibold text-gray-900 leading-tight mb-6">
          Digital products I&apos;ve built and launched
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          From idea to execution, here are the products I&apos;ve designed,
          developed, and brought to market.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${product.color}`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    product.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : product.status === 'Beta'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {product.status}
                </span>
              </div>

              {/* Product Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowUpRightIcon
                  width="20"
                  height="20"
                  className="text-gray-600"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Interested in collaborating on a product?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
        >
          Let&apos;s Build Something
          <ArrowUpRightIcon width="20" height="20" />
        </Link>
      </div>
    </section>
  );
}
