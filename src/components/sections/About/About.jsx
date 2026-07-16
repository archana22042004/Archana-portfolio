import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      {/* Section Heading */}
      <div className="section-heading">
        <p className="section-subtitle">Get To Know Me</p>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-grid">

        {/* Left Side */}
        <div className="about-left">

          <p className="about-description">
            I am a passionate <span>Full Stack Developer</span> with a strong
            interest in building scalable, responsive, and user-friendly web
            applications. I enjoy transforming ideas into real-world solutions
            using modern technologies while continuously improving my technical
            and problem-solving skills.
          </p>

          <p className="about-description">
            My expertise includes <span>Java, Spring Boot, React,
            JavaScript, Python, MySQL,</span> and modern web technologies.
            I enjoy learning emerging technologies and building impactful
            software that solves real-world problems.
          </p>

        </div>

        {/* Right Side */}
        <div className="about-right">

          {/* Education */}
          <div className="info-card">

            <h3>🎓 Education</h3>

            <h4 className="education-degree">
              B.Tech Information Technology
            </h4>

            <p className="education-college">
              St. Joseph's College of Engineering
            </p>

            <span className="education-year">
              Chennai • 2022 – 2026
            </span>

          </div>

          {/* Experience */}
          <div className="info-card">

            <h3>💼 Experience</h3>

            <div className="experience-item">
              <h4>Full Stack Development Intern</h4>
              <p>IQMath Technologies</p>
            </div>

            <div className="experience-item">
              <h4>Digital Marketing Intern</h4>
              <p>iStudio Technologies</p>
            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="stats">

        <div className="stat">
          <h2>4+</h2>
          <span>Projects</span>
        </div>

        <div className="stat">
          <h2>2</h2>
          <span>Internships</span>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <span>Coding Problems</span>
        </div>

        <div className="stat">
          <h2>5+</h2>
          <span>Certifications</span>
        </div>

      </div>

    </section>
  );
};

export default About;