'use client';
import Image from 'next/image';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-baseline mb-12">
          <h2 className="text-4xl font-bold mr-2">Selected projects </h2>
          <p className="text-4xl font-normal">Brands and Teams I've Helped</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Project 1 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src="/clients/ARKivist-desktop.png"
                alt="ARKivist Desktop App"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">ARKivist —</h3>
            <p className="text-gray-600">
              Designing a modern desktop application for digital asset
              management and archiving.
            </p>
          </div>

          {/* Project 2 */}
          <div className="group md:mt-16">
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src="/clients/Jeeves.png"
                alt="Jeeves Financial Platform"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Jeeves —</h3>
            <p className="text-gray-600">
              Creating an intuitive financial platform with seamless payment
              experiences and expense management.
            </p>
          </div>

          {/* Project 3 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src="/clients/MUV-desktop.png"
                alt="MUV Platform"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">MUV —</h3>
            <p className="text-gray-600">
              Developing a comprehensive mobility platform with intuitive
              navigation and user experience.
            </p>
          </div>

          {/* Project 4 */}
          <div className="group md:mt-16">
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src="/clients/Myosin-Website.png"
                alt="Myosin Website"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Myosin —</h3>
            <p className="text-gray-600">
              Crafting a responsive website with elegant design for a health and
              wellness brand.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
