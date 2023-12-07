import React, { useEffect, useState } from "react";
// import img from "..\Drinks.jpg";

const Apipost = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts").then((output) => {
      output.json().then((den) => {
        console.log(den);
        // console.log(output);
        setUser(den);
      });
    });
  },[username]);

  // const num = "/*[0-9]+$/";

  function savedata() {
    // console.log(username , email , password, number, city);
    console.log({ username, email, password, number, city });
    let data = { username, email, password, number, city };
    // let data ={ "username":username, "email":email, "password":password, "number":number, "city":city }
    // let data ={ "title":"test", "author":"data" }
    if (username === "" || email === "" || password === "" || number === "" || city === "" ) {
      alert("Please enter your Data!");
      // console.log("error");
    } else {
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
      <h1>Apipost</h1>

      <table width="70%" border="1px solid" align="center" className="apipost">
        <tr>
          <td>UserName</td>
          <td>
            <input
              className="apipostinput"
              type="text"
              value={username}
              onChange={(get) => setUsername(get.target.value)}
              placeholder="UserName"
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input
              className="apipostinput"
              type="email"
              value={email}
              onChange={(get) => setEmail(get.target.value)}
              placeholder="Email"
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              className="apipostinput"
              type="password"
              value={password}
              onChange={(get) => setPassword(get.target.value)}
              placeholder="Password"
            />
          </td>
        </tr>
        <tr>
          <td>Number</td>
          <td>
            <input
              className="apipostinput"
              type="tel"
              onChange={dk}
              value={number}
              placeholder="Number"
              maxLength="10"
            />
          </td>
        </tr>
        {/* <tr>
          <td>Number</td>
          <td>
            <input
              type="tel"
              value={number}
              onChange={(get) => setNumber(get.target.value)}
              placeholder="Number"
            />
          </td>
        </tr> */}
        <tr>
          <td>City</td>
          <td>
            <input
              className="apipostinput"
              type="text"
              value={city}
              onChange={(get) => setCity(get.target.value)}
              placeholder="City"
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={savedata} className="apipostbutton">
              Submit
            </button>
          </td>
        </tr>
      </table>

      <table className="two" cellspacing="20px">
        <tr className="four">
          <td className="three">id</td>
          <td className="three">username</td>
          <td className="three">email</td>
          <td className="three">password</td>
          <td className="three">number</td>
          <td className="three">city</td>
        </tr>
        {/* {user.map((abc) => (
          <tr>
            <td>{abc.id}</td>
          </tr>
        ))} */}
        {user.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.number}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Apipost;
