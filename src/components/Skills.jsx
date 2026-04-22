import '../styles/Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'PHP'],
      icon: '⚙️'
    },
    {
      category: 'Programming',
      skills: ['Python'],
      icon: '🐍'
    },
    {
      category: 'Design & Tools',
      skills: ['Figma', 'UML'],
      icon: '🛠️'
    },
    {
      category: 'Database',
      skills: ['MySQL'],
      icon: '🗄️'
    },
    {
      category: 'Emerging Tech',
      skills: ['Web3', 'System Design'],
      icon: '🚀'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
