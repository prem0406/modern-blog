import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a
              href="/"
              // className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              <img
                src="/logo.svg"
                alt="ModernBlog"
                className="w-14 h-14 hover:scale-110 transition-transform duration-500"
              />
            </a>
            {/* <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ModernBlog
            </h1> */}
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="hidden md:block px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Subscribe
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Articles
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
