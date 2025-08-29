import React from 'react';

const Clients = () => {
  const clients = [
    { name: "Client 1", image: "/images/client-1.svg" },
    { name: "Client 2", image: "/images/client-2.svg" },
    { name: "Client 3", image: "/images/client-3.svg" },
    { name: "Client 4", image: "/images/client-4.svg" },
    { name: "Client 5", image: "/images/client-5.svg" },
    { name: "Client 6", image: "/images/client-6.svg" },
    { name: "Client 7", image: "/images/client-7.svg" },
    { name: "Client 8", image: "/images/client-8.svg" }
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img
                src={process.env.PUBLIC_URL + client.image}
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
