import React, { useEffect , useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



const Useredit = () => {

    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const navigat = useNavigate()
    
    const{userid} = useParams()


    
    useEffect(() => {
        fetch("http://localhost:5000/userid/" + userid).then((result) => {
          result.json().then((resp) => {
            console.log(resp);
            setId(resp.id)
            setName(resp.name)
            setEmail(resp.email)
            setPassword(resp.password)
            setPhonenumber(resp.phonenumber)
          })
        }).catch((err)=>{
            console.log(err.message);
        })
      }, [])
  

    const edit =()=>{
        let data = {id, name , email,password,phonenumber}
        // console.log(id,name,email,password,phonenumber);
        console.log(data);

        fetch("http://localhost:5000/userid/" +  userid,{
            method: "PUT",
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
        <h1>Useredit</h1>

        
        <form action="">
            <MDBInput label='id' value={id} onChange={(e)=>setId(e.target.value)} disabled id='typeText' type='id' required />
            <MDBInput label='name' value={name} onChange={(e)=>setName(e.target.value)} id='typeText' type='text'  required/>
            <MDBInput label='Email' value={email} onChange={(e)=>setEmail(e.target.value)} id='typeEmail' type='email' required />
            <MDBInput label='Password' value={password} onChange={(e)=>setPassword(e.target.value)} id='typePassword' type='password' required />
            <MDBInput label='Phone number' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} id='typePhone' type='number' required />
            <MDBInput id='typeText' type='submit' onClick={edit}/>
            </form>
        </>
     );
}
 
export default Useredit;