import React from 'react';

const Projects = () => (
  <div className="project">
    <div id="project"></div>
    <div className="project-p">
      <h1>My Projects</h1>
    </div>
    <div className="project1">
      <img src="imgs/RoyaSite.PNG" alt="" />
      <h5>ROYA NEWS</h5>
      <p>Roya Website done using Bootstrap</p>
      <a href="./Roya/index.html" target='_blank'>
        Visit Site <i className="fa-solid fa-right-long"></i>
      </a>
    </div>
    <div className="project2">
      <img src="imgs/myjurny.png" alt="" />
      <h5>MyJourney</h5>
      <p>Done using HTML, CSS, and JavaScript</p>
      <a href="./MyJourney-main" target='_blank'>
        Visit Site <i className="fa-solid fa-right-long"></i>
      </a>
    </div>
    <div className="project3">
      <img src="imgs/project3.bg.webp" alt="" />
      <h5>YouTube</h5>
      <p>COMING SOON</p>
      <a href="">IN PROCESS</a>
    </div>
  </div>
);

export default Projects;
