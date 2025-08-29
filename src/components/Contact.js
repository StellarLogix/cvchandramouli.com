import React, { useState } from 'react';
import content from '../content.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder form submission
    console.log('Contact form submission:', formData);
    alert('Thank you for your message! We will get back to you soon. (This is a placeholder action)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{content.contact.title}</h2>
        <p className="contact-subtitle">{content.contact.subtitle}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${content.company.phone}`} className="contact-link">
                {content.company.phone}
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${content.company.email}`} className="contact-link">
                {content.company.email}
              </a>
            </div>
            
            <div className="contact-item">
              <h3>WhatsApp</h3>
              <a href={content.company.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Message us on WhatsApp
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Address</h3>
              <p>{content.company.address}</p>
              <p className="hours">{content.company.hours}</p>
              <a href={content.contact.info.directionsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {content.contact.form.fields.map((field, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      rows="5"
                      className="form-control"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="form-control"
                    />
                  )}
                </div>
              ))}
              
              <button type="submit" className="btn btn-primary btn-full">
                {content.contact.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
