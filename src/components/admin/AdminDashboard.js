import React ,{Component} from "react";
import AdminHeader from "./AdminHeader";
import './AdminDashboard.css'

class AdminDashboard extends Component {
  render() {
    return(
      <div className="body">
      <AdminHeader/> 
      <div className="marquee" >
      <marquee width="100%" direction="up" height="400px" >
      Hi .{localStorage.getItem('userDetails')} ,Welcome to the world of E-Medicine
       </marquee>
        </div>  
      
      </div>
      
    );
  }
}

export default AdminDashboard;