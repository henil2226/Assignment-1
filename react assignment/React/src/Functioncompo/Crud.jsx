import React, { useState } from "react";
import Customhook from "./Customhook";
import "./Dk.css";
const Crud = () => {
  const [name, setName] = useState("");
  const [alldata, setAlldata] = useState([]);
  // const [show, setShow] = useState(false);
  // const [edittext, setEdittext] = useState("");
  const [denish, setDenish] = useState(false);

  const hendaladd = () => {
    if (name.length !== 0) {
      setAlldata((newdata) => [...newdata, name]);
      // console.log(name);
      setName("");
    }
  };
  console.log(alldata);
  const handledel = (index) => {
    // console.log("handledel");
    console.log(index);
    alldata.splice(index, 1);
    setAlldata([...alldata]);
  };
  const handleedit = (i) => {
    // console.log("handleedit");
    // console.log(i);
    // setName(alldata[i]);
    // setShow(true);
    // setDenish(true);
    setName("")
    
  };
  const henadelupdet = () => {
    //  alldata.splice(denish, 1, name);
    //  setAlldata([...alldata]);
    // setName("");
    // setAlldata((newdata) => [...newdata, name]);
    //   // console.log(name);
    //   setName("");
    // console.log("henadelupdet");
  };
  return (
    <>
      <h1>Crud</h1>
      <div>
        <input
          className="crudinput"
          type="text"
          value={name}
          onChange={(get) => setName(get.target.value)}
        />

        <button onClick={hendaladd} className="crudbutton">
          Add
        </button>
      </div>
      {/* <button onClick={heandelupdate}>updateitem</button> */}

      {alldata.map((val, i) => (
        <div>
          {!denish ? <h1>{val}</h1> : <input type="text" />}
          {!denish ? (
            <button onClick={(<Customhook/>)}>edit</button>
          ) : (
            <button onClick={henadelupdet}>updateitem</button>
          )}
          <button onClick={() => handledel(i)}>del</button>
        </div>
      ))}
    </>
  );
};

export default Crud;
