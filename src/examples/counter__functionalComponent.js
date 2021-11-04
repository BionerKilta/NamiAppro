import React, { useState, useEffect } from "react";
import "./counter.css";

/**
 * This component is pretty much equivalent
 * to CounterClass, both are given here
 * as example.
 * 
 * Example component which counts numbers.
 * Sets initial count to 0, then sets the
 * count to 1 at first render. After that
 * the count can be incremented by user
 * press.
 * @param {*} props props
 */
export default function CounterFunction(props) {
  /**
   * props coming from parent are usually read at the beginning
   * of a functional component by using object destructuring
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   * 
   * Here, 'renderText' key is being searched from props.
   * If found, its value is set to renderText constant,
   * otherwise the value is set to 'count'.
   */
  const { renderText = "count" } = props;

  /**
   * declare count constant and setCount function
   * to change the otherwise immutable constant count,
   * intialize value to 0
   * @see https://reactjs.org/docs/hooks-state.html
   */
  const [count, setCount] = useState(0);

  /**
   * useEffect function is called before render
   * @see https://reactjs.org/docs/hooks-effect.html
   */
  useEffect(
    () => {
      // set count to 1
      setCount(1);
    },

    /**
     * Dependency array, this useEffect function will be called
     * again when one of the dependencied changes. If empty array,
     * the useEffect function will never be called again after first
     * render. The 'setCount' function should not change during program
     * execution, but the convention is that the function used in
     * useEffect are set as dependencies.
     */
    [setCount] 
  );

  /**
   * Increment counter count by 1
   */
  function incrementCounter() {
    setCount(count + 1);
  }

  /**
   * If component count is divisible by 7,
   * return 'purple-text', otherwise return null
   * @returns 'yellow-text' || null
   */
  function getColorClass() {
    if (count % 7 === 0) {
      return "purple-text";
    }
    return null;
  }

  /**
   * Functional React component return value is essentially what is rendered
   */
  return (
    <div
      className="example-component example-counter"
      onClick={incrementCounter}
    >
      <p className={getColorClass()}>
        {renderText} {count}
      </p>
    </div>
  );
}
