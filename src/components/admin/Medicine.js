import React,{Component} from "react";
import 'bootstrap';
import axios  from 'axios';
import { Button } from "bootstrap";
import AdminHeader from "./AdminHeader";

class Medicine extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      posts :[]
    };
  }
 handleSubmit=(e) =>{  
fetch('https://localhost:7069/AddMedicine',{
      method: 'POST',      
      body: JSON.stringify({ id:0,  
        name:this.refs.Name.value,
        manufacturer:this.refs.Manufacturer.value,
        unitPrice:this.refs.UnitPrice.value,
        discount:this.refs.Discount.value,
        quantity:this.refs.Quantity.value,
        expDate:"2023-03-16T23:52:22.543Z",
        imageUrl:"uui",
        status:1
      }),
      headers:{'Content-type':'application/json;charset=UTF-8',
    },
    })
    .then(response=>response.json()).then(data=>{
      if(data){
       // this.setState({message:'New Medicine is Created Successfully'});
        alert("New Medicine is Created Successfully") ;
      }
    });
};
onMedicineDelete =(id) =>
{
  fetch('https://localhost:7069/Delete?id='+id,{
    method: 'DELETE' ,    
  })
  .then(response=>response.json()).then(data=>{
    if(data){
      this.setState({message:'Deleted Successfully'});
      alert(this.state.message) ;
    }
  });
};
 
    componentDidMount()
    {
        axios.get("https://localhost:7069/GetAllMedicines").then(response =>{
            console.log(response.data[0]);
            this.setState({posts:response.data})
        });
    }
    render(){
    return(
        <section className="h-100 bg-light">
          <AdminHeader/>
        <div className="container py-5 h-100">
        
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card card-registration my-4">
              
                  <div >
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Medicine Management</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" ref="Name" placeholder="Name" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" ref="Manufacturer" placeholder="Manufacturer" />
                          </div>
                        </div>
                      </div>   
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" ref="UnitPrice" placeholder="Price" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" ref="Discount" placeholder="Discount" />
                          </div>
                        </div>
                      </div>   
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" ref="Quantity" placeholder="Quantity" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                         <input placeholder="Select date" type="text" id="example" ref="ExpDate" className="form-control"/>
                        
                        <i className="fas fa-calendar input-prefix"></i>
                        </div>
                        </div>
                      </div>   
                      <div className="row">                   
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <input type="file" className="form-control" id="customFile" />
                          </div>
                        </div>
                        <div className="col-md-2 mb-2">
                          <div className="form-outline">
                          <button type="button" onClick={this.handleSubmit}
                           className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"  >Add</button>
                          </div>
                          </div>
                          <div className="col-md-2 mb-2">
                          <div className="form-outline">
                          <button type="button"
                           className="btn btn-dark btn-lg  " >Reset</button>

                          </div>
                        </div>
                      </div>
                    </div>
                </div>
  <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Exp Date</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.posts.map((itm,k)=>{
  return(
      <tr key={itm.id} >
        <th scope="row">{itm.id}</th>
        <td>{itm.name}</td>
        <td>{itm.manufacturer}</td>
        <td>{itm.unitPrice}</td>
        <td>{itm.discount}</td>
        <td>{itm.quantity}</td>
        <td>{itm.expDate}</td>
        <td>{itm.imageUrl}</td>
        <td><button type="button" onClick={() =>this.onMedicineDelete(itm.id)} >delete</button></td>
      </tr>
      )
    })}
    
  </tbody>
        </table>
            </div>
          </div>
        </div>
        
      </section>
    )
}
}

export default Medicine;