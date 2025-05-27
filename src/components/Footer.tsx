'use client';

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto pb-12 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          <a href="mailto:amangoyal676@gmail.com">amangoyal676@gmail.com</a>
          <a href="tel:+91 9802391342">+91 9802391342</a>
        </div>

        <div className="flex justify-around mt-4">
          <a href="https://www.instagram.com/aman.goyal.design/">Instagram</a>
          <a href="https://www.twitter.com/aman.goyal.design/">Twitter</a>
          <a href="https://www.linkedin.com/in/aman.goyal.design/">LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
        <p>© 2025 Aman Goyal. All rights reserved.</p>
      </div>
    </footer>
  );
}
