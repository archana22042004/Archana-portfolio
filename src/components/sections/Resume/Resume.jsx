import "./Resume.css";
import { FaEye, FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="section-heading">
        <p className="section-subtitle">MY RESUME</p>
        <h2 className="section-title">Resume</h2>
      </div>

      <div className="resume-card">
        <h3>Let's Work Together</h3>

        <p>
          Interested in learning more about my education, technical skills,
          internships and projects? Feel free to view my resume online or
          download a copy for future reference.
        </p>

        <div className="resume-buttons">
          <a
            href="/Archana_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <FaEye />
            View Resume
          </a>

          <a
            href="/Archana_resume.pdf"
            download
            className="resume-btn"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;