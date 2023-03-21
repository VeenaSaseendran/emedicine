import React,{Component, useState,useEffect} from "react";
import Header from "./Header";
import axios  from 'axios';

 function Cart(){
 
        const[cart,setCart]=useState([]);
        const[medicine,setMedicine]=useState([]);
        const [isClicked, setIsCliked] = useState(false);
        const gradTotal = 0;//cart.reduce((totalPrice, currentValue) => totalPrice = totalPrice + currentValue.prix,0);

        useEffect(()=>{
            axios.get("https://localhost:7069/Cart/GetAllByUserId?UserId=" +localStorage.getItem("userId"))
              .then(res => res)
              .then(
                (result) => {
                    setCart(result.data);
                }
              );
              getMedicineNames();
          },[isClicked]);
         
          const handleDeleteClick = (cartId) => {
           /// const index = orders.findIndex((order) => order.id === orderId);
            axios.delete('https://localhost:7069/Cart/DeleteCart?Id='+cartId)
            .then(response => response)
            .then(
              (result) => {
                alert('Successfully Removed');
                setIsCliked(bool => !bool)
              }
            );
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
        const handleBookOrder = () => {
             fetch('https://localhost:7069/Order/BookOrder',{
             method: 'POST',
             body: JSON.stringify({
                userId:localStorage.getItem("userId"),
                orderNo:'9',
                orderTotal:12,
                orderStatus:'Ordered'
            }),
            headers:{'Content-type':'application/json;charset=UTF-8',},
          })
          .then(response=>response.json()).then(data=>{
            if(data.id){      
              alert('Order Booked Successfully') ;
              fetch('https://localhost:7069/OrderItems/BookOrder',{
                method: 'POST',
                body: JSON.stringify({
                    orderId:data.id,
                    medicineId:9,
                    unitPrice:12,
                    discount:0,
                    quantity:10,
                    totalPrice:12
               }),
               headers:{'Content-type':'application/json;charset=UTF-8',},
             })
            }
          });
      }; 
        
          return(    
            <div>
           <Header/>
           <br></br>
           <h1 style={{textAlign:'center'}} >My Cart</h1>
           <br></br>
            <table className="table ">
      <thead className="thead-dark">
        <tr>
          <th   scope="col">Medicine</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {cart.map(ca =>(
      
            <tr key={ca.id} >
            <td scope="row">{medicine.map(med =>{
                if(ca.medicineId===med.id)
                {return med.name}
            })}</td>
            <td >{ca.unitPrice}</td>
            <td>{ca.quantity}</td>
            <td>{ca.totalPrice}</td>
            <td><button type="button" onClick={() => handleDeleteClick(ca.id)}  >Remove</button></td>
         
          </tr>
        
        ))}
        
      </tbody>
            </table>
           
            <button type="submit"className="btn btn-primary" onClick={() => handleBookOrder()} > Book Order</button>                   
            </div>
            
        )
    
}
export default Cart;