import "./page.css";
export default function LandingPage() {
  return (
    <div className="landing-container">

      {/* Hero section with layered background and call to action */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empower Your Study Journey</h1>
          <p className="hero-subtitle">
            Organize, share, and explore study notes with students worldwide.
          </p>
          <div className="hero-cta-group">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Watch Demo</button>
          </div>
        </div>
        <div className="hero-graphic" aria-hidden="true">
          {/* Abstract shapes or SVG patterns */}
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid meet"
            className="hero-svg"
          >
            <circle cx="400" cy="300" r="280" fill="#8054a1" opacity="0.15" />
            <circle cx="620" cy="200" r="140" fill="#4a90e2" opacity="0.2" />
            <circle cx="200" cy="400" r="180" fill="#f2a365" opacity="0.1" />
          </svg>
        </div>
      </section>

      {/* Features section with card grid */}
      <section className="features-section" aria-label="Features">
        <h2 className="section-heading">Why Choose StudyShare?</h2>
        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon" aria-hidden="true">📚</div>
            <h3>Organize Efficiently</h3>
            <p>
              Easily categorize your notes by subjects, tags, and courses with smart filters.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden="true">🤝</div>
            <h3>Collaborate & Share</h3>
            <p>
              Invite peers, share notes publicly or privately, and learn together in real-time.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden="true">🔍</div>
            <h3>Powerful Search</h3>
            <p>
              Quickly find any note or topic with lightning-fast search across all your content.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden="true">🎓</div>
            <h3>Stay Motivated</h3>
            <p>
              Track your study progress, set goals, and join study groups to stay on target.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials & social proof */}
      <section className="testimonials-section" aria-label="Student Testimonials">
        <h2 className="section-heading">What Students Say</h2>
        <div className="testimonial-slider">

          <blockquote className="testimonial-card">
            <p>
              "StudyShare transformed how I prepare for exams. Sharing notes with classmates keeps me motivated."
            </p>
            <footer>— Sarah K., Biology Student</footer>
          </blockquote>

          <blockquote className="testimonial-card">
            <p>
              "The collaboration features helped my study group stay organized and efficient across subjects."
            </p>
            <footer>— James M., Computer Science</footer>
          </blockquote>

          <blockquote className="testimonial-card">
            <p>"Amazing search and tagging — I find notes instantly whenever I need them!"</p>
            <footer>— Anita P., Engineering Student</footer>
          </blockquote>

        </div>
      </section>

      {/* CTA footer */}
      <section className="footer-cta">
        <h2>Ready to Boost Your Study Game?</h2>
        <button className="btn primary-btn large-btn">Create Your Free Account</button>
        <p className="footer-cta-note">No credit card required • 100% secure</p>
      </section>
    </div>
  );
}