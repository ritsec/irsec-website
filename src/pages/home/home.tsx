import React from "react";

import "./home.scss";
import HeroBg from "../../res/circuit-board.svg";

const Home: React.FC = (): React.ReactElement => {
  return (
    <div className="home-container">
      <div
        className="hero"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
      >
        <h1>IRSeC</h1>
        <h3>RITSEC's beginner Red vs. Blue Incident Response competition</h3>
      </div>
    </div>
  );
};

export default Home;
