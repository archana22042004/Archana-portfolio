import { useState } from "react";
import "./Navbar.css";
import profileImage from "../../../assets/images/archana_image.jpg";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [open, setOpen] = useState(false);


  const closeMenu = () => {
    setOpen(false);
  };


  return (
    <header className="navbar">


      {/* Logo */}

      <div className="logo">

        <img 
          src={profileImage} 
          alt="Archana V" 
        />

      </div>



      {/* Mobile Menu Icon */}

      <div 
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >

        {
          open 
          ? <FaTimes />
          : <FaBars />
        }

      </div>




      {/* Navigation */}

      <nav>

        <ul className={`nav-links ${open ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>


          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>


          <li>
            <a href="#skills" onClick={closeMenu}>
              Tech Stack
            </a>
          </li>


          <li>
            <a href="#projects" onClick={closeMenu}>
              Featured Work
            </a>
          </li>


          <li>
            <a href="#resume" onClick={closeMenu}>
              Resume
            </a>
          </li>


          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>


        </ul>

      </nav>


    </header>
  );
};


export default Navbar;