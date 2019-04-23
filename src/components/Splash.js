import React from 'react';
import '../css/splash.css';

function Splash() {
  return (
    <div id="splash">
      <img
        src="/img/matt_berman.jpeg"
        alt="head shot"
        id="headshot"
        width="200px"
        height="200px"
      />
      <p id="about">
        I am a Fullstack Software Developer based in New York, New York
      </p>
    </div>
  );
}

export default Splash;
