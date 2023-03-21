import React ,{Component, useState,useEffect} from "react";
import './Medicinedisplay.css';
import Header from "./Header";
import axios  from 'axios';

 function Medicinedisplay(){
    const[medicines,setmedicines]=useState([]);
    const [isClicked, setIsCliked] = useState(false);
    useEffect(()=>{
        axios.get("https://localhost:7069/GetAllMedicines")
          .then(res => res)
          .then(
            (result) => {
                setmedicines(result.data);
            }
          );
      },[isClicked]);

    const handleAddtoCartClick = (medicineId,unitPrice,quantity) => {
         fetch('https://localhost:7069/Cart/AddtoCart',{
         method: 'POST',
         body: JSON.stringify({
            userId:localStorage.getItem("userId"),
            medicineId:medicineId,
            unitPrice:unitPrice,
            discount:0,
            quantity:quantity,
            totalPrice:unitPrice*quantity
        }),
        headers:{'Content-type':'application/json;charset=UTF-8',},
      })
      .then(response=>response.json()).then(data=>{
        if(data){      
          alert('Added Successfully') ;
          
        }
      });
  }; 
 
    return(
       <div>
         <Header/>
       
        <div className="container mydiv">
            
        <div className="row">
        {medicines.map(med =>(
            <div key={med.id} className="col-md-4">
           
                <div className="bbb_deals">
                    <div className="ribbon ribbon-top-right"></div>
                    <div className="bbb_deals_title"></div>
                    <div className="bbb_deals_slider_container">
                        <div className=" bbb_deals_item">
                            <div className="bbb_deals_image"><img src="https://apexhospitalvaranasi.com/wp-content/uploads/2021/09/general-medicine-1.jpg" alt=""/></div>
                            <div className="bbb_deals_content">
                               
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div className="bbb_deals_item_name" >{med.name}</div>
                                 </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">                                  
                                    <div className="bbb_deals_item_price ml-auto"  > Manufacturer: <span>{med.manufacturer}</span></div>
                                </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">                                
                                    <div className="bbb_deals_item_price ml-auto"  >        Price: <span>{med.unitPrice}</span></div>
                                </div>
                                <div className="available">
                                    <div className="available_line d-flex flex-row justify-content-start">
                                        <div className="available_title">Available Quantity: <span>{med.quantity}</span></div>
                                        <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                    </div>
                                 
                                </div>
                                <div className="available">
                                <button type="submit"className="btn btn-primary" onClick={() => handleAddtoCartClick(med.id,med.unitPrice,med.quantity)} > Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           ))}
        </div>
    </div>
    </div>
    )
}
export default Medicinedisplay;