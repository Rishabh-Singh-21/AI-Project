import { useEffect, useMemo, useState } from 'react';
import ProfileLinks from './components/ProfileLinks';
import ProjectCard from './components/ProjectCard';

const roleVariants = ['Full Stack Developer', 'React Developer', 'Node.js Engineer', 'Problem Solver'];

const App = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await fetch('/api/portfolio');
      const data = await response.json();
      setPortfolio(data);
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roleVariants.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  if (!portfolio) {
    return (
      <main className="loading-screen">
        <h2 className="pulse">Loading your portfolio...</h2>
      </main>
    );
  }

  const { profile, skills, projects, achievements, profiles } = portfolio;

  return (
    <div className="app-bg text-light">
      <header className="container py-5">
        <div className="hero-panel p-4 p-lg-5">
          <p className="text-uppercase fw-semibold tracking mb-2">Welcome to my portfolio</p>
          <h1 className="display-4 fw-bold">{profile.name}</h1>
          <h3 className="type-role text-info">{roleVariants[activeRoleIndex]}</h3>
          <p className="lead mt-3">{profile.tagline}</p>
          <p className="text-light-emphasis col-lg-8">{profile.about}</p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a className="btn btn-info btn-lg rounded-pill px-4" href={profile.resumeLink} target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn btn-outline-light btn-lg rounded-pill px-4" href="#projects">
              Explore Projects
            </a>
          </div>
          <ProfileLinks profiles={profiles} />
        </div>
      </header>

      <section className="container py-4">
        <div className="glass-panel p-4">
          <h2 className="mb-4">Skills</h2>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="badge skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="container py-5">
        <h2 className="mb-4">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <div className="glass-panel p-4">
          <h2>Achievements</h2>
          <ul className="mt-3 mb-0">
            {achievements.map((achievement) => (
              <li key={achievement} className="py-1">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="container pb-4 text-center text-light-emphasis">
        © {year} {profile.name} · {profile.location}
      </footer>
    </div>
  );
};

export default App;
