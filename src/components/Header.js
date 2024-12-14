import React from "react";

const Header = ({ toggleDarkMode }) => (
  <header>
    <div className="nav">
      <div className="logo">
        <i className="fa-solid fa-terminal"></i>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        {/* <li><a href="#achievements">Achievements</a></li> */}
        <li><a className="contactBtn" href="#contact">Contact</a></li>
        
        {/* Dark mode toggle */}
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-btn">
            Toggle Dark Mode
          </button>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
