import React,{Component} from "react";
import Header  from "./Header";

class Dashboard extends Component{
  render() {
    return(
      <div className="body">
      <Header/> 
      <div className="marquee" >
      <marquee width="100%" direction="up" height="400px" >
      Hi .{localStorage.getItem('userDetails')} ,Welcome to the world of E-Medicine
       </marquee>
        </div>  
      
      </div>
      
    );
  }
}
export default Dashboard;