import React from 'react';

const Testimonials = () => (
  <div className="testimonials-container">
    <div className="testimonials-paragraph">
      <h1>Testimonials</h1>
    </div>
    <div className="testimonials-box1">
      <img style={{ backgroundColor: '#f03030' }} width="100px" src="imgs/shwaiki.PNG" alt="" />
      <i className="fa-solid fa-quote-left" style={{ color: '#ffffff' }}></i>
      <p>
        “I’m blown away by the creativity you brought to this project. You have a unique talent for turning ideas into reality!”
      </p>
      <div className="testoDetails">
        <h4>Mohammad AlShwaiki</h4>
        <h6>Coach Team Leader</h6>
        <i className="fa-solid fa-quote-right"></i>
      </div>
    </div>
    <div className="testimonials-box2">
      <img width="100px" src="./imgs/mona.PNG" alt="" />
      <i className="fa-solid fa-quote-left" style={{ color: '#ffffff' }}></i>
      <p>
        “Your professionalism and skill are evident in everything you do. It’s a pleasure to work with someone so talented!”
      </p>
      <div className="testoDetails">
        <h4>Mona Al-obisat</h4>
        <h6>Full-Stack Trainer</h6>
        <i className="fa-solid fa-quote-right"></i>
      </div>
    </div>
  </div>
);

export default Testimonials;
