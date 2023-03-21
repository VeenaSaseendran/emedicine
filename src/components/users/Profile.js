import React,{Component} from "react";
import Header from "./Header";
import axios  from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom'

 class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
         post :[],
        firstName :null,
        lastName:null,
        email:null,
        password:null,
        userId:null
    }
}

  componentDidMount()
  {  
      axios.get("https://localhost:7069/User/GetByUserId?Id="+localStorage.getItem("userId")).then(response =>{
          console.log(response.data[0]);
          this.setState({posts:response.data})
          this.setState({firstName:response.data.firstName})
          this.setState({lastName:response.data.lastName})
          this.setState({email:response.data.email})
          this.setState({password:response.data.password})
      });
      
  };
onUpdatehandle=(e) =>{  
    fetch('https://localhost:7069/User/Update',{
      method: 'PUT',
      body: JSON.stringify({id:localStorage.getItem("userId"),
        firstName:this.refs.firstName.value,
        lastName:this.refs.lastName.value,
        email:this.refs.email.value,
        password:this.refs.password.value,
        type:"user",
        status:"1",
        createdOn:new Date()
      }),
      headers:{'Content-type':'application/json;charset=UTF-8',},
    })
    .then(response=>response.json()).then(data=>{
      if(data){      
        alert('Updated Successfully') ;
        this.props.history.push("/");
      }
    });
    };

  
  render(){
    return(
      
        <section className="h-100 bg-light">
                 <Header/>
        <div className="container py-5 h-100">    
              <div className="card card-registration my-4">
                
                  <div >
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">My Profile</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text"  id="firstName1" ref="firstName" defaultValue={this.state.firstName} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="firstName1">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="lastName1" ref="lastName" defaultValue={this.state.lastName}  className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="lastName1">Last name</label>
                          </div>
                        </div>
                      </div>   
      
                     
                      <div className="form-outline mb-4">
                        <input type="text" id="email1" ref="email" defaultValue={this.state.email}  className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="email1">Email ID</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="password1" ref="password" defaultValue={this.state.password}  className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="password1">Password</label>
                      </div>
      
                      <div className="d-flex justify-content-end pt-3">
                       
                        <button type="button" onClick={this.onUpdatehandle} className="btn btn-warning btn-lg ms-2">Update</button>
                      </div>
      
                    </div>

                </div>
          </div>
        </div>
      </section>
    )
}
 }

export default Profile;