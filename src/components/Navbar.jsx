import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/spacebox-logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Servide', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-sb-border shadow-[0_1px_0_rgba(11,22,38,0.02)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[76px]">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="SPACEBOX — Beranda">
          <img src={logo} alt="SPACEBOX logo" className="h-9 sm:h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[14px] font-medium text-sb-ink-soft hover:text-sb-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-sb-navy text-white px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-sb-blue hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-sb-border text-sb-ink"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-6 pt-6 gap-1">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`border-b border-sb-border transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-lg font-semibold text-sb-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-6">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-sb-blue text-white px-5 py-3.5 text-sm font-semibold w-full"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
