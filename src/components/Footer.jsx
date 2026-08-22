import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubBrandIcon, FacebookIcon } from './SocialIcons';
import logo from '../assets/spacebox-logo.png';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const servicesList = [
  'Creative Design',
  'UI/UX Design',
  'Web Development',
  'Electronics & IoT',
  'Software Development',
];

const socials = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: GithubBrandIcon, href: '#', label: 'GitHub' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-sb-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <img src={logo} alt="SPACEBOX logo" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-3 text-sm font-semibold text-sb-cyan">Creatif, Elektronik &amp; Desain</p>
          <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
            SpaceBox is a creative technology studio that combines design, technology, system security, and digital development to help businesses build better products and experiences.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-sb-blue hover:text-white hover:bg-sb-blue/20"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Navigasi</h4>
          <ul className="mt-5 space-y-3">
            {navigation.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-white/50 hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Layanan</h4>
          <ul className="mt-5 space-y-3">
            {servicesList.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Contact</h4>
          <ul className="mt-5 space-y-4">
            <li className="flex items-center gap-2.5 text-sm text-white/50">
              <Mail size={15} className="text-sb-cyan shrink-0" /> raditya@gmail.com
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/50">
              <Phone size={15} className="text-sb-cyan shrink-0" /> +62 8235-9027-400
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/50">
              <MapPin size={15} className="text-sb-cyan shrink-0" /> Online, Indonesia
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 SPACEBOX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
