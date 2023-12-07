import React from 'react';
import { useRef } from 'react';

const Useref = () => {

    const inputref = useRef(null)

    const inputdeta = ()=> {
        // console.log("inputref");
        // inputref.current.style.backgroundColor = "red"
        
    }
    return ( 
        <>
        <h1>Useref</h1>
        <table>
            <tr>
                <td>UserName</td>
                <td><input type="text" ref={inputref} /></td>
                <td><button onClick={inputdeta}>Login</button></td>
            </tr>
        </table>
        </>
     );
}
 
export default Useref;