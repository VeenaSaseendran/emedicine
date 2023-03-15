import React ,{Component} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login'
import Registration from './components/Registration';
import Dashboard from './components/users/Dashboard';
import Orders from './components/users/Orders';
import Profile from './components/users/Profile';
import Cart from './components/users/Cart';
import Medicinedisplay from './components/users/Medicinedisplay';
import AdminDashboard from './components/admin/AdminDashboard';
import CustomerList from './components/admin/CustomerList';
import AdminOrders from './components/admin/AdminOrders';
import Medicine from './components/admin/Medicine';



class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
     <Router>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Medicinedisplay />} />

          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/adminorders' element={<AdminOrders />} />
          <Route path='/customers' element={<CustomerList />} />
          <Route path='/medicine' element={<Medicine />} />
          
      </Routes>
     </Router>
     
);
}
}

export default App;
