import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, CTA_LINK } from "../types";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of dynamic navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center shadow-md shadow-brand-cyan/20 group-hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-brand-navy" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white flex items-center gap-2">
                EDUCALIZE
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-brand-cyan"></span>
              </span>
              <p className="text-[10px] md:text-xs font-medium tracking-widest text-[#a1a1aa] group-hover:text-brand-cyan transition-colors duration-300">
                EDUCAÇÃO FÍSICA ESCOLAR
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-blue-500 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Quero me matricular
              <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-brand-cyan transition-colors"
            id="mobile-menu-btn"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-navy border-b border-white/5 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-brand-cyan transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={CTA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-bold text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  Quero me matricular
                  <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
