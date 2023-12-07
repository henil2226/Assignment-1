
import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Useradd() {
  const [id, setId] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const hendelsubmit = (event) => {
    event.preventDefault();
    console.log(id, username, email, password, number, city);
    // let data = { username, email, password, number, city };
    let data = { username, email, password, number, city };
    if (username === "" || email === "" || password === "" || number === "" || city === ""  ) {
      alert("Please enter your Data!")
    }
    else{
      fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((output) => {
      console.log(output);
      output.json().then((resp) => {
        console.log(resp);
        navigate("/Exampal/Functioncompo/Project");
      });
    });
    setCity("");
    setEmail("");
    setNumber("");
    setUsername("");
    setPassword("");
    }
  };
  const dk = (de) => {
    const regex = /^[0-9\b]+$/;
    if (de.target.value === "" || regex.test(de.target.value)) {
      setNumber(de.target.value);
    }
  };
  return (
    <>
      {/* <h1>hello</h1> */}
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-6 mx-auto"
              style={{ borderRadius: "2rem", maxWidth: "900px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto">
                <h2 className="fw-bold mb-2 ">User Add</h2>
                <p className="text-white-50 mb-5">Please enter your Data!</p>

                <form onSubmit={hendelsubmit}>
                  <MDBInput
                    className="bg-dark"
                    disabled
                    wrapperClass="mb-4 mx-4 w-100"
                    labelClass="text-white"
                    label="Id"
                    id="formControlLg"
                    type="Id"
                    size="lg"
                    value={setId}
                    onChange={(get) => setId(get.target.value)}
                  />
                  <MDBInput
                    className="text-white"
                    wrapperClass="mb-4 mx-4 w-100"
                    labelClass="text-white "
                    label="username"
                    id="formControlLg"
                    type="username"
                    size="lg"
                    value={username}
                    onChange={(get) => setUsername(get.target.value)}
                  />
                  <MDBInput
                    className="text-white"
                    wrapperClass="mb-4 mx-4 w-100"
                    labelClass="text-white"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(get) => setEmail(get.target.value)}
                  />
                  <MDBInput
                    className="text-white"
                    wrapperClass="mb-4 mx-4 w-100"
                    labelClass="text-white"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(get) => setPassword(get.target.value)}
                  />
                  <MDBInput
                    className="text-white"
                    wrapperClass="mb-4 mx-4 w-100"
                    labelClass="text-white"
                    label="number"
                    id="formControlLg"
                    type="tel"
                    size="lg"
                    maxLength="10"
                    value={number}
                    onChange={dk}
                  />
                  <MDBInput
                    className="text-white"
                    wrapperClass="mb-4 mx-4 w-200"
                    labelClass="text-white"
                    label="city"
                    id="formControlLg"
                    type="city"
                    size="lg"
                    value={city}
                    onChange={(get) => setCity(get.target.value)}
                  />
                  <MDBBtn
                    // outline
                    className="mx-5 px-5"
                    color="white"
                    size="lg"
                    onClick={hendelsubmit}
                  >
                    Submit
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Useradd;
