import { useState } from "react";
import MapIcon from "./MapIcon";
import SendIcon from "./SendIcon";
import WhatsAppIcon from "./WhatsAppIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    alert(
      "Thank you for your message! We will get back to you shortly during business hours."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us to Get Started</h2>
        <p className="contact-subtitle">
          Ready to elevate your brand? Get in touch with us today.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Phone</h3>
              <a href="tel:+919940711173" className="contact-link">
                +91 99407 11173
              </a>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:rcvijay@yahoo.co.in" className="contact-link">
                rcvijay@yahoo.co.in
              </a>
            </div>

            <div className="contact-item">
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/919940711173"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline whatsapp-btn"
              >
                <WhatsAppIcon size={20} className="whatsapp-icon" />
                Message us on WhatsApp
              </a>
            </div>

            <div className="contact-item">
              <h3>Address</h3>
              <p>
                Srinivasa Ragavan Street, R.S. Puram, Coimbatore, Tamil Nadu,
                India
              </p>
              <p className="hours">Open today: 06:00 am - 11:00 pm</p>
              <a
                href="https://maps.google.com/?q=Srinivasa+Ragavan+Street+RS+Puram+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MapIcon size={20} className="map-icon" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <SendIcon size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
