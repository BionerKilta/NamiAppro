import React, { Component } from "react";
import "./counter.css";

/**
 * This component is pretty much equivalent
 * to CounterFunction, both are given here
 * as example.
 * 
 * Example component which counts numbers.
 * Sets initial count to 0, then sets the
 * count to 1 after first render. After that
 * the count can be incremented by user
 * press.
 */
export default class CounterClass extends Component {

  /**
   * Class constructors are called only once as the
   * class is created, and they are useful for initializing
   * states or other values as is done here. Also props
   * coming from parent are acknowledged in constructor.
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    /**
     * this.incrementCounter function has its own context
     * so it has to bound to this class as it is given as
     * an attribute to a <div> that is rendered by this
     * class. Arrow functions do not have their own context,
     * so if incrementCounter was an arrow function, the next
     * following line with bind function call would not be
     * necessary
     */
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  /**
   * componentDidMount is a reserved function by
   * React. It is called exactly one after first
   * render.
   * 
   * The 'count' state variable is set to 1 after
   * first render. Setting state using the reserved
   * 'setState' function causes a re-render, as the
   * component is always re-rendered after change in
   * its state.
   */
  componentDidMount() {
    this.setState({ count: 1 });
  }

  /**
   * Increment counter count by 1
   * This function is bound to the class in the constructor.
   * If the declaration was done using arrow function syntax,
   * the binding would be unnecessary, i.e.
   * incrementCounter = () => {...}
   */
  incrementCounter() {
    const prevCount = this.state.count;
    this.setState({ count: prevCount + 1 });

    // same effect using previous state in setState function call
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     count: prevState.count + 1
    //   }
    // });
  }

  /**
   * If component count is divisible by 7,
   * return 'purple-text', otherwise return null
   * @returns 'yellow-text' || null
   */
  getColorClass() {
    if (this.state.count % 7 === 0) {
      return "purple-text";
    }
    return null;
  }

  render() {
    return (
      <div
        className="example-component example-counter"
        onClick={this.incrementCounter}
        
        // alternative 'onClick' attributes with the same effect
        // onClick={() => this.incrementCounter()}
        // onClick={function() { this.incrementCounter() }}
        // onClick={() => {
        //   const prevCount = this.state.count;
        //   this.setState({ count: prevCount + 1 });
        // }}
      >
        <p className={this.getColorClass()}>
          {this.props.renderText} {this.state.count}
        </p>
      </div>
    );
  }
}