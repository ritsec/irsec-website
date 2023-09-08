import React from "react";

import "./resources.scss";
import HeroBg from "../../res/circuit-board.svg";

const Resources: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home resources-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <div className="column">
        <h2>General</h2>
        <div className="row">
          <a href="http://calendar.ritsec.club" target="_blank" rel="noreferrer">
            RITSEC Calendar
          </a>
        </div>
        {/* <a href={`${process.env.PUBLIC_URL}/res/IRSeC_2021_Packet_v6.pdf`} target="_blank" rel="noreferrer">
          IRSeC 2021 Blue Team Packet
        </a>
        <a href="http://irsec-resumes.ritsec.club/" target="_blank" rel="noreferrer">
          Resume Submission
        </a> */}
      </div>
      <div className="column">
        <h2>Blue Team Workshops</h2>
        <div className="row">
          <p>Coming soon</p>
        </div>
        {/* <div className="row">
          <p>10/1 @ 12pm - Intro to Competitions</p>
          <div className="workshop-links">
            <a
              className="workshop-link"
              href="https://drive.google.com/file/d/1UkTQCS2ssWLK_MFTGFqttgeMQK87PRu8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-video" aria-label="recording" />
            </a>
            <a
              className="workshop-link"
              href="https://docs.google.com/presentation/d/1hFFQ6e9MevlM_FtvZJ4ljDNugLpYglg6ZXRHI3Zz4t0/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-chalkboard" aria-label="slides" />
            </a>
          </div>
        </div>
        <div className="row">
          <p>10/15 @ 12pm - Injects</p>
          <div className="workshop-links">
            <a
              className="workshop-link"
              href="https://drive.google.com/file/d/1UkTQCS2ssWLK_MFTGFqttgeMQK87PRu8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-video" aria-label="recording" />
            </a>
            <a
              className="workshop-link"
              href="https://docs.google.com/presentation/d/1hFFQ6e9MevlM_FtvZJ4ljDNugLpYglg6ZXRHI3Zz4t0/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-chalkboard" aria-label="slides" />
            </a>
          </div>
        </div>
        <div className="row">
          <p>10/22 @ 12pm - Core Services</p>
          <div className="workshop-links">
            <a className="workshop-link" href="#" target="_blank" rel="noreferrer">
              <i className="fas fa-video" aria-label="recording" />
            </a>
            <a className="workshop-link" href={`/res/slides.pdf`} target="_blank" rel="noreferrer">
              <i className="fas fa-chalkboard" aria-label="slides" />
            </a>
          </div>
        </div>
        <div className="row">
          <p>10/29 @ 12pm - Incident Response</p>
          <div className="workshop-links">
            <a className="workshop-link" href="#" target="_blank" rel="noreferrer">
              <i className="fas fa-video" aria-label="recording" />
            </a>
            <a className="workshop-link" href={`/res/slides.pdf`} target="_blank" rel="noreferrer">
              <i className="fas fa-chalkboard" aria-label="slides" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resources;
