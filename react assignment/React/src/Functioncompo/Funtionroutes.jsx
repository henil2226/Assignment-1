import React from "react";
import { Route, Routes } from "react-router-dom";
import Functionmenu from "./Functionmenu";
import Functionintro from "./Functionintro";
import Functionchild from "./Fuctionchild";
import Functionprops from "./Functionprops";
import Usestate from "./Usestate";
import FunctionUseeffict from "./FunctionUseeffict";
import Functionlayouteffect from "./Functionlayouteffect";
import Functionmemo from "./Functionmemo";
import FunctionUsecontext from "./FunctionUsecontext";
import Usecontextmain from "./Usecontextmain";
import Usereduser from "./Usereduser";
import Useref from "./Useref";
import Api from "./Api";
import Apipost from "./Apipost";
import Mycompo from "./Mycompo";
import Mycompotwo from "./Mycompotwo";
import Customhook from "./Customhook";
import Crud from "./Crud";
import Denish from "./Denish";
import Project from "./Project";
import Useradd from "./Useradd";
import Detail from "./Detail";
import Edit from "./Edit";

const Functionroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Functionmenu />}>
        <Route path="Functionintro" element={<Functionintro />} />
        <Route path="Functionchild" element={<Functionchild />} />
        <Route path="Functionprops" element={<Functionprops />} />
        <Route path="Usestate" element={<Usestate />} />
        <Route path="FunctionUseeffict" element={<FunctionUseeffict />} />
        <Route path="Functionlayouteffect" element={<Functionlayouteffect />} />
        <Route path="Functionmemo" element={<Functionmemo />} />
        <Route path="FunctionUsecontext" element={<FunctionUsecontext />} />
        <Route path="Usecontextmain" element={<Usecontextmain />} />
        <Route path="Usereduser" element={<Usereduser />} />
        <Route path="Useref" element={<Useref />} />
        <Route path="Api" element={<Api />} />
        <Route path="Apipost" element={<Apipost />} />
        <Route path="Mycompo" element={<Mycompo />} />
        <Route path="Mycompotwo" element={<Mycompotwo />} />
        <Route path="Customhook" element={<Customhook />} />
        <Route path="Crud" element={<Crud />} />
        <Route path="Denish" element={<Denish />} />
        <Route path="Project" element={<Project />} />
        <Route path="useradd" element={<Useradd />} />
        <Route path="detail/:userid" element={<Detail />} />
        <Route path="edit/:userid" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Functionroutes;
