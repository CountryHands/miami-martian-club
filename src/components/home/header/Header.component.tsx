import React from "react";
import "./Header.scss";
import video from "../../../video/videoBackground.mp4";

function Header() {
  return (
    <div className="header">
      <div>
        {/* <button type="button" className="btn teal">Buy Now</button> */}
        <div className="video-wrapper">
        <video autoPlay loop playsInline className="video-background" muted>
        <source src={video} type="video/mp4"/>
        </video>
        <h1>
          Miami's <span>Martian</span> Club
        </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
