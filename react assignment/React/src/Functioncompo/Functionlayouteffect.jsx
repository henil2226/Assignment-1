import React, { useEffect, useLayoutEffect, useState } from 'react';

const Functionlayouteffect = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState("");
    useEffect(() =>{
      console.log("useEffect");
    },[count]);
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[item])
    //useLayoutEffect will run before render 
    return (
      <>
        <h1>Functionlayouteffect</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 2)}>Increment</button>
        <p> {item}</p>
        <button onClick={() => setItem("Denish")}>Text</button>
      </>
    );
}
 
export default Functionlayouteffect;