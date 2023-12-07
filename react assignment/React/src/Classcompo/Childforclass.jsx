import React, { Component } from 'react';

class Childforclass extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <h1>Childforclass</h1>
            <h1>{this.props.data }</h1>
            </>
        );
    }
}
 
export default Childforclass;
