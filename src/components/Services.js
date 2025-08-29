import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Print Advertising",
      description: "Creating impactful print campaigns that capture attention and drive results. From concept to execution, we deliver compelling visual stories."
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital strategies including social media marketing, SEO, and online advertising to boost your brand's digital presence."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
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
