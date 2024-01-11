import React, { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const Useradd = () => {
 
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [roll,setRoll] = useState("")
    const navigat = useNavigate()

    const submit =()=>{
        let data = {id, name , email,password,roll : parseInt(roll)}
        // console.log(id,name,email,password,phonenumber);
        console.log(data);

        fetch("http://localhost:5000/userid",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        }).then((result)=>{
            navigat("/userdata")
        })
    }   


    return (
        <>
            <h1>Useradd</h1>

            <form action="">
            <MDBInput label='id' value={id} onChange={(e)=>setId(e.target.value)} disabled id='typeText' type='id' required />
            <MDBInput label='name' value={name} onChange={(e)=>setName(e.target.value)} id='typeText' type='text'  required/>
            <MDBInput label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} id='typeEmail' type='email' required />
            <MDBInput label='Password' value={password} onChange={(e)=>setPassword(e.target.value)} id='typePassword' type='password' required />
            <MDBInput label='roll' value={roll} onChange={(e)=>setRoll(e.target.value)} id='typePhone' type='number' required />
            <MDBInput id='typeText' type='submit' onClick={submit}/>
            </form>

        </>
    );
}

export default Useradd;