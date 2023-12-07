import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import { useCallback, useEffect, useRef, useState } from "react";
// import Navebar from "./Navebar";
// import { Incnumber , Decnumber,Textchange, Bgchange } from './action';
// import { useSelector , useDispatch } from 'react-redux';

const Home = () => {
  // const mystate = useSelector((state) => state.Changenumber)
  // const myname = useSelector((name) => name.Textchange)
  // const mycolor = useSelector((name) => name.Bgchange)
  // const dispatch =  useDispatch()
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const inputcopy = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "~!@#$%^&*?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  // const inputcopypassword =(()=>{
  //     inputcopy.current?.select()
  //     navigator.clipboard.writeText(password)
  //   })

  const inputcopypassword = useCallback(() => {
    inputcopy.current?.select();
    inputcopy.current?.setSelectionRange(0, 12);
    navigator.clipboard.writeText(password);
  }, [password]);
  // passwordGenerator()
  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <Navebar/> */}
      <MDBCarousel showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
        />
      </MDBCarousel>
      <div className="width App">
        <div>
          <h1 className="App ">Password Generator</h1>
          <input
            className="input-password"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={inputcopy}
          />
          <button className="button" onClick={inputcopypassword}>
            Copy
          </button>
        </div>
        <div className="second">
          <div>
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="range"> Length : {length}</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label className="range"> Number</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label className="range"> Characters</label>
          </div>
        </div>
      </div>
      {/* <h1>{mystate}</h1>
      <button onClick={() => dispatch(Incnumber())}>Increment</button> <br />
      <button onClick={() => dispatch(Decnumber())}>Decrement</button><br />
      <h1>{myname}</h1>
      <h1>{mycolor}</h1>
      <button onClick={() => dispatch(Textchange())}>Textchange</button>
      <button onClick={() => dispatch(Bgchange())}>Bgchange</button>  */}
    </>
  );
};

export default Home;
