import React, { Component } from 'react';

class Classintro extends Component {
    render() { 
        return (
            <>
            <h1>Classintro</h1>
            <h1>{this.props.data}</h1>
            <input type="text" className="crudinput"/>
            </>
        );
    }
}
 
export default Classintro;