import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "../Com-Comp/Header";
import Classmenu from "./Classmenu";
import Classintro from "./Classintro";
import Name from "./Name";
import Denish from "./Denish";
import Classjsx from "./Classjsx";
import Classprops from "./Classprops";
import Classstate from "./Classstate";
import Childforclass from "./Childforclass";
import Statelifecycle from "./Stateligecycle";
import Classrendring from "./Classrendring";
import Classuncontroll from "./Classuncontroll";
import Classcontroll from "./Classcontroll";
import Classlistandkeys from "./Classlistandkeys";
import Statelifting from "./Statelifting/Statelifting";
import Hoc from "./HOC/Hoc";

class Classroutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Classmenu />}>
          <Route path="Classintro" element={<Classintro />} />
          <Route path="Name" element={<Name />} />
          <Route path="Denish" element={<Denish />} />
          <Route path="Classjsx" element={<Classjsx />} />
          <Route path="Classprops" element={<Classprops />} />
          <Route path="Classstate" element={<Classstate />} />
          <Route path="CHildforclass" element={<Childforclass />} />
          <Route path="Statelifecycle" element={<Statelifecycle />} />
          <Route path="Classrendring" element={<Classrendring />} />
          <Route path="Classuncontroll" element={<Classuncontroll />} />
          <Route path="Classcontroll" element={<Classcontroll />} />
          <Route path="Classlistandkeys" element={<Classlistandkeys />} />
          <Route path="Statelifting" element={<Statelifting />} />
          <Route path="Hoc" element={<Hoc />} />
        </Route>
      </Routes>
    );
  }
}

export default Classroutes;
