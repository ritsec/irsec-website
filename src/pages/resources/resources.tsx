import React from "react";

import "./resources.scss";
import HeroBg from "../../res/circuit-board.svg";

const Resources: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home register-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <div>
        <h2>General</h2>
        <a href="http://calendar.ritsec.club" target="_blank" rel="noreferrer">
          RITSEC Calendar
        </a>
      </div>
      <div>
        <h2>Videos</h2>
        <a href="https://www.youtube.com/watch?v=4SjgMEtb27w" target="_blank" rel="noreferrer">
          Blue Linux
        </a>
        <a href="https://www.youtube.com/watch?v=hum4hzNE_j8" target="_blank" rel="noreferrer">
          Blue Windows
        </a>
        <a href="https://www.youtube.com/watch?v=w8Xs58cHcr8" target="_blank" rel="noreferrer">
          Blue Networking
        </a>
        <a href="https://www.youtube.com/watch?v=VvoDrT452Jc" target="_blank" rel="noreferrer">
          Intro to Incident Response
        </a>
        <a href="https://www.youtube.com/watch?v=HYbwn-WGWP8" target="_blank" rel="noreferrer">
          Intro to Services
        </a>
        <a href="https://www.youtube.com/watch?v=Fq__gkq9sxs" target="_blank" rel="noreferrer">
          How to Blue Team
        </a>
      </div>
      <div>
        <h2>Blue Team Workshops</h2>
        <span>
          <a href="https://www.youtube.com/watch?v=JEU1-RPKMa8" target="_blank" rel="noreferrer">
            Workshop #1
          </a>
          (
          <a href={`${process.env.PUBLIC_URL}/res/intro_to_comps.pdf`} target="_blank" rel="noreferrer">
            Slides
          </a>
          )
        </span>
      </div>
    </div>
  );
  // return (
  //   <div className="resources-container">
  //     <div
  //       className="hero mini-hero"
  //       style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
  //     >
  //       <h1>Resources</h1>
  //     </div>
  //     <div className="content">
  //       <div className="card card-fluid-50">
  //         <h1 className="card-header">Blue Team Links</h1>
  //         <div className="list">
  //           <div className="list-item">
  //             <span className="list-icon">
  //               <i className="fas fa-lock"></i>
  //             </span>
  //             <a href="http://calendar.ritsec.club" target="_blank" rel="noreferrer">
  //               RITSEC Calendar
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Resources;
