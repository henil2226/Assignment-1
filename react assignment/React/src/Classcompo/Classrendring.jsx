import React, { Component } from "react";

class Classrendring extends Component {
  constructor() {
    super();
    this.state = {
      islogin: true,
    };
  }
  render() {
    return this.state.islogin && <h1>Welcome to my page</h1>;

    //  return this.state.islogin ?
    //   <h1>Welcome to my page</h1>:
    //   <h1>Get Lost</h1>

    // let den;
    // if (this.state.islogin) {
    //   den = <h1>Welcome to my page</h1>;
    // }
    // else{
    //   den =   <h1>Get Lost</h1>
    // }
    // return den

    // if (this.state.islogin) {
    //   return (
    //     <>
    //       <h1>Welcome to my page</h1>
    //     </>
    //   );
    // } else {
    //     return (
    //         <>
    //         <h1>Get Lost</h1>
    //         </>
    //     )
  }
}

export default Classrendring;
