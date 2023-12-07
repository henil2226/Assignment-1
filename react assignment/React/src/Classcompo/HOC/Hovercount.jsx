import React, { Component } from 'react';
import Updatecompo from './Mainhoc';

class Hovercounter extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         count :0
    //     }
    // }
    // increement() {
    //     this.setState({count: this.state.count +1})
    //   }
    render() { 
        const {count, increement} = this.props
        return (
            <>
            <h1>Hovercounter</h1>
            <button onMouseOver ={increement}>Hover   {count}</button>
            </>
        );
    }
}
 
export default Updatecompo(Hovercounter);