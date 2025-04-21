import { Link } from 'wouter';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const productLinks = [
  { href: '#', label: 'Features' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'Integrations' },
  { href: '#', label: 'API' },
];

const companyLinks = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Press' },
];

const supportLinks = [
  { href: '#', label: 'Help Center' },
  { href: '#', label: 'Contact Us' },
  { href: '#', label: 'Status' },
  { href: '#', label: 'Documentation' },
];

const socialLinks = [
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'Facebook', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative z-10 pt-12 pb-8 bg-[radial-gradient(ellipse_at_bottom_right,_#1e1d4b_20%,_#000_80%)]">
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-700" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-primary-500 text-2xl font-extrabold">Ethan</span>
                <span className="ml-1 text-white text-2xl font-medium">Calling</span>
              </a>
            </Link>
            <p className="mt-4 text-base text-gray-400">
              Transforming business communications with cloud-based calling solutions.
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Ethan Calling System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
