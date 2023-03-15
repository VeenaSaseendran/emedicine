import React from "react";

import AdminHeader from "./AdminHeader";


function CustomerList(){
    return(
        
        <div>
       <AdminHeader/>
       <br></br>
       <h1 style={{textAlign:'center'}} >Customer List</h1>
       <br></br>
        <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name </th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Funds</th>
      <th scope="col">Status</th>
      <th scope="col">Registration Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
        </table>
        </div>
    )
}


export default CustomerList;