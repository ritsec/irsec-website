import React from "react";

import "./register.scss";
import HeroBg from "../../res/circuit-board.svg";

const Register: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home register-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <div className="column">
        <h2>Signups</h2>
        <div className="row">
          <p>Compete in IRSeC (Blue Team)</p>
          <a className="register-link" href="#" target="_blank" rel="noreferrer">
            {/* <i className="fas fa-external-link-alt" aria-label="register" /> */}
            Coming Soon
          </a>
        </div>
        <div className="row">
          <p>Volunteer at IRSeC (White Team)</p>
          <a className="register-link" href="#" target="_blank" rel="noreferrer">
            {/* <i className="fas fa-external-link-alt" aria-label="register" /> */}
            Coming Soon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
