import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  // MDBIcon,
  MDBInput,
  // MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [name , setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function validation() {
    let inuser = true
    let err = "plzz type "

    if (name === null , name === "") {
      inuser = false
      err += " name "
    }
    if (password === null , password === "") {
      inuser = false
      err += " password"
    }
    // else if (password.length < 8 ){
    //     alert("must be 8 ")
    //     inuser = false
    // }
    if (!inuser) {
      alert(err)
    }
    return inuser
  }

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const Logindata = () =>{
if (validation()) {
  console.log("logindata",name,password);
  fetch(`http://localhost:5000/userid?name=${name}&password=${password}`).then((resp)=>{
    resp.json().then((result)=>{
      console.log(result);
      if (result[0]) {
        sessionStorage.setItem("name" , name)
        sessionStorage.setItem("roll" , result[0].roll)
        if (result[0].roll == 1) {
          navigate("/admin")
        } else {
          navigate("/user")
        }
      } else {
        alert("invelid user")
      }
    })
  }) 
}   
  }

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' 
          value={name} onChange={(e)=>setName(e.target.value)}
          label='Your name' id='formControlLg' type='taxt' size="lg"/>
          <MDBInput wrapperClass='mb-4'
            value={password} onChange={(e)=>setPassword(e.target.value)}
          label='Password' id='formControlLg' type='password' size="lg"/>


          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <MDBBtn className="mb-4 w-100" size="lg" onClick={Logindata}>Log in</MDBBtn>

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;