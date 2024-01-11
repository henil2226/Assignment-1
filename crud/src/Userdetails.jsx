// import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Userdetails = () => {


    const [data, setData] = useState({})
    const{userid} = useParams()


    useEffect(() => {
      fetch("http://localhost:5000/userid/" + userid).then((result) => {
        result.json().then((resp) => {
          console.log(resp);
          setData(resp)
        })
      })
    }, [])

    console.log(data);

    
    return ( 
        <>
        <h1>Userdetails</h1>

        {
            data &&
            <>
            id:<h1>{data.id}</h1>
            name:<h1>{data.name}</h1>
            email:<h1>{data.email}</h1>
            password:<h1>{data.password}</h1>
            Roll:<h1>{data.roll}</h1>
            </>
        }
        </>
     );
}
 
export default Userdetails;