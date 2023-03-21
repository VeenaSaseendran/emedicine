import React,{Component} from "react";
import axios  from 'axios';
import AdminHeader from "./AdminHeader";


class CustomerList extends Component{


  constructor(props){
      super(props);
      this.state={
          posts :[]
      }
  }

  componentDidMount()
  {
      axios.get("https://localhost:7069/User/GetAll").then(response =>{
          console.log(response.data[0]);
          this.setState({posts:response.data})
      });
  }
  render(){
    return(    
        <div>
       <AdminHeader/>
       <br></br>
       <h1 style={{textAlign:'center'}} >Customer List</h1>
       <br></br>
        <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name </th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">Registration Date</th>
    </tr>
  </thead>
  <tbody>
  {this.state.posts.map((itm,k)=>{
return(
    <tr>
      <th scope="row">{itm.id}</th>
      <td>{itm.firstName}</td>
      <td>{itm.lastName}</td>
      <td>{itm.email}</td>
      <td>{itm.password}</td>
      <td>{itm.type}</td>
      <td>{itm.status}</td>
      <td>{itm.createdOn}</td>
    </tr>
    )
  })}
    
  </tbody>
        </table>
        </div>
    )
}
}


export default CustomerList;