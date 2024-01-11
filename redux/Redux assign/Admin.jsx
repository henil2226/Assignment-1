import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
const Admin = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const heandeldetail = (id) => {
    // navigate("/Detile/" + id );
    console.log("hello");
    navigate("/detile/" + id);
  };
  const Heandeledit = (id) => {
    navigate("/edit/" + id);
  };
  const Heandeldelet = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      }).then((output) => {
        output.json().then((resp) => {
          alert("Removed successfully.");

          fetch("http://localhost:5000/posts").then((output) => {
            return output.json().then((resp) => {
              setUser(resp);
            });
          });
          // window.location.reload();
        });
      });
    }
  };
  useEffect(() => {
    let user = sessionStorage.getItem("name");
    let role = sessionStorage.getItem("role");
    if (user === "" || user === null || role != 1) {
      // console.log("Called");
      navigate("/admin");
    }
  }, []);
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

  return (
    <>
      <MDBTable align="center" className="Project-table">
        <MDBTableHead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>Email</td>
            <td>Password</td>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {user.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>

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
                  heandeldetail(item.id);
                }}
              >
                detail
              </button>
              <button
                className="btn-project"
                onClick={() => {
                  Heandeldelet(item.id);
                }}
              >
                Delet
              </button>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Admin;
