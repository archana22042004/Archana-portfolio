import "./Hero.css";
import profileImage from "../../../assets/images/archana_image.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Left Content */}
      <div className="hero-content">

        <p className="hero-intro">
          Hi, I'm
        </p>


        <h1 className="hero-title">
          ARCHANA <span>V</span>
        </h1>


        <h2 className="hero-role">

          <Typewriter
            words={[
              "Full Stack Developer",
              "Java Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />

        </h2>


        <p className="hero-description">

          Passionate Full Stack Developer skilled in building modern,
          responsive and scalable web applications using Java,
          Spring Boot, React, JavaScript, Python, and MySQL.

        </p>


        <div className="hero-buttons">


          <a
            href="/Archana_resume.pdf"
            download
            className="primary-btn"
          >
            Download CV
          </a>


          <a
            href="#contact"
            className="secondary-btn"
          >
            Contact Me
          </a>


        </div>


      </div>



      {/* Right Image */}

      <div className="hero-image">

        <div className="image-circle">

          <img
            src={profileImage}
            alt="Archana V"
          />

        </div>

      </div>


    </section>
  );
};


export default Hero;