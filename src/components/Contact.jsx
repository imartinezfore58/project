import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">
                  <a href="tel:+250792650912">+250 792 650 912</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">👨‍👩‍👦</span>
              <div>
                <p className="info-label">Guardian Contacts</p>
                <p className="info-value">
                  <a href="tel:+250788552503">+250 788 552 503</a> / <a href="tel:+250788830036">+250 788 830 036</a>
                </p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-grid">
              <a href="#" className="social-link" title="Instagram">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link" title="Facebook">
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link" title="Telegram">
                <span className="social-icon">📱</span>
                <span>Telegram</span>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <span className="social-icon">🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Let's Work Together</h3>
          <p>I'm always interested in hearing about new projects and opportunities.</p>
          <button className="btn btn-primary">Send a Message</button>
        </div>
      </div>
    </section>
  );
}
