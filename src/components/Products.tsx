'use client';

import Link from 'next/link';
import { productsData } from '@/constants/products';
import { ArrowUpRightIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-base text-gray-600 mb-4">MY PRODUCTS</p>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          Digital products I&apos;ve built and launched
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          From idea to execution, here are the products I&apos;ve designed,
          developed, and brought to market.
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {productsData.map((product, index) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Link href={`/products/${product.slug}`} className="group block">
              <div className="cursor-pointer group border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-6 hover:bg-gray-50/10 bg-gray-50 hover:scale-105">
                {/* Product Icon */}
                <div className="text-5xl mb-4">{product.icon}</div>
                {/* Product Info */}
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-4">
          Interested in collaborating on a product?
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl transition-all duration-300"
          >
            Let&apos;s Build Something
            <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
              <ArrowUpRightIcon width="20" height="20" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
