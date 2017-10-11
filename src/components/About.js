import React, { Component } from 'react';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import profile from '../assets/profile.jpg';
import ProfileCarousel from './ProfileCarousel';
import './styles/About.css';

function About() {
  const githubLogo = { backgroundImage: `url(${github})` };
  const twitterLogo = { backgroundImage: `url(${twitter})` };
  const linkedinLogo = { backgroundImage: `url(${linkedin})` };

  return (
    <section id="about">
      {/* {<div className="about-bg" />} */}
      <section className="about-info">
        <section id="banner">
          <h1 className="banner-title">Juan Jimenez</h1>
          <h3 className="banner-subtitle">Software Developer</h3>
        </section>
        <article className="about-story-wrapper">
          <p className="about-story">I am a front-end developer with a background in finance, and a great passion in programming. I am a person who loves to create and innovate, and programming gives me the perfect platform to do so.
          </p>
          <p className="about-story">
          I also enjoy mixing design principles and data analysis to provide creative solutions, that not only have an intuitive design, but also a great user experience.
          </p>
        </article>
        <section className="about-links">
          <a target="_blank" style={linkedinLogo} className="link" href="https://www.linkedin.com/in/jdiejim" />
          <a target="_blank" style={githubLogo} className="link" href="https://github.com/jdiejim" />
          <a target="_blank" style={twitterLogo} className="link" href="https://twitter.com/jdiejim" />
          <a target="_blank" className="resume-btn" href="https://www.turing.io/sites/default/files/resumes/Juan%20Jimenez%20Resume.pdf">Resume</a>
        </section>
      </section>
      <section className="about-profile">
        <ProfileCarousel />
      </section>
    </section>
  );
}

export default About;
