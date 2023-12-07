import React, { Component } from "react";
import Othercompo from "./Othercompo";

class Statelifting extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  den = (name) => {
    console.log("den" + name);
    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <>
        <h1>Statelifting</h1>
        <h3>
          <Othercompo name="Denish" den={this.den} />
        </h3>
      </>
    );
  }
}

export default Statelifting;
