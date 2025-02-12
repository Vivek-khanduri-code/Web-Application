import React from 'react';
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Transforming Ideas into Digital Experiences</h1>
      <p>We create innovative solutions for your business.</p>
      <Link to="ClientForm">
      <button>Get Started</button>
      </Link>
    </section>
  );
};

export default Hero;