import React from "react";

import "./about.scss";
import HeroBg from "../../res/circuit-board.svg";

const About: React.FC = (): React.ReactElement => {
  return (
    <div className="about-container">
      <div
        className="hero mini-hero"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
      >
        <h1>About</h1>
      </div>
      <div className="content">
        <div className="card">
          The Incident Response Security Competition (IRSeC) is our more beginner-friendly Red/Blue competition. IRSeC is typically hosted
          in the early fall at RIT. With IRSeC, we aim to provide RIT students with some initial defensive and incident response experience.
          IRSeC also features an entirely student-run Red Team comprised of RITSEC members.
        </div>
      </div>
    </div>
  );
};

export default About;
