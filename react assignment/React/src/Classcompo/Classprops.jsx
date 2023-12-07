import React, { Component } from 'react';
import Childforclass from './Childforclass';
// import Classintro from './Classintro';

class Classprops extends Component {
     
    render() { 
        return (
            <>
            <h1>Classprops</h1>
            <Childforclass data="Denish"/>
            {/* <Classintro data="Denish"/> */}
            </>
        );
    }
}
 
export default Classprops;