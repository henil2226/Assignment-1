import React, { Component } from 'react';

class Classlistandkeys extends Component {
    constructor(){
        super()
        this.state = {
            item : [1,2,3,4,5,6]
        }
    }
    add (){
        console.log("add");
        this.setState({
            item : [0,1,2,3,4,5,6,7,8,9,10]

        })
    }
    render() { 
        // const item = [1,2,3,4,5,6]
        // const listitem = item.map((den) => <ul><li>{den}</li></ul>)
        const listitem = this.state.item.map((den) => <li key={den.toString()}>{den}</li>)
        return (
            <>
            <h1>Classlistandkeys</h1>
            
               <ul>
               {listitem}
               </ul>
            <button onClick={() => this.add()}>Add</button>


               
               {/* {listitem} */}
               
            
            {/* <h1>{item[0]}</h1> */}
            {/* <ul>
                <li>{item[0]}</li>
                <li>{item[1]}</li> 
                <li>{item[2]}</li>
                <li>{item[3]}</li>
                <li>{item[4]}</li>
                <li>{item[5]}</li>
            </ul> */}
            {/* <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul> */}
            </>
        );
    }
}
 
export default Classlistandkeys;