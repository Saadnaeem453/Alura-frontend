import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/">
            <img src="/alura-logo.svg" alt="logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex sm:items-center sm:pl-20 sm:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavLinkClick}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex sm:items-center">
            <Button
              variant="outline"
              className="px-5 py-2 rounded-full font-medium text-sm"
            >
              Sign In
            </Button>
            <Button className="px-5 py-2 rounded-full font-medium text-sm bg-gradient-to-r from-primary-500 to-purple-500 bg-size-200 animate-gradient-x hover:shadow-lg transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-secondary-800/95 backdrop-blur-md"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex space-x-4 px-3 py-3">
                <Button
                  variant="outline"
                  className="flex-1 px-3 py-2 rounded-full font-medium text-sm"
                >
                  Sign In
                </Button>
                <Button className="flex-1 px-3 py-2 rounded-full font-medium text-sm bg-gradient-to-r from-primary-500 to-purple-500">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
