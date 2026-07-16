import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import school from "../../../assets/projects/school.jpg";
import worknest from "../../../assets/projects/worknest.jpg";
import flowershop from "../../../assets/projects/flowershop.jpg";
import portfolio from "../../../assets/projects/portfolio.jpg";

const projects = [
  {
    title: "School Management System",
    image: school,
    description:
      "Complete school management application with admin, teacher and student modules.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "WorkNest- Employee Management System",
    image: worknest,
    description:
      "Employee management platform for attendance, payroll and department management.",
    tech: ["Java", "Spring Boot", "React","MySQL"],
    github: "#",
    demo: "#",
  },
   {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Personal portfolio website showcasing my projects, skills and achievements.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/archana22042004/Archana-portfolio",
    demo: "https://archana-portfolio-mu.vercel.app/",
  },
  {
    title: "Flower Shop",
    image: flowershop,
    description:
      "Modern responsive flower shopping website with elegant user experience.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <p className="section-subtitle">
          MY RECENT WORK
        </p>

        <h2 className="section-title">
          Projects
        </h2>
      </div>


      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />


              <div className="image-overlay">

                <span>
                  Explore Project →
                </span>

              </div>

            </div>


            <div className="project-content">

              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tech-stack">

                {project.tech.map((tech, i) => (

                  <span
                    className="tech-badge"
                    key={i}
                  >
                    {tech}
                  </span>

                ))}

              </div>


              <div className="project-buttons">


                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FaGithub />
                  GitHub
                </a>


                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>


              </div>


            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;