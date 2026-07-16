import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          ARCHANA <span>V</span>
        </h2>

        <p className="footer-text">
          Passionate Full Stack Developer | Java Developer | Building
          modern, responsive, and user-friendly web applications.
        </p>

        <div className="footer-socials">

          <a
            href="https://www.linkedin.com/in/archana-v-31b99a265"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/archana22042004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:archanavelu1522@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ARCHANA V. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using React + Vite
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
