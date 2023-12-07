import React from 'react';
import { Component } from 'react';
import Clickcount from './Clickcount';
import Hovercounter from './Hovercount';

class Hoc extends Component {
    render() { 
        return (
            <>
            <h1>Hoc</h1>
            <Clickcount/>
            <Hovercounter/>
            </>
        );
    }
}
 
export default Hoc;