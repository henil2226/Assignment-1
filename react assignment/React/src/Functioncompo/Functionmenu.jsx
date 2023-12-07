import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functionmenu = () => {
  return (
    <>

        
        <div >
          <ul>
            <li>
              <Link to="Functionintro">Functionintro</Link>
            </li>
            <li>
              <Link to="Functionchild">Functionchild</Link>
            </li>
            <li>
              <Link to="Functionprops">Functionprops</Link>
            </li>
            <li>
              <Link to="Usestate">Usestate</Link>
            </li>
             <li>
                <Link to="FunctionUseeffict">FunctionUseeffict</Link>
              </li>
              <li>
                <Link to="Functionlayouteffect">Functionlayouteffect</Link>
              </li>
              <li>
                <Link to="Functionmemo">Functionmemo</Link>
              </li>
              <li>
                <Link to="FunctionUsecontext">FunctionUsecontext</Link>
              </li>
              <li>
                <Link to="Usecontextmain">Usecontextmain</Link>
              </li>
              <li>
                <Link to="Usereduser">Usereduser</Link>
              </li>
              <li>
                <Link to="Useref">Useref</Link>
              </li>
              <li>
                <Link to="Api">Api</Link>
              </li>
              <li>
                <Link to="Apipost">Apipost</Link>
              </li>
              <li>
                <Link to="Mycompo">Mycompo</Link>
              </li>
              <li>
                <Link to="Mycompotwo">Mycompotwo</Link>
              </li>
              <li>
                <Link to="Customhook">Customhook</Link>
              </li>
              <li>
                <Link to="Crud">Crud</Link>
              </li>
              <li>
                <Link to="Denish">Denish</Link>
              </li>
              <li>
                <Link to="Project">Project</Link>
              </li>
              {/* <li>
                <Link to="Useradd">Useradd</Link>
              </li> */}
          </ul>
          <Outlet />
        </div>
 
    </>
  );
};

export default Functionmenu;
