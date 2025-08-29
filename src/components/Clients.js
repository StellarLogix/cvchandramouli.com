import React from 'react';
import content from '../content.json';

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">{content.clients.title}</h2>
        
        <div className="clients-grid">
          {content.clients.logos.map((client, index) => (
            <div key={index} className="client-logo">
              <img 
                src={client.image} 
                alt={client.name} 
                className="client-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
