import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const Hero = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">C.V. Chandramouli</h1>
            <p className="hero-subtext">Advertising Consultants</p>
            
            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Get Quote
              </a>
              <a
                href="https://wa.me/919940711173"
                className="btn btn-secondary whatsapp-btn"
                onClick={(e) => handleSmoothScroll(e, 'https://wa.me/919940711173')}
              >
                <WhatsAppIcon size={20} className="whatsapp-icon" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <img
              src={process.env.PUBLIC_URL + "/images/hero-image.png"}
              alt="C.V. Chandramouli Advertising"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
