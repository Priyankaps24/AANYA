import { Link } from 'react-router';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const productLinks = [
    { name: 'Skill Passport', href: '/skill-passport' },
    { name: 'Challenge Arena', href: '/challenge-arena' },
    { name: 'Credential Vault', href: '/products' },
    { name: 'AI Analytics', href: '/products' },
  ];

  const solutionsLinks = [
    { name: 'For Students', href: '/solutions' },
    { name: 'For Universities', href: '/solutions' },
    { name: 'For Recruiters', href: '/recruiters' },
    { name: 'For Employers', href: '/solutions' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-white/8 bg-[#040816]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">Aanya Cred</span>
            </Link>
            <p className="text-[#94A3B8] text-base mb-6 max-w-md">
              Building the trust layer for future talent. Verify skills, showcase capability, and become discoverable.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} className="text-[#94A3B8]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} className="text-[#94A3B8]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Github size={18} className="text-[#94A3B8]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-sm">
            © 2026 Aanya Cred. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[#94A3B8] hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#94A3B8] hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
