import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Challenge Arena', href: '/challenge-arena' },
    { name: 'Skill Passport', href: '/skill-passport' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#040816]/80 backdrop-blur-xl">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-white">Aanya Cred</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://aanyacred.com"
              className="px-5 py-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
            >
              Login
            </a>
            <Link
              to="/get-started"
              className="px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/8">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base transition-colors ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://aanyacred.com"
                  className="px-5 py-2.5 text-base text-[#94A3B8] hover:text-white transition-colors text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
                <Link
                  to="/get-started"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg text-base text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
