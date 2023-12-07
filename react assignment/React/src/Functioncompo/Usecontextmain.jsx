import React, { createContext } from 'react';
import ContextA from './ContextA';

const Name = createContext()

const Usecontextmain = () => {
    return (  
        <>
        <h1>Usecontextmain</h1>
        <Name.Provider value="DP">
        <ContextA/>

        </Name.Provider>
        </>
    );
}
 
export default Usecontextmain;
export {Name}