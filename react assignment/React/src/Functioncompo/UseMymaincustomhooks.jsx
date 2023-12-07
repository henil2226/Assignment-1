import { useEffect, useState } from "react";
import React from 'react';


function UseMymaincustomhooks() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `Count : ${count}`
    },[count])
    return(
         <>
         <h1>Mycompotwo</h1>
         <h1>Mycompo</h1>
         <button onClick={() => setCount(count + 1)}>count: {count}</button>
       </>

    )
   
}
export default UseMymaincustomhooks;