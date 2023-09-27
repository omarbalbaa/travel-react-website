import React from "react";
import "../App.css";
import "./Button.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        
        <button
          className="btns btn--outline btn--large"
        >
          GET STARTED
        </button>
        <button
          className="btns btn--primary btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
