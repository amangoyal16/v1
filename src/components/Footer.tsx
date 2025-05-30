'use client';

import {
  ArrowUpRightIcon,
  EmailIcon,
  TwitterIcon,
  DribbbleIcon,
  LinkedInIcon,
  PeerlistIcon,
} from '@/components/Icons';

export default function Footer() {
  return (
    <footer className=" py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Call to Action */}
        <div className="mb-16">
          <p className="text-base text-gray-600 mb-4">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="text-2xl font-medium text-gray-900 leading-tight mb-8">
            Feel free to reach out to explore opportunities, discuss freelance
            projects, seek design advice, or just say hello.
          </h2>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-16">
            <a
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Let&apos;s Work Together
              <ArrowUpRightIcon width="20" height="20" />
            </a>

            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
              Copy Email
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-2 mb-6 group/social">
          {/* Email */}
          <a
            href="mailto:amangoyal676@gmail.com"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <EmailIcon width="20" height="20" className="text-gray-600" />
              </div>
              <span className="text-lg font-medium text-gray-900">Email</span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              amangoyal676@gmail.com
            </span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/aman_goyal___"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <TwitterIcon width="20" height="20" className="text-gray-600" />
              </div>
              <span className="text-lg font-medium text-gray-900">
                X / Twitter
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              BTS and design posts
            </span>
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com/amangoyal676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <DribbbleIcon
                  width="20"
                  height="20"
                  className="text-gray-600"
                />
              </div>
              <span className="text-lg font-medium text-gray-900">
                Dribbble
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Visual timeline of my work
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amangoyal-xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <LinkedInIcon
                  width="20"
                  height="20"
                  className="text-gray-600"
                />
              </div>
              <span className="text-lg font-medium text-gray-900">
                LinkedIn
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Work related background
            </span>
          </a>

          {/* Peerlist */}
          <a
            href="https://peerlist.io/aman_goyal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-all duration-300 group-hover/social:opacity-100 group-hover/social:[&:not(:hover)]:opacity-40"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <PeerlistIcon
                  width="20"
                  height="20"
                  className="text-gray-600"
                />
              </div>
              <span className="text-lg font-medium text-gray-900">
                Peerlist
              </span>
            </div>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Design insights & experiences
            </span>
          </a>
        </div>

        {/* Footer Credits */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-gray-600">© 2025 Aman Goyal</p>
        </div>
      </div>
    </footer>
  );
}
