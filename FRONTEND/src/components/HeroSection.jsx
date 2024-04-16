import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/fourthimg.jpeg" alt="restaurant" />
      <div className="item">
        <h3></h3>
        <div>
          <h1>DREAM EVENT MAKERS</h1>
          <p>
          "Creating memories is the essence of event management"
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;