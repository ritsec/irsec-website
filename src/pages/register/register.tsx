import React from "react";

import "./register.scss";
import HeroBg from "../../res/circuit-board.svg";

const Register: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home register-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <a href="https://forms.gle/By47ujUDVSDN9cjeA" target="_blank" rel="noreferrer">
        Blue Team Signups
      </a>
    </div>
  );
};

export default Register;
