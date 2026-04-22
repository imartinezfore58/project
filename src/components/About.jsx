import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate 18-year-old software developer from Rwanda with a strong foundation in full-stack web development.
            </p>
            <p>
              I completed my O-Level studies at <strong>Petit Séminaire Virgo Fidelis</strong> and pursued technical education at 
              <strong> École Technique Saint Kizito Save</strong> and <strong>Msgr. Mubiligi Catholic TSS</strong>.
            </p>
            <p>
              Beyond coding, I'm an elite athlete in volleyball and football, which has taught me discipline, teamwork, and leadership—values I bring to every project.
            </p>
            <p>
              My passion lies in building modern, scalable web applications that solve real-world problems. I'm constantly learning and 
              exploring new technologies like Web3 and system design to stay at the cutting edge of development.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">⚡</span>
              <h3>Quick Learner</h3>
              <p>Passionate about mastering new technologies</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🎯</span>
              <h3>Problem Solver</h3>
              <p>Focused on building practical solutions</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🤝</span>
              <h3>Team Player</h3>
              <p>Strong collaboration and leadership skills</p>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🏆</span>
              <h3>Elite Athlete</h3>
              <p>Volleyball & Football player with discipline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
