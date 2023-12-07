import React, { useEffect, useState } from "react";

const Api = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((output) => {
      output.json().then((den) => {
        console.log(den);
        // console.log(output);
        setUser(den);
        
      });
    });
  }, []);

  return (
    <>
      <h1>Api</h1>
      {/* Application programming interface (Medeater ni reta deta provide karva nu deta call karva nu deta get karva nu and deta post karva nu)*/}
      {/* three impo.
        1)get(import)
        2)post(send)
        3)put(edite) 
        all way call "What".

        fetch e promiss ape (pandding,resol,reject).
        
        */}
      <table border="1px solid" width="100%" align-item="centr" cellPadding="10px">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>username</td>
          <td>email</td>
          <td>address</td>
        </tr>
        {user.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.address.suite}</td>
          </tr>
          
        ))}
      </table>
      
    </>
  );
};

export default Api;
