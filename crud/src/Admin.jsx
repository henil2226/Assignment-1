import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userdata from "./Userdata";


const Admin = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        let name = sessionStorage.getItem("name")
        let roll = sessionStorage.getItem("roll")

          if (name == "" , name = null, roll != 1) {
            navigate("/login")
          } else {
            alert("invelid user")
          }

    },[])
    
    return ( 
      <>
        <h1>Admin</h1>
        <Userdata/>
      </>
     );
}
 
export default Admin;