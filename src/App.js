import Nav from './components/Nav';
import Products from './pages/Products';
import Home from './pages/Home';
import { useState } from 'react';
import Delivery from './pages/Delivery';
import {
  BrowserRouter as Router,
  Route, Routes, Outlet,
  createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import AdminLogin from './components/forms/AdminLogin';
import AddDeliveryAgent from './components/forms/AddDeliveryAgent';
import AddInventoryManager from './components/forms/AddInventoryManager';
import AddProducts from './components/forms/AddProducts';
import SideBar from './components/SideBar';
// import AddProductCategory from './components/forms/AddProductCategory';
// import AddProductItem from './components/forms/AddProductItem';

function App() {

  const [login, setlogin] = useState(true);



  return (
    <div className='flex'>
      <Router>
        <SideBar />
        <Routes>
          <Route exact path='/Home' element={<Home />} />

          <Route exact path="/addcategory" />
          <Route exact path="/addsubcategory" />
          <Route exact path="/addproduct" element={<AddProducts />} />
          <Route exact path="/viewproducts" element={<Products />} />

          <Route exact path="/adddeliveryagent" element={<AddDeliveryAgent />} />
          <Route exact path="/viewdeliveryagents" element={<Delivery />} />

          <Route exact path="/addinventorymanager" element={<AddInventoryManager />} />
          <Route exact path="/viewinventorymanagers" />

          <Route exact path="/vieworders" />

          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/updateproduct" />
          {/* <Route exact path="/updatecategory" />
          <Route exact path="/updatesubcategory" /> */}
          <Route exact path="/updateinventorymanager" />
          <Route exact path="/updatedeliveryagent" />

        </Routes>
      </Router>

    </div>

  );
}

export default App;
