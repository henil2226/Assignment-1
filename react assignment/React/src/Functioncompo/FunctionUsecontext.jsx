import React from 'react';
import CompoA from './CompoA';
import { createContext } from 'react';

const Fname = createContext()
const FunctionUsecontext = () => {

    const user = {
        name : "denish",
        age : 22
    }
    return ( 
        <>
        <h1>FunctionUsecontext</h1>
        <Fname.Provider value={user.name + user.age}>
        <CompoA/> 
        </Fname.Provider>
        </>
     );
}
export default FunctionUsecontext;
export {Fname}