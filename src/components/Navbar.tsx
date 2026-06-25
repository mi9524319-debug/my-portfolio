import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
      smoothTouch: 0.15,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (smoother) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    const resizeHandler = () => {
      if (smoother) {
        ScrollSmoother.refresh(true);
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/logo.jpg" alt="Moxiweb" className="navbar-logo-img" />
        </a>
        <a
          href="tel:+917006237200"
          className="navbar-connect"
          data-cursor="disable"
        >
          +91 70062 37200
        </a>
        <button
          className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#about"
              onClick={(e) => handleMobileLinkClick(e, "#about")}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={(e) => handleMobileLinkClick(e, "#work")}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleMobileLinkClick(e, "#contact")}
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="tel:+917006237200"
              className="mobile-nav-phone"
              onClick={closeMenu}
            >
              +91 70062 37200
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
