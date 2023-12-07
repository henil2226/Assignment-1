import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
// import Useradd from "./Useradd";

export default function Project() {
  const [user, setUser] = useState([]);
  // const [alldata, setAlldata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/posts").then((output) => {
      output
        .json()
        .then((resp) => {
          console.log(resp);
          // console.log(output);
          setUser(resp);
        })
        .catch((error) => {
          console.log(error.msg);
        });
    });
  }, []);
  const Heandeldetail = (id) => {
    navigate("/Exampal/Functioncompo/Detail/" + id);
  };
  const Heandeledit = (id) => {
    navigate("/Exampal/Functioncompo/Edit/" + id);
  };
  const Heandeldelet = () => {};
  return (
    <MDBTable align="middle" className="Project-table">
      <MDBTableHead>
        <tr>
          <td>id</td>
          <td>username</td>
          <td>email</td>
          <td>password</td>
          <td>number</td>
          <td>city</td>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td colSpan={7} className="AddUser">
            <Link to="/Exampal/Functioncompo/Useradd">
              <button>Add User</button>
            </Link>
          </td>
        </tr>
        {user.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.number}</td>
            <td>{item.city}</td>
            <button
              className="btn-project"
              onClick={() => {
                Heandeledit(item.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn-project"
              onClick={() => {
                Heandeldetail(item.id);
              }}
            >
              detail
            </button>
            <button
              className="btn-project"
              onClick={() => {
                Heandeldelet();
              }}
            >
             
              Delet
            </button>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
   
  );
}
