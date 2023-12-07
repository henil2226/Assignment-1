import React, { Component } from "react";
class Classstate extends Component {
  constructor() {
    super();
    this.state = {
      count: 22,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </>
    );
  }
}

export default Classstate;
