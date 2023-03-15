import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

 function Header(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Medicine(User Panel)</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/orders">My Orders</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/products">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" >Cart</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    )
}
export default Header;