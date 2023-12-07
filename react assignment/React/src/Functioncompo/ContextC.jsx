import React, { useContext } from "react";
import { Name } from "./Usecontextmain";

const ContextC = () => {

        const user = useContext(Name)



  return (
    <>
    <h1>hello  {user}</h1>
      {/* <h1>ContextC</h1> */}
      {/* <Name.Consumer>{
        (Princ) => {
            return <h1>{Princ}</h1>
        }
        }</Name.Consumer> */}
    </>
  );
};

export default ContextC;
