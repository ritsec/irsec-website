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
        <h2>They Closed :(</h2>
      </div>
    </div>
  );
};

export default Register;
