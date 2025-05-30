'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckmarkIcon } from '@/components/Icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    projectCategory: [] as string[],
    projectObjectives: '',
    howDidYouFind: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      projectCategory: prev.projectCategory.includes(category)
        ? prev.projectCategory.filter((c) => c !== category)
        : [...prev.projectCategory, category],
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      howDidYouFind: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-2xl">
        {/* Section Header */}
        <div
          className="mb-12 animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="text-4xl font-medium text-gray-900 leading-tight mb-6">
            Have a project in mind? Let&apos;s talk
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I&apos;d like to understand more about your company and project
            goals. The more context you provide, the more effective our
            collaboration will be!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 animate-slideUp"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-900 mb-3"
              >
                What&apos;s your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Mark Williams"
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-900 mb-3"
              >
                What&apos;s your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="mark@company.com"
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label
              htmlFor="website"
              className="block text-base font-medium text-gray-900 mb-3"
            >
              What&apos;s the website of your company?
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300"
            />
            <p className="text-sm text-gray-600 mt-2">
              If you don&apos;t have a website, please provide either your
              company name or the LinkedIn page of your company.
            </p>
          </div>

          {/* Project Category */}
          <div>
            <label className="block text-base font-medium text-gray-900 mb-4">
              Project Category
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Landing Page Design',
                'Mobile App Design',
                'Web App Design',
                'Website Design',
                'Framer Site Development',
                'UX Audit',
              ].map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.projectCategory.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                        formData.projectCategory.includes(category)
                          ? 'bg-black border-black'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}
                    >
                      {formData.projectCategory.includes(category) && (
                        <CheckmarkIcon
                          width="12"
                          height="12"
                          className="text-white absolute top-0.5 left-0.5"
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-base text-gray-900 group-hover:text-black transition-colors duration-200">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Objectives */}
          <div>
            <label
              htmlFor="projectObjectives"
              className="block text-base font-medium text-gray-900 mb-3"
            >
              What are the project objectives?
            </label>
            <textarea
              id="projectObjectives"
              name="projectObjectives"
              value={formData.projectObjectives}
              onChange={handleInputChange}
              rows={6}
              placeholder="Tell me about your site, project requirements, and when you'd like to start."
              className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* How did you find out about me */}
          <div>
            <label className="block text-base font-medium text-gray-900 mb-4">
              How did you find out about me?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'X / Twitter',
                'Dribbble',
                'LinkedIn',
                'Peerlist',
                'Layers',
                'Google Search',
                'Reference',
                'Other',
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="howDidYouFind"
                      value={option}
                      checked={formData.howDidYouFind === option}
                      onChange={() => handleRadioChange(option)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        formData.howDidYouFind === option
                          ? 'border-black'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}
                    >
                      {formData.howDidYouFind === option && (
                        <div className="w-2.5 h-2.5 bg-black rounded-full absolute top-1 left-1"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-base text-gray-900 group-hover:text-black transition-colors duration-200">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send an inquiry
            </button>
          </div>
        </form>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
