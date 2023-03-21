import React, { useState } from "react";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import axios  from 'axios';
import Dashboard from "./users/Dashboard";
import AdminDashboard  from "./admin/AdminDashboard";

function Login(props){

  
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUser] = useState()
    const navigate = useNavigate();

    const handleSubmit = async e => {
      e.preventDefault();
      const user = { email, password };
      // send the username and password to the server
      const response = await axios.post(
        "https://localhost:7069/User/Login",
        user
      );
      // set the state of the user
      setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('userDetails', response.data[0].email)
      localStorage.setItem('userId', response.data[0].id)
      console.log(response.data)
      if (response.data[0].type =='user') {
        navigate('/dashboard');
      }
      if (response.data[0].type =='admin') {
        navigate('admindashboard');
      }
    };
    
    return (
      <section className="vh-100" style={{ backgroundColor: '#9A616D' }} >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.X2H6zdahkJKig1l_HRhoZgHaFj?pid=ImgDet&w=1024&h=768&rs=1"
                      alt="login form" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleSubmit} >

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="text" value={email} placeholder="enter a username" onChange={({ target }) => setUsername(target.value)}  className="form-control form-control-lg" />
                         
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password"  value={password} placeholder="enter a password" onChange={({ target }) => setPassword(target.value)} className="form-control form-control-lg" />
                         
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit" >Login</button>
                        </div>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" >Don't have an account? <Link to="/registration">Register here</Link></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    )
  
}

export default Login;