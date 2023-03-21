import React,{Component} from "react";
import axios  from 'axios';
import AdminHeader from "./AdminHeader";

class AdminOrders extends Component{


    constructor(props){
        super(props);
        this.state={
            posts :[]
        }
    }
  
    componentDidMount()
    {
        axios.get("https://localhost:7069/Order/GetAllOrders").then(response =>{
            console.log(response.data[0]);
            this.setState({posts:response.data})
        });
    }
    
    render(){
      return(    
          <div>
         <AdminHeader/>
         <br></br>
         <h1 style={{textAlign:'center'}} >Order List</h1>
         <br></br>
          <table className="table ">
    <thead className="thead-dark">
      <tr>
        <th scope="col">No</th>
        <th scope="col">Custome Name</th>
        <th scope="col">Order No</th>
        <th scope="col">Total</th>
        <th scope="col">Status</th>
        <th scope="col">Update Status</th>
      </tr>
    </thead>
    <tbody>
    {this.state.posts.map((itm,k)=>{
  return(
      <tr>
        <th scope="row">{itm.id}</th>
        <td>{itm.userId}</td>
        <td>{itm.orderNo}</td>
        <td>{itm.orderTotal}</td>
        <td>{itm.orderStatus}</td>
        <td><button type="button" >Update</button></td>
      </tr>
      )
    })}
      
    </tbody>
          </table>
          </div>
      )
  }
  }
  
  
  export default AdminOrders;