import React from "react";
import MyNavbar from "./components/Navbar";
import "./App.css";
import profileImage from "./assets/images/Ivan1.png";
import { useTranslation } from "react-i18next";

// Importamos iconos
import boostrapIcon from "./assets/images/Boostrap.png";
import cssIcon from "./assets/images/css.png";
import javaIcon from "./assets/images/java.png";
import javascriptIcon from "./assets/images/JavaSc.png";
import laravelIcon from "./assets/images/Laravel.png";
import phpIcon from "./assets/images/php.png";
import sqlIcon from "./assets/images/sql.png";
import tailwindIcon from "./assets/images/tailwind.png";
import dockerIcon from "./assets/images/docker.png";
import htmlIcon from "./assets/images/html.png";
import nodeIcon from "./assets/images/nodejs.png";
import reactIcon from "./assets/images/react.png";
import typescriptIcon from "./assets/images/typescript.png";
import wordpressIcon from "./assets/images/wordpress.png";
import n8nIcon from "./assets/images/n8n.png";
import angularIcon from "./assets/images/Angular.png";

// Imagenes
import TiendaLego1 from "./assets/images/TiendaLego.png";
import TiendaLego2 from "./assets/images/TiendaLego2.png";
import TiendaLego3 from "./assets/images/TiendaLego3.png";

// 🔹 Tarjeta de proyecto
import ProjectCard from "./components/ProjectCard";

// =================== ICONOS PARA PROYECTOS ===================
const techIcons = {
  Java: javaIcon,
  PHP: phpIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: javascriptIcon,
  Boostrap: boostrapIcon,
  Tailwind: tailwindIcon,
  Laravel: laravelIcon,
  SQL: sqlIcon,
  Docker: dockerIcon,
  "Node.js": nodeIcon,
  React: reactIcon,
  TypeScript: typescriptIcon,
  WordPress: wordpressIcon,
  n8n: n8nIcon,
  Angular: angularIcon,
};

function App() {
  const { t } = useTranslation();

  // =================== TECNOLOGÍAS ===================
  const technologies = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "PHP", icon: phpIcon },
    { name: "Boostrap", icon: boostrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Laravel", icon: laravelIcon },
    { name: "Java", icon: javaIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "React", icon: reactIcon },
    { name: "Angular", icon: angularIcon },
    { name: "WordPress", icon: wordpressIcon },
    { name: "n8n", icon: n8nIcon },
  ];

  // =================== PROJECTS ===================
  const projects = [
    {
      name: t("projects.lego.name"),
      technologies: ["Laravel", "PHP", "CSS", "HTML", "JavaScript", "SQL"],
      status: t("projects.status.done"),
      statusKey: "done",
      github: "https://github.com/Ivanjaengil/tiendaLego",
      description: t("projects.lego.description"),
      builtWith: t("projects.lego.builtWith"),
      images: [TiendaLego1, TiendaLego2, TiendaLego3]
    },
    {
      name: t("projects.driver.name"),
      technologies: ["Laravel", "PHP", "CSS", "HTML", "TypeScript", "SQL"],
      status: t("projects.status.done"),
      statusKey: "done",
      github: "https://github.com/Ivanjaengil/Driver-Go",
      description: t("projects.driver.description"),
      builtWith: t("projects.driver.builtWith"),
      images: ["/images/driver1.png", "/images/driver2.png"],
    },
    {
      name: t("projects.southwines.name"),
      technologies: ["Laravel", "PHP", "CSS", "HTML", "JavaScript", "SQL"],
      status: t("projects.status.done"),
      statusKey: "done",
      github: "https://github.com/Ivanjaengil/Southwines",
      description: t("projects.southwines.description"),
      builtWith: t("projects.southwines.builtWith"),
      images: ["/images/southwines1.png", "/images/southwines2.png"],
    },
    {
      name: t("projects.zestcharge.name"),
      technologies: ["Laravel", "PHP", "CSS", "HTML", "JavaScript", "SQL"],
      status: t("projects.status.progress"),
      statusKey: "progress",
      github: "https://github.com/Ivanjaengil/zestcharge",
      description: t("projects.zestcharge.description"),
      builtWith: t("projects.zestcharge.builtWith"),
      images: ["/images/zest1.png", "/images/zest2.png"],
    },
    {
      name: t("projects.metotech.name"),
      technologies: ["Angular", "TypeScript", "CSS", "HTML"],
      status: t("projects.status.done"),
      statusKey: "done",
      github: "https://github.com/Ivanjaengil/MeteoTech",
      description: t("projects.metotech.description"),
      builtWith: t("projects.metotech.builtWith"),
      images: []
    },
  ];

  return (
    <div className="App">
      <MyNavbar />

      {/* =================== SOBRE MÍ =================== */}
      <section id="about">
        <div className="neon-container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t("about.title")}</h2>
              <p className="about-intro">
                {t("about.intro")}
              </p>
              <p className="about-description">
                {t("about.description")}
              </p>
              <p className="about-passion">
                {t("about.passion")}
              </p>
            </div>
            <div className="profile-image">
              <img src={profileImage} alt="Iván" />
            </div>
          </div>
        </div>
      </section>

      {/* =================== EXPERIENCIA =================== */}
      <section id="experience">
        <h2>{t("experience.title")}</h2>
        <div className="experience-container">
        <div className="experience-item">
  <h3>{t("experience.proxya.title")}</h3>
  <div className="experience-details">
    <p className="experience-date">{t("experience.proxya.date")}</p>
    <p className="experience-location">{t("experience.proxya.location")}</p>
  </div>
  <ul className="experience-responsibilities">
    {t("experience.proxya.responsibilities", { returnObjects: true }).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
</ul>

</div>

<div className="experience-item">
  <h3>{t("experience.freelance_wordpress.title")}</h3>
  <div className="experience-details">
    <p className="experience-date">{t("experience.freelance_wordpress.date")}</p>
    <p className="experience-location">{t("experience.freelance_wordpress.location")}</p>
  </div>
  <ul className="experience-responsibilities">
    {t("experience.freelance_wordpress.responsibilities", { returnObjects: true }).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>

              {/* Nueva experiencia */}
    <div className="experience-item">
      <h3>{t("experience.grupo_oro.title")}</h3>
      <div className="experience-details">
        <p className="experience-date">{t("experience.grupo_oro.date")}</p>
        <p className="experience-location">{t("experience.grupo_oro.location")}</p>
      </div>
      <ul className="experience-responsibilities">
        {t("experience.grupo_oro.responsibilities", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
</ul>
    </div>


          {/* =================== FORMACIÓN =================== */}
          <div className="education-section">
            <h3>{t("education.title")}</h3>
            <div className="education-item">
              <h4>{t("education.master_ciberseguridad.title")}</h4>
              <p className="education-date">{t("education.master_ciberseguridad.date")}</p>
            </div>
            <div className="education-item">
              <h4>{t("education.daw.title")}</h4>
              <p className="education-date">{t("education.daw.date")}</p>
            </div>
            <div className="education-item">
              <h4>{t("education.smr.title")}</h4>
              <p className="education-date">{t("education.smr.date")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== TECNOLOGÍAS =================== */}
      <section id="technologies">
        <h2>{t("technologies.title")}</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} className="tech-icon-large" />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =================== PROYECTOS =================== */}
      <section id="projects">
        <h2>{t("projects.title")}</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} techIcons={techIcons} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;