import React from "react";

import "./register.scss";
import HeroBg from "../../res/circuit-board.svg";

const Register: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home register-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <div>
        <h2>Signups</h2>
        <a href="https://forms.gle/nri2VnXs9YquZ8pk8" target="_blank" rel="noreferrer">
          Blue Team T-Shirt Size Form
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdjILCRhKajwt6PHJUJri-SrXC4JgubaECYseCP9m94o-6FHw/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          White Team
        </a>
      </div>
    </div>
  );
};

export default Register;
