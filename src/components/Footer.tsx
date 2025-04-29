'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Aman Goyal</h2>
            <p className="text-gray-600 mt-2">
              Design that inspires and connects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>hello@Aman Goyal.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Projects</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Social</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>© 2023 Aman Goyal Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
