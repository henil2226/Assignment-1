import React, { useState , useEffect} from 'react';
import { useNavigate} from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';


function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // const validregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  function validation() {
    let inuser = true
    let err = "plzz type "

    if (name === null , name === "") {
      inuser = false
      err += " name "
    }
    if (email === null , email === "") {
      inuser = false
      err += " email"
    }
    if (password === null , password === "") {
      inuser = false
      err += " password"
    }
    // else if (password.length < 8 ){
    //     alert("must be 8 ")
    //     inuser = false
    // }
    // else if (password.search(validregex)){
    //   alert("must add a-z")
    //   inuser = false
    // }
    if (!inuser) {
      alert(err)
    }
    return inuser
  }

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const Datasubmit = (e)=>{
    e.preventDefault()
    console.log("datasubmit");
    let data = {name,email,password,roll : 2}
    console.log(data);

    // console.log(data);
  if (validation()) {
      fetch("http://localhost:5000/userid" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      result.json()
    }).then((resp)=>{
      console.log(resp);
      navigate("/login")
    })
  }
 


  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form onSubmit={Datasubmit}>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={name} onChange={(e)=>setName(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg' >Register</MDBBtn>
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;