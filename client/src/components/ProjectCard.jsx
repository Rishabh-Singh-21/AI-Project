const ProjectCard = ({ project, index }) => (
  <div className="col-md-6 col-xl-4">
    <div className="project-card h-100 p-4 fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <h5 className="fw-bold mb-3">{project.title}</h5>
      <p className="text-light-emphasis">{project.description}</p>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {project.techStack.map((tech) => (
          <span key={tech} className="badge rounded-pill text-bg-primary-subtle text-primary-emphasis">
            {tech}
          </span>
        ))}
      </div>
      <div className="d-flex gap-3 mt-auto">
        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="link-light">
          Live Demo
        </a>
        <a href={project.sourceCode} target="_blank" rel="noreferrer" className="link-light">
          Source Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
