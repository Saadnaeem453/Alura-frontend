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
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-[#ffd095]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/">
              <a href="/" className="block ">
                <img src="/alura-logo.svg" alt="logo" className="h-10 w-auto" />
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
                  className="group relative text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase relative inline-block">
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group relative text-base text-gray-400 hover:text-primary-500 transition-colors inline-block"
                  >
                    <span className="relative hover:text-white z-10">
                      {link.label}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group relative text-base  text-gray-400 hover:text-primary-500 transition-colors inline-block"
                  >
                    <span className="relative hover:text-white z-10">
                      {link.label}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase relative inline-block">
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group relative text-base text-gray-400 hover:text-primary-500 transition-colors inline-block"
                  >
                    <span className="relative hover:text-white z-10">
                      {link.label}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center group">
            &copy; {new Date().getFullYear()} 
            <span className="relative inline-block mx-1">
              ALura Calling System
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-[#ffd095] group-hover:w-full transition-all duration-700 ease-in-out"></span>
            </span> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}