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
          <div className="hero-text-center">
            <h1 className="hero-headline">Transform Your Brand with Creative Excellence</h1>
            <p className="hero-subtext">Professional advertising solutions that captivate audiences and drive results. From traditional print campaigns to cutting-edge digital marketing strategies, we bring your vision to life with decades of industry expertise.</p>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
