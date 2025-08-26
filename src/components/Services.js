import React from 'react';
import content from '../content.json';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{content.services.title}</h2>
        
        <div className="services-grid">
          {content.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
