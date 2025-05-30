'use client';

import Link from 'next/link';
import { blogPosts } from '@/constants/blog';
import { ArrowUpRightIcon } from '@/components/Icons';
import {
  usePageAnimation,
  fadeInUp,
  getStaggerDelay,
} from '@/hooks/usePageAnimation';

interface BlogProps {
  showAll?: boolean;
  maxPosts?: number;
}

export default function Blog({ showAll = false, maxPosts = 2 }: BlogProps) {
  const isLoaded = usePageAnimation(100);
  const postsToShow = showAll
    ? blogPosts.filter((post) => post.isPublished)
    : blogPosts.filter((post) => post.isPublished).slice(0, maxPosts);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 max-w-2xl">
      {/* Section Header */}
      <div className={`mb-12 sm:mb-16 ${fadeInUp(isLoaded)}`}>
        <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 sm:mb-6">
          MY WRITING
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight tracking-tighter mb-4 sm:mb-6">
          Thoughts, insights, and lessons from the design trenches
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          I share what I&apos;ve learned about design, freelancing, and building
          products that people love.
        </p>
      </div>

      {/* Featured Blog Posts */}
      <div className="space-y-8 sm:space-y-12">
        {postsToShow.map((post, index) => (
          <div
            key={post.id}
            className={fadeInUp(isLoaded)}
            style={{ transitionDelay: getStaggerDelay(index + 1) }}
          >
            <article className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="space-y-3 sm:space-y-4 group-hover:translate-y-[-2px] hover:bg-gray-50/30 transition-all duration-300 border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-gray-300 hover:shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <time className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider uppercase">
                      {post.date}
                    </time>
                    <span className="text-sm text-gray-400 hidden sm:block">
                      •
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <span className="text-sm text-gray-400 hidden sm:block">
                      •
                    </span>
                    <span className="inline-flex">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight group-hover:text-black transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read more indicator */}
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300 pt-1">
                    <span>Read article</span>
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        ))}
      </div>

      {/* Read More Button - Only show if not showing all posts */}
      {!showAll && (
        <div
          className={`mt-12 sm:mt-16 flex justify-center ${fadeInUp(isLoaded)}`}
          style={{ transitionDelay: getStaggerDelay(postsToShow.length + 1) }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-sm"
          >
            Read More Articles
            <ArrowUpRightIcon width="18" height="18" />
          </Link>
        </div>
      )}
    </section>
  );
}
