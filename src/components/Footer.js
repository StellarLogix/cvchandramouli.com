import React from 'react';
import content from '../content.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>{content.footer.copyright}</p>
          </div>
          <div className="footer-right">
            <p>{content.footer.poweredBy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
