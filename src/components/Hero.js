import React from 'react';
import content from '../content.json';

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
            <h1 className="hero-headline">{content.hero.headline}</h1>
            <p className="hero-subtext">{content.hero.subtext}</p>
            
            <div className="hero-buttons">
              {content.hero.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`btn ${button.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={(e) => handleSmoothScroll(e, button.href)}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hero-image">
            <img
              src={process.env.PUBLIC_URL + content.hero.image}
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
