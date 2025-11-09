import { useState } from "react";
import CheckIcon from "./CheckIcon";
import MapIcon from "./MapIcon";
import SendIcon from "./SendIcon";
import WhatsAppIcon from "./WhatsAppIcon";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/rcvijay@yahoo.co.in",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setShowModal(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                <SendIcon size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Thank You for Contacting Us!</h3>
            </div>
            <div className="modal-body">
              <p>
                We appreciate you reaching out to us. Our team will review your
                message and get back to you as soon as possible during business
                hours.
              </p>
              <p className="modal-note">
                Typical response time: Within 24 hours
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={closeModal}>
                <CheckIcon size={20} />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
