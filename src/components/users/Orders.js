import React,{Component, useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios  from 'axios';
import Header from "./Header";
import './PopUp.css';

function Orders(){
    const[orders,setOrders]=useState([]);
    const[orderItems,setOrderItems]=useState([]);
    const[medicine,setMedicine]=useState([]);
    const [isClicked, setIsCliked] = useState(false);
    useEffect(()=>{
        axios.get("https://localhost:7069/Order/GetAllByUserId?UserId=" +localStorage.getItem("userId"))
          .then(res => res)
          .then(
            (result) => {
              setOrders(result.data);
              getMedicineNames();
            }
          );
      },[isClicked]);
     
      const handleDeleteClick = (orderId) => {
        
        axios.delete('https://localhost:7069/Order/CancelOrder?Id='+orderId)
        .then(response => response)
        .then(
          (result) => {
            alert('Successfully Cancel the Order');
            setIsCliked(bool => !bool)
          }
        );
      };   
      
      
    const [popup,setPop]=useState(false)
    const handleClickOpen=(orderId)=>{
        console.log(orderId);
        setPop(!popup);
        axios.get("https://localhost:7069/OrderItems/GetAllByOrderId?OrderId="+orderId)
        .then(res => res)
        .then(
          (result) => {
            setOrderItems(result.data);
          }
        );
    }
    const closePopup=()=>{
        setPop(false)
    };
    const getMedicineNames = () => {
      axios.get('https://localhost:7069/GetAllMedicines')
        .then(res => res)
        .then(
          (result) => {
              setMedicine(result.data);
          }
        );          
  };
 
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
      <th hidden="true"  scope="col">Order No</th>
      <th scope="col">Order Total</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {orders.map(ord =>(
  
        <tr key={ord.id} >
          
        <td scope="row">{ord.id}</td>
        <td hidden="true" >{ord.orderNo}</td>
        <td>{ord.orderTotal}</td>
        <td>{ord.orderStatus}</td>
        <td><button type="button" onClick={() => handleDeleteClick(ord.id)} >Cancel Order</button></td>
        <td><button type="button" onClick={() =>handleClickOpen(ord.id)} >Order Details</button></td>
      </tr>
    
    ))}
    
  </tbody>
        </table>
        <div>
         {
             popup?
            <div className="parentDisable" >
                        <div className="popup">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div className="modal-header">
                                <h1 >Order Items</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                        </div>
                        </div>
                            <div>
                            <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th   scope="col">Medicine</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
  {orderItems.map(ordItem =>(
  
        <tr key={ordItem.id} >
            <td scope="row">{medicine.map(med =>{
                if(ordItem.medicineId===med.id)
                {return med.name}
            })}</td>
        <td >{ordItem.unitPrice}</td>
        <td>{ordItem.discount}</td>
        <td>{ordItem.quantity}</td>
        <td>{ordItem.totalPrice}</td>
        
      </tr>
    
    ))}
    
  </tbody>
        </table>
                            </div>
                        </div>
                    </div>:""
         }
                            
        </div>
        </div>
        
    )
}
export default Orders;