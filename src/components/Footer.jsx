export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm sm:text-base">
          © 2025 My Shop. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a
            href="#"
            className="hover:text-white transition text-sm sm:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition text-sm sm:text-base"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition text-sm sm:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
