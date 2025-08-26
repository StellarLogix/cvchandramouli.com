import React, { useState } from 'react';
import content from '../content.json';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder form submission
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! (This is a placeholder action)');
    setEmail('');
  };

  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe-content">
          <h2 className="section-title">{content.subscribe.title}</h2>
          <p className="subscribe-subtitle">{content.subscribe.subtitle}</p>
          
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.subscribe.placeholder}
                className="subscribe-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                {content.subscribe.buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
