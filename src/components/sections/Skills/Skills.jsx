import "./Skills.css";

import {
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

// Frontend
import html from "../../../assets/images/html.png";
import css from "../../../assets/images/css.png";
import javascript from "../../../assets/images/javascript.png";
import react from "../../../assets/images/react.png";

// Backend
import java from "../../../assets/images/java.png";
import springboot from "../../../assets/images/springboot.png";
import python from "../../../assets/images/python.png";

// Database
import mysql from "../../../assets/images/mysql.png";

// Tools
import vscode from "../../../assets/images/vscode.png";
import git from "../../../assets/images/git.png";
import github from "../../../assets/images/github.png";
import postman from "../../../assets/images/postman.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="section-heading">

      <p className="section-subtitle">
            MY TECHNICAL EXPERTISE
        </p>

        <h2 className="section-title">
            Tech Stack
        </h2>

      </div>

      <div className="skills-wrapper">

        {/* Frontend */}

        <div className="skill-row">

          <div className="skill-title-card">

            <FaGlobe className="skill-icon"/>

            <h3>Frontend</h3>

          </div>

          <div className="skill-content-card">

            <div className="tech-card">
              <img src={html} alt="HTML"/>
            </div>

            <div className="tech-card">
              <img src={css} alt="CSS"/>
            </div>

            <div className="tech-card">
              <img src={javascript} alt="JavaScript"/>
            </div>

            <div className="tech-card">
              <img src={react} alt="React"/>
            </div>

          </div>

        </div>

        {/* Backend */}

        <div className="skill-row">

          <div className="skill-title-card">

            <FaServer className="skill-icon"/>

            <h3>Backend</h3>

          </div>

          <div className="skill-content-card">

            <div className="tech-card">
              <img src={java} alt="Java"/>
            </div>

            <div className="tech-card">
              <img src={springboot} alt="Spring Boot"/>
            </div>

            <div className="tech-card">
              <img src={python} alt="Python"/>
            </div>

          </div>

        </div>

        {/* Database */}

        <div className="skill-row">

          <div className="skill-title-card">

            <FaDatabase className="skill-icon"/>

            <h3>Database</h3>

          </div>

          <div className="skill-content-card">

            <div className="tech-card">
              <img src={mysql} alt="MySQL"/>
            </div>

          </div>

        </div>

        {/* Tools */}

        <div className="skill-row">

          <div className="skill-title-card">

            <FaTools className="skill-icon"/>

            <h3>Tools</h3>

          </div>

          <div className="skill-content-card">

            <div className="tech-card">
              <img src={vscode} alt="VS Code"/>
            </div>

            <div className="tech-card">
              <img src={git} alt="Git"/>
            </div>

            <div className="tech-card">
              <img src={github} alt="GitHub"/>
            </div>

            <div className="tech-card">
              <img src={postman} alt="Postman"/>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;