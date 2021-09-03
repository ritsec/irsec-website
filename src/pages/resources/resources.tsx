import React from "react";

import "./resources.scss";
import HeroBg from "../../res/circuit-board.svg";

const Resources: React.FC = (): React.ReactElement => {
  return (
    <div className="resources-container">
      <div
        className="hero mini-hero"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
      >
        <h1>Resources</h1>
      </div>
      <div className="content">
        <div className="card card-fluid-50">
          <h1 className="card-header">Blue Team Links</h1>
          <div className="list">
            <div className="list-item">
              <span className="list-icon">
                <i className="fas fa-lock"></i>
              </span>
              <a href="http://calendar.ritsec.club" target="_blank" rel="noreferrer">
                RITSEC Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
