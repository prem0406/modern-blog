const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ModernBlog
            </h4>
            <p className="text-gray-400 text-sm">
              Your source for inspiring content across technology, design,
              lifestyle, and travel.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Travel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2026 ModernBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
