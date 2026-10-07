import React, { useEffect, useState } from 'react';

const programs = [
  {
    number: '01',
    title: 'Learn with purpose',
    text: 'Build a strong foundation through learning that invites questions, ideas and independent thought.',
    tone: 'sage',
  },
  {
    number: '02',
    title: 'Find your own voice',
    text: 'Make room for creativity, collaboration and the confidence to try something new.',
    tone: 'coral',
  },
  {
    number: '03',
    title: 'Grow together',
    text: 'Discover the value of empathy, responsibility and being part of a close-knit community.',
    tone: 'yellow',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const progress = document.querySelector('.scroll-progress');
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${amount})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tulas International School home" onClick={closeMenu}>
          <span className="brand-mark">T</span>
          <span className="brand-name">TULAS <small>INTERNATIONAL SCHOOL</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#learning" onClick={closeMenu}>Learning</a>
          <a href="#campus" onClick={closeMenu}>Campus life</a>
          <a className="nav-cta" href="#admissions" onClick={closeMenu}>Admissions <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85"
            alt="Students learning together in a bright classroom"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light-eyebrow"><span /> TULAS INTERNATIONAL SCHOOL · DEHRADUN</p>
            <h1 id="hero-title">A wider world<br />starts <em>within.</em></h1>
            <p className="hero-copy">Curious minds. Considerate hearts. An education shaped for all that comes next.</p>
            <a className="button button-light" href="#approach">Discover Tulas <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-caption"><span>01 / 03</span><span>LEARN · EXPLORE · BECOME</span></div>
          <a className="scroll-cue" href="#approach" aria-label="Scroll to discover more"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-pad" id="approach">
          <div className="intro-label reveal" data-reveal>
            <span className="eyebrow">A PLACE TO BEGIN</span>
            <span className="sun-mark" aria-hidden="true">✳</span>
          </div>
          <div className="intro-copy reveal" data-reveal>
            <h2>More than what you learn.<br /><em>Who you become.</em></h2>
            <p>At Tulas International School, learning is the beginning of a bigger journey. We bring knowledge, curiosity and character together, helping every student find confidence in their own path.</p>
            <a className="text-link" href="#learning">The Tulas approach <span aria-hidden="true">↗</span></a>
          </div>
          <div className="intro-note reveal" data-reveal>
            <span className="note-line" />
            <p>Rooted in Dehradun.<br />Open to the world.</p>
          </div>
        </section>

        <section className="learning section-pad" id="learning">
          <div className="section-heading reveal" data-reveal>
            <div>
              <span className="eyebrow">THE TULAS EXPERIENCE</span>
              <h2>Room to <em>become.</em></h2>
            </div>
            <p>Good learning goes beyond the classroom. It gives young people the tools and the space to discover what they can do.</p>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className={`program-card ${program.tone} reveal`} data-reveal key={program.number}>
                <div className="card-top"><span>{program.number}</span><span className="card-spark" aria-hidden="true">✳</span></div>
                <div><h3>{program.title}</h3><p>{program.text}</p></div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="campus" id="campus">
          <div className="campus-image-wrap reveal" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=85"
              alt="Students sharing ideas around a classroom table"
              loading="lazy"
            />
            <span className="image-stamp">A COMMUNITY<br />THAT GROWS</span>
          </div>
          <div className="campus-copy reveal" data-reveal>
            <span className="eyebrow">LIFE AT TULAS</span>
            <h2>Find your people.<br /><em>Find your place.</em></h2>
            <p>Every day is a chance to take part, try something different and build friendships that make school feel like it belongs to you.</p>
            <a className="text-link" href="#admissions">Explore campus life <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="admissions section-pad" id="admissions">
          <div className="admissions-inner reveal" data-reveal>
            <div>
              <span className="eyebrow light-eyebrow"><span /> YOUR NEXT CHAPTER</span>
              <h2>Let's make room<br />for <em>what's possible.</em></h2>
            </div>
            <div className="admissions-action">
              <p>Take the first step towards a Tulas education. Our admissions team is ready to help you find out more.</p>
              <a className="button button-dark" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Explore admissions <span aria-hidden="true">↗</span></a>
            </div>
            <span className="admissions-flower" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">T</span>
          <span className="brand-name">TULAS <small>INTERNATIONAL SCHOOL</small></span>
        </a>
        <span className="footer-location">DEHRADUN, UTTARAKHAND, INDIA</span>
        <a className="footer-link" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Visit tis.edu.in <span aria-hidden="true">↗</span></a>
        <span className="copyright">© TULAS INTERNATIONAL SCHOOL</span>
      </footer>
    </>
  );
}

export default App;