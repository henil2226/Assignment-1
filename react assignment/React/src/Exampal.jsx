import React from "react";
import { Link, Outlet } from "react-router-dom";

const Exampal = () => {
  return (
    <>
      {/* <Headerfile /> */}
      <div className="container">
        <div className="row my-3  ">
          <div className="col-6">
            <Link to="/Exampal/Classcompo">Class Component</Link>
            {/* <Link to="/Exampal/Classcompo"><h1>Class Component</h1></Link> */}
          </div>
          <div className="col-6  ">
            <Link to="/Exampal/Functioncompo"><h1>Functional Component</h1></Link>
          </div>
        </div>
        <div className="row justify-content-center" >
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exampal;
