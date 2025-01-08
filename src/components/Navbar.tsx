import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'BIOGRAPHY', href: '/biography' },
    { name: 'MAPS', href: '/#maps' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-transparent py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3">
            {/* Logo */}
            <div className="mt-8 mb-4">
              <a
                href="/"
                className="text-[73px] uppercase tracking-[1px] text-black-800"
                style={{
                  fontFamily: '"Josefin Sans", "Poppins"',
                  fontWeight: 400,
                  fontSize: '73px',
                  height: 'auto',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '87.6px',
                  textAlign: 'center',
                  textDecorationLine: 'none',
                  textDecorationStyle: 'solid',
                  textSizeAdjust: '100%',
                  width: 'auto',
                }}
              >
                FORMFORGE
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4 top-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black-800 hover:text-gray-600 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center mt-6" id="topNav">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="nav-link text-gray-500 hover:text-black px-4 py-2 text-[28px] tracking-[0.4px] font-normal leading-normal transition-all transform duration-300 ease-out"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <style>{`
              #topNav {
                text-align: center;
              }
              .nav-link {
                transition: transform 0.3s ease-out, scale 0.2s ease-out, color 0.3s ease;
              }
              .nav-link:hover {
                transform: translateY(-3px);
                scale: 1.1;
                color: black;
              }
            `}</style>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden w-full">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.href)}
                      className="w-full text-gray-800 hover:text-gray-600 block px-3 py-2 text-base tracking-widest text-center"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Navbar;
