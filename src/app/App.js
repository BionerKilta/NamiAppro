import { useState } from "react";
import './App.css';
import { logo } from "../img";
import {
  CounterClass,
  CounterFunction
} from "../examples";

function App() {
  const [rotateLogo, setRotateLogo] = useState(false);

  /**
   * Returns logo <img> CSS classes. Adds
   * 'animation-paused' class if 'rotateLogo'
   * state constant is falsy.
   * @returns {string} logo CSS classes
   */
  function getLogoClasses() {
    const classes = `App-logo spin-counter-clockwise`;
    if (rotateLogo) return classes;
    return `${classes} animation-paused`;
  }

  /**
   * Sets 'rotateLogo' state constant to
   * be not be its current value.
   */
  function toggleLogoRotation() {
    setRotateLogo(!rotateLogo);
  }

  return (
    <div className="App">
      <div
        className="logo-container"
        onClick={toggleLogoRotation}
      >
        <img
          src={logo}
          className={getLogoClasses()}
          alt="logo"
        />
      </div>
      <div>

        <CounterClass
          renderText="Class counter: "
        />

        <CounterFunction
          renderText="Function counter: "
        />

      </div>
    </div>
  );
}

export default App;
