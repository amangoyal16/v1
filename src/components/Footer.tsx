'use client';

export default function Footer() {
  return (
    <footer className="container border-t border-gray-200 mt-12 pb-20">
      <div className="px-4 pt-6">
        <div className="flex justify-around text-secondary/50">
          <a href="https://www.instagram.com/aman.goyal.design/">Instagram</a>
          <a href="https://www.twitter.com/aman.goyal.design/">Twitter</a>
          <a href="https://www.linkedin.com/in/aman.goyal.design/">LinkedIn</a>
        </div>
      </div>
      <div className="  pt-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Aman Goyal. All rights reserved.</p>
      </div>
    </footer>
  );
}
