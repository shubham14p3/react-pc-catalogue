import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.scss';

const Footer = () => (
  <section className="footer">
    <div className="footer-info">

      <div className="social-icons">
        <ul className="text-center">
          <li>
            <a href="https://www.facebook.com/shubham14p3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/shubham14p3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/shubham14p3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'angellist']} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/shubham14p3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li>
            <a href="https://github.com/shubham14p3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
          <li>
            <a href="skype:deniz.lucaz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'skype']} />
            </a>
          </li>
        </ul>
      </div>

      <p>FOOD WAR | All rights reserved</p>
    </div>
  </section>
);

export default Footer;
