import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`header ${isSticky ? 'header-sticky' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/hero-image.png"}
              alt="C.V. Chandramouli"
              className="logo-img"
            />
            <h2>CV Chandramouli Advertising</h2>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Get Quote
            </a>
          </nav>

          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
