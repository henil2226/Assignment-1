import React from "react";
import { useState } from "react";

const Usestate = () => {
    const[count, setCount] = useState(0);

    const[item, setItem] = useState("")

    return ( 
        <>
        <h1>Usestate</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+2)}>Increment</button>
        <p> {item}</p>
        <button onClick={()=>setItem("Denish")}>Text</button>
        </>
     );
}
 
export default Usestate;