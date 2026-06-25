import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { smoother } from "./Navbar";
import "./styles/Footer.css";

const Footer = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (smoother) {
        smoother.scrollTo(target, true, "top top");
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <a href="/#" className="footer-logo" onClick={(e) => handleScrollTo(e, "#landingDiv")}>
              <img src="/images/logo.jpg" alt="Moxiweb" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">
              Crafting premium digital experiences through high-performance development and creative design solutions.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleScrollTo(e, "#work")}>
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="footer-contact-info">
              <a href="tel:+917006237200" className="footer-phone">+91 70062 37200</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} MoxiWeb. All rights reserved.
          </div>
          <div className="footer-credits">
            Designed & Developed by <span className="credits-highlight">Ahmed Mohsin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
