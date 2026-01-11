import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { USFlag, ESFlag } from './Flags';
import './Navbar.css';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" className="nav-link">{t("navbar.about")}</Nav.Link>
          <Nav.Link href="#experience" className="nav-link">{t("navbar.experience")}</Nav.Link>
          <Nav.Link href="#projects" className="nav-link">{t("navbar.projects")}</Nav.Link>
        </Nav>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/iv%C3%A1n-ja%C3%A9n-gil-669a08223/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ivanjaengil" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="mailto:ivanjaen2@outlook.com" className="social-icon">
            <FaEnvelope />
          </a>

          <div className="nav-separator"></div>

          <button
            className="flag-button"
            onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
            aria-label="Change language"
          >
            {i18n.language === "es" ? <USFlag width={30} /> : <ESFlag width={30} />}
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
