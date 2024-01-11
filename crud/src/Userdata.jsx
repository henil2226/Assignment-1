import React, { useEffect, useState } from "react";
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";


const Userdata = () => {

  const [data, setData] = useState([])
  const [updatedata, setUpdatedata] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/userid").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp)
      })
    })
  }, [updatedata])

  const Navigate = useNavigate()

  const adduser = () => {
    Navigate("/useradd")
  }

  const details = (id) => {
    Navigate("/userdetails/" + id)

  }

  const edit = (id) => {
    Navigate("/useredit/" + id)
  }
  const delet = (id)=>{

    if (window.confirm("do you want to delet")) {
      fetch("http://localhost:5000/userid/" + id, {
        method: "DELETE"
      }).then((respp)=>{
        alert("removed successfully");
        // window.location.reload();
        setUpdatedata(!updatedata)
      }).catch((err)=>{
        console.log(err.message);
      })
    }
  }




  return (
    <>
      <h1>Userdata</h1>


      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Username</th>
            <th scope='col'>Userpassword</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>

        <tr>
          <td>
            <button onClick={adduser}>add-user</button>
          </td>
        </tr>
        <MDBTableBody>

          {
            data.map((item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={()=>{details(item.id)}}>details</button>
                  <button onClick={()=>{edit (item.id)}}>edit</button>
                  <button onClick={()=>{delet(item.id)}}>delet</button>
                </td>
              </tr>
            )
          }

        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default Userdata;