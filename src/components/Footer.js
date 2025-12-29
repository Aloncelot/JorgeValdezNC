import React from "react";
import "./Footer.css";
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom" ;
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <ScrollToTop />
      <div className="footer-content">
        <div className="footer-column brand-column">
          <h3 className="footer-logo">Jorge Valdez Rivera N.C.</h3>
          <p className="footer-mission">
            Comprometido con tu salud a través de planes nutricionales 
            personalizados y basados en ciencia.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com/Nutricionjorge" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/5554373485" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-column links-column">
          <h4>Explorar</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de mi</Link></li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4>Contacto</h4>
          <ul className="contact-list">
            <li>
              <FaPhoneAlt className="icon" />
              <span>(55) 5437-3485</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <span>jorgevaldezrivera@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {currentYear} Jorge Valdez Rivera N.C. Todos los derechos reservados.
          </p>
          
          <Link to="/admin-login" className="admin-link-discrete">
            <FaLock style={{ marginRight: "5px", fontSize: "0.8em" }} /> 
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;