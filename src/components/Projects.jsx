import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart School Management System',
      description: 'A full-stack platform for managing students, teachers, attendance, and grades',
      tech: ['React', 'Node.js', 'MySQL'],
      icon: '🏫'
    },
    {
      id: 2,
      title: 'E-commerce Web Application',
      description: 'A responsive online store with product listings, cart system, and payment integration',
      tech: ['React', 'PHP', 'MySQL'],
      icon: '🛍️'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio designed in Figma and developed to showcase skills and projects',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: '💼'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity web app for creating, updating, and tracking tasks',
      tech: ['React', 'Node.js'],
      icon: '✓'
    },
    {
      id: 5,
      title: 'Basic Web3 DApp',
      description: 'A decentralized application demonstrating wallet connection and smart contract interaction',
      tech: ['Web3', 'JavaScript'],
      icon: '⛓️'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
