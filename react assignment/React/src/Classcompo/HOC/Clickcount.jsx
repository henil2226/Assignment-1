import React, { Component } from "react";
import Updatecompo from "./Mainhoc";
class Clickcount extends Component {

  render() {
    const {count, increement} = this.props
    return (
      <>
        <h1>Clickcount</h1>
        <button onClick={increement}> Click {count}</button>
    
        <p>{this.props.name}</p>
      </>
    );
  }
}

export default Updatecompo(Clickcount) ;
