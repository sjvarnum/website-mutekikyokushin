import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaViber, FaWhatsapp } from "react-icons/fa6";
import logoFooter from "../../assets/logo-footer.png";

const Footer: React.FC = () => (
  <footer className="footer bg-dark-red text-light py-4 mt-5 border-0">
    <div className="container">
      <div className="row align-items-center gy-4">
        {/* Logo */}
        <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
          <img
            src={logoFooter}
            alt="Muteki Kyokushin Logo"
            className="footer__logo img-fluid"
            style={{ maxWidth: 140 }}
            loading="lazy"
          />
        </div>
        {/* Contact Info */}
        <div className="col-12 col-md-3 text-md-start mb-3 mb-md-0">
          <div className="footer__section">
            <div className="fw-bold mb-1">Phone:</div>
            <div className="d-flex align-items-center justify-content-md-start gap-2 mb-2">
              <span>1-585-305-6003</span>
              <a href="viber://add?number=15853056003" aria-label="Viber" className="footer__icon-link"><FaViber color="#7360F2" size={20} /></a>
              <a href="https://wa.me/15853056003" aria-label="WhatsApp" className="footer__icon-link"><FaWhatsapp color="#25D366" size={20} /></a>
            </div>
            <div className="fw-bold mb-1">E-mail:</div>
            <div>
              <a href="mailto:rcruz001@rochester.rr.com" className="footer__link">rcruz001@rochester.rr.com</a><br />
              <a href="mailto:ringwars.cruz2@gmail.com" className="footer__link">ringwars.cruz2@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="col-12 col-md-3 text-md-start mb-3 mb-md-0">
          <div className="footer__section">
            <div className="fw-bold mb-1">Address:</div>
            <div>
              Village Gate Square, #274 N.<br />
              Goodman Street, Unit D240,<br />
              Rochester, New York
            </div>
          </div>
        </div>
        {/* Social */}
        <div className="col-12 col-md-3 text-md-start">
          <div className="footer__section">
            <div className="fw-bold mb-3">Follow us:</div>
            <div className="d-flex justify-content-md-start gap-3">
              <a href="https://facebook.com/MutekiKyokushin" aria-label="Facebook" className="footer__icon-link" target="_blank" rel="noopener noreferrer"><FaFacebookF color="#4267B2" size={28} /></a>
              <a href="https://instagram.com/MutekiKyokushin" aria-label="Instagram" className="footer__icon-link" target="_blank" rel="noopener noreferrer"><FaInstagram color="#0095F6" size={28} /></a>
              <a href="https://twitter.com/MutekiKyokushin" aria-label="Twitter" className="footer__icon-link" target="_blank" rel="noopener noreferrer"><FaTwitter color="#E4405F" size={28} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
