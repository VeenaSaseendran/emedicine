import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


function AdminHeader(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Medicine(Admin Panel)</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Welcome <span class="sr-only">({localStorage.getItem('userDetails')})</span></a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/medicine">Medicine Management</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/customers">Customer Management</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/adminorders">Order Management</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/" >Logout</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    )
    
}
export default AdminHeader;