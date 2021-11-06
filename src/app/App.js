import { useState } from "react";
import { Header } from "../components";
import {
  CounterClass,
  CounterFunction,
  LotOfText
} from "../examples";
import { logo } from "../img";
import './App.css';

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
        data-testid="logo-container"
      >
        <img
          src={logo}
          className={getLogoClasses()}
          alt="logo"
          data-testid="logo"
        />
      </div>
      <Header />
      <div>

        <CounterClass
          renderText="Class counter: "
        />

        <CounterFunction
          renderText="Function counter: "
        />

      </div>

      <div>
        <LotOfText />
      </div>
    </div>
  );
}

export default App;
