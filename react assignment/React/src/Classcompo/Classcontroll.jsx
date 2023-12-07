// import React, { Component } from 'react';
import { Component } from "react";
class Classcontroll extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  login = (event) => {
    console.log(this.state.name);
    // return false
    event.preventDefault();
  };
  render() {
    return (
      <>
        <h1>Class controll</h1>
        <form onSubmit={(event) => this.login(event)}>
          {/*hello*/}
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            onChange={(event) => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
          <button type="submit">submit</button>
          {/* <input type="submit" value="submit" /> */}
        </form>
      </>
    );
  }
}

export default Classcontroll;
