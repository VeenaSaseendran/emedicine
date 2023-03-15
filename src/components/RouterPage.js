import React ,{Component}from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './users/Dashboard';
import Orders from './users/Orders';
import Profile from './users/Profile';
import Cart from './users/Cart';
import Medicinedisplay from './users/Medicinedisplay';
import AdminDashboard from './admin/AdminDashboard';
import CustomerList from './admin/CustomerList';
import AdminOrders from './admin/AdminOrders';
import Medicine from './admin/Medicine';

class RouterPage extends Component{
    constructor(){
      super();
    }
  
    render(){
      return(
       <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myorders' element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Medicinedisplay />} />

            <Route path='/admindahboard' element={<AdminDashboard />} />
            <Route path='/adminorders' element={<AdminOrders />} />
            <Route path='/customers' element={<CustomerList />} />
            <Route path='/medicine' element={<Medicine />} />
            
        </Routes>
       </Router>
  );
}
}



export default RouterPage;