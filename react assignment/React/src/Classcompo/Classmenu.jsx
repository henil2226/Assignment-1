import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classmenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="Classintro">Classintro</Link>
          </li>
          <li>
            <Link to="Name">Name</Link>
          </li>
          <li>
            <Link to="Denish">Denish</Link>
          </li>
          <li>
            <Link to="Classjsx">Classjsx</Link>
          </li>
          <li>
            <Link to="Classprops">Classprops</Link>
          </li>
          <li>
            <Link to="Classstate">Classstate</Link>
          </li>
          <li>
            <Link to="CHildforclass">CHildforclass</Link>
          </li>
          <li>
            <Link to="Statelifecycle">Statelifecycle</Link>
          </li>
          <li>
            <Link to="Classrendring">Classrendring</Link>
          </li>
          <li>
            <Link to="Classuncontroll">Classuncontroll</Link>
          </li>
          <li>
            <Link to="Classcontroll">Classcontroll</Link>
          </li>
          <li>
            <Link to="Statelifting">Statelifting</Link>
          </li>
          <li>
            <Link to="Hoc">Hoc</Link>
          </li>
        </ul>
        <Outlet />
      </>
    );
  }
}

export default Classmenu;
