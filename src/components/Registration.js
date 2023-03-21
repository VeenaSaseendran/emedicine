import React, { Component } from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from 'react-router-dom';
  import axios  from 'axios';

  class Registration extends Component{
    constructor(props){
      super(props);

  }
onRegisterUser=(e)=>{
fetch('https://localhost:7069/User/Register',{
      method: 'POST',
        body: JSON.stringify({
          firstName:this.refs.firstName.value,
          lastName:this.refs.lastName.value,
          email:this.refs.email.value,
          password:this.refs.password.value,
          type:"user",
          status:"1",
          createdOn:new Date()
        }),
        headers:{'Content-type':'application/json;charset=UTF-8',
      },
      })
      .then(response=>response.json()).then(data=>{
        if(data){      
          alert('Registered Successfully') ;
          this.props.history.push("/");
        }
      });
  };
render(){
    return(
    <section className="vh-100 bg-image"
    style={{backgroundImage:'url(${https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp})'}}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderRadius: '15px'}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  
                <form>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="firstName1" ref="firstName" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="firstName1" >First Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="lasttName1" ref="lastName" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="lasttName1" >Last Name</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="email" id="email1"  ref="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="email1">Your Email</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="password1" ref="password" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="password1">Password</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cdg"  ref="repeatpassword" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                  </div>
  
  
                  <div className="d-flex justify-content-center">
                    <button type="button" onClick={this.onRegisterUser}
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">Have already an account?<Link to="/" className="fw-bold text-body" >
                      <u>Login here</u></Link></p>
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       
    )
}
}
export default Registration;