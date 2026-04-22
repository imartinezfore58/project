import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="profile-placeholder">
              <span>�</span>
              <p>Profile Image</p>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Iradukunda Nshimyeyo Martinien</h1>
            <p className="hero-subtitle">Full Stack Developer | Rwanda</p>
            <p className="hero-description">
              Building modern, scalable web applications with passion and expertise
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="hero-info">
          <div className="info-card">
            <h3>18</h3>
            <p>Years Old</p>
          </div>
          <div className="info-card">
            <h3>5+</h3>
            <p>Projects</p>
          </div>
          <div className="info-card">
            <h3>🇷🇼</h3>
            <p>Rwanda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
