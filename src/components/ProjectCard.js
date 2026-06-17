import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, techIcons }) => {
  const { t } = useTranslation();

  return (
    <div className="project-item">
      <div className="project-info">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-built-with">{project.builtWith}</p>
        <p className="project-status">
          <strong>{t("projects.status_label")}</strong>{" "}
          <span
            className={
              project.statusKey === "done"
                ? "status-done"
                : "status-progress"
            }
          >
            {project.status}
          </span>
        </p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {t("projects.view_github")}
        </a>
      </div>

      {/* Tecnologías */}
      <div className="project-tech">
        {project.technologies.map((tech, i) => (
          <div key={i} className="tech-icon-container">
            {techIcons[tech] && (
              <img
                src={techIcons[tech]}
                alt={tech}
                className="tech-icon-small"
              />
            )}
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;