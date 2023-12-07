import React, { Component } from 'react';
class Classuncontroll extends Component {
constructor(){
    super()
    this.den = React.createRef()
}

    login = (event) => {
        console.log(this.den.current.value); 
        // return false
        event.preventDefault()
    }
    render() { 
        return (
            <>
            <h1>Classuncontroll</h1>
            <form onSubmit={(event) => this.login(event)}>{/*hello*/}
                <label htmlFor="Username">Username</label>
                <input type="text" ref={this.den } /> 
                <button type="submit">submit</button>
                {/* <input type="submit" value="submit" /> */}
            </form>
            </>
        );
    }
}
 
export default Classuncontroll;