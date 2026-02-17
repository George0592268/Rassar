
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    setMobileMenuOpen(false);
    
    // Check for route-based navigation first
    if (target === 'services' || target === 'innovations' || target === 'audit') {
      navigate(`/${target}`);
      window.scrollTo(0, 0);
      return;
    }

    // Handle home page scrolling
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { name: 'Услуги', target: 'services' },
    { name: 'Инновации', target: 'innovations' },
    { name: 'Технологии', target: 'technology' },
    { name: 'Производство', target: 'production' },
    { name: 'Аудит', target: 'audit' },
    { name: 'Калькулятор', target: 'calculator' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-industrial-900/95 backdrop-blur-md border-b border-industrial-700 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-industrial-accent to-blue-600 rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="font-mono text-white font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              РАССАР
            </span>
            <span className="text-[10px] uppercase tracking-widest text-industrial-400 group-hover:text-industrial-accent transition-colors">
              ЭкоФорвард Групп
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.target)}
              className="text-sm font-medium text-industrial-300 hover:text-white hover:border-b-2 border-industrial-accent transition-all py-1"
            >
              {item.name}
            </button>
          ))}
          <a
            href="tel:+79879176580"
            className="flex items-center gap-2 bg-industrial-accent hover:bg-sky-400 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)] animate-pulse-slow"
          >
            <Phone size={16} />
            <span>+7 (987) 917 65 80</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-industrial-900 border-b border-industrial-700 p-4 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-lg font-medium text-industrial-200 py-2 border-b border-industrial-800 text-left"
              onClick={() => scrollToSection(item.target)}
            >
              {item.name}
            </button>
          ))}
          <a
            href="tel:+79879176580"
            className="text-industrial-accent font-bold py-2 flex items-center gap-2"
          >
            <Phone size={18} /> Позвонить
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
