import React, { Component } from 'react';

class Othercompo extends Component {

    render() { 
            return (
                <>
                Othercompo
                <h1>{this.props.name}</h1>
                {/* <h1>{this.props.den}</h1> */}
                <button onClick={()=> this.props.den("Denish")}>Clic-den</button>
                </>
            );
    }
}
export default Othercompo;