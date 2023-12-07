import React, { Component } from 'react';

const Updatecompo = Originalcompo =>{
    class Newcompo extends Component {
        constructor(){
            super()
            this.state = {
                count :0
            }
        }
        increement = ()=> {
            this.setState({count: this.state.count +1})
          }
        render() { 
            return (
                <>
                <Originalcompo name="Denish" count={this.state.count} increement={this.increement} />
                </>
            );
        }
    }
     return Newcompo;

}
export default Updatecompo;