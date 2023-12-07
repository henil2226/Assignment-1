import React from 'react';
import { Fname } from './FunctionUsecontext';


const CompoC = (dp) => {
    return ( 
        <>
        {/* <h1>{dp.name}</h1>   */}
        <h1>CompoC</h1>
        <Fname.Consumer>
            {
                (Prin) =>{
                    return <h1> hello  {Prin}</h1>
                }
            }
        </Fname.Consumer>
        </>
        
     );
}
 
export default CompoC;
