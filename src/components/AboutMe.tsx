'use client';

export default function AboutMe() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Left: Text */}
        <div className="col-span-12 md:col-span-5 w-full mb-10 md:mb-0">
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-4 inline-block">
            ✹ Meet Aman
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
            More Than a Designer — Your Product Partner.
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            I'm Aman Goyal, a Product and Design Strategist with over 5 years of
            experience helping founders and startups turn ideas into
            high-performing products.
            <br />
            <br />
            Starting as a developer and growing into a product leader, I bridge
            the gap between strategy, design, and technology — so you don't just
            get beautiful interfaces, you get real, scalable results.
            <br />
            <br />
            I've partnered with brands across AI, SaaS, fintech, and consumer
            platforms, delivering 20+ successful projects, launching multiple
            funded startups, and improving user engagement by over 50% across
            key products.
            <br />
            <br />I believe the best products aren't just designed — they're
            engineered for clarity, speed, and long-term growth.
            <br />
            <br />
            Whether you're building your first MVP or scaling a platform, I
            bring a clear, hands-on process to move fast, ship smart, and make
            an impact.
          </p>
        </div>
        {/* Right: Image */}
        <div className="col-span-12 md:col-span-7 w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-200  w-full h-full">
            <img
              src="/clients/ARKivist-desktop.png"
              alt="Aman Goyal Rehman portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
