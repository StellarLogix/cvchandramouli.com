import React, { useState, useEffect } from 'react';
import content from '../content.json';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
  };

  return (
    <header className={`header ${isSticky ? 'header-sticky' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>{content.company.name}</h2>
          </div>
          
          <nav className="nav">
            {content.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
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
