import React,{Component, useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios  from 'axios';
import Header from "./Header";

function OrdersOld(){
  const[order,setOrders]=useState([]);

/*  onCancelOrder=(e)=>{
    console.log(e.table.id);
    let orderInfo={    
          Id:e.OrderId
    
        };
fetch('https://localhost:7069/Order/CancelOrder',{
      method: 'DELETE',
      headers:{'Content-type':'application/json'},
        body: orderInfo
    }).then(r=>r.json()).then(res=>{
      if(res){
        this.setState({message:' Successfully Cancel the Order'});
      }
    });
    }*/
    useEffect(()=>{
      axios.get("https://localhost:7069/Order/GetAllByUserId?UserId=1")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            alert('in');
            setOrders(result.data);
          }
        );
    },[]);
  /*componentDidMount()
  {
      axios.get("https://localhost:7069/Order/GetAllByUserId?UserId=1").then(response =>{
          console.log(response.data[0]);
          this.setState({posts:response.data})
      });
  }*/
  
    return(    
        <div>
       <Header/>
       <br></br>
       <h1 style={{textAlign:'center'}} >My Orders</h1>
       <br></br>
        <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th hidden="true" scope="col">Order No</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.order.map((ord) =>(
    <tr key={ord.id} >
      <td scope="row">{ord.id}</td>
      <td hidden="true" ref="OrderId" >{ord.orderNo}</td>
      <td>{ord.orderTotal}</td>
      <td>{ord.orderStatus}</td>
      <td><button type="button"  >Cancel Order</button></td>
      <td><button type="button"  >Order Details</button></td>
    </tr>
    ))}
    
  </tbody>
        </table>
        </div>
    )
}


export default OrdersOld;