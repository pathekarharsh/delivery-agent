import Nav from './components/Nav';
import Categories from './pages/Categories';
import Home from './pages/Home';
import { useState } from 'react';
import Delivery from './pages/Delivery';
import {
  BrowserRouter as Router,
  Route, Routes, Outlet,
  createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import AdminLogin from './components/forms/AdminLogin';
import AddDeliveryAgent from './components/forms/AddDeliveryAgent';
import AddInventoryManager from './components/forms/AddInventoryManager';
import AddProducts from './components/forms/AddProducts';
import SideBar2 from './pages/SideBar2';
// import AddProductCategory from './components/forms/AddProductCategory';
// import AddProductItem from './components/forms/AddProductItem';

function App() {

  const [login, setlogin] = useState(true);



  return (
    <div className='flex'>
      <Router>
        <SideBar2 />
        <Routes>
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/category" element={<Categories />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/AddDeliveryAgent" element={<AddDeliveryAgent />} />
          <Route exact path="/AddInventoryManager" element={<AddInventoryManager />} />
          <Route exact path="/AddProducts" element={<AddProducts />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
