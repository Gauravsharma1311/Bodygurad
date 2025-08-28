import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section with left margin */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0 ml-4">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-lg font-semibold">Bodyguard</span>
          </div>

          {/* Links */}
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Press Inquiry
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Support
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 Bodyguard Security Solutions, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
