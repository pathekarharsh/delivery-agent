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
import AddCategory from './components/forms/AddCategory';
import AddSubcategory from './components/forms/AddSubcategory';
// import AddProductCategory from './components/forms/AddProductCategory';
// import AddProductItem from './components/forms/AddProductItem';
import Modal from 'react-modal';

Modal.setAppElement('#root');


function App() {
  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };
  const [login, setlogin] = useState(true);
  // const [result, setResult] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const onConfirm = () => {
  //   setResult([true, true])
  //   setIsModalOpen(false)
  //   // setResult([false, false])
  // }
  // const onCancel = () => {
  //   setResult([true, false])
  //   setIsModalOpen(false)
  //   // setResult([false, false])
  // }

  // const shouldDelete = async () => {
  //   return new Promise((resolve, reject) => {
  //     setIsModalOpen(true);
  //     while (!result) { }
  //     resolve(result);
  //     setResult(null);
  //     setIsModalOpen(false);
  //   })
  // }

  return (
    <div className='flex'>

      <Router>
        {/* <SideBar /> */}
        <Routes>
          <Route exact path='/dashboard' element={<SideBar />} >

            <Route exact path='home' element={<Home />} />
            <Route exact path="addcategory" element={<AddCategory />} />
            <Route exact path="addsubcategory" element={<AddSubcategory />} />
            <Route exact path="addproduct" element={<AddProducts />} />
            <Route exact path="viewproducts" element={<Products />} />

            <Route exact path="adddeliveryagent" element={<AddDeliveryAgent />} />
            {/* <Route exact path="viewdeliveryagents" element={<Delivery shouldDelete={shouldDelete} result={result} />} /> */}
            <Route exact path="viewdeliveryagents" element={<Delivery />} />

            <Route exact path="addinventorymanager" element={<AddInventoryManager />} />
            <Route exact path="viewinventorymanagers" />

            <Route exact path="vieworders" />
            <Route exact path="updateproduct" />
            {/* <Route exact path="/updatecategory" />
          <Route exact path="/updatesubcategory" /> */}
            <Route exact path="updateinventorymanager" />
            <Route exact path="updatedeliveryagent" />
          </Route>


          <Route exact path="/" element={<AdminLogin />} />

        </Routes>
      </Router>
      {/* <Modal
        isOpen={isModalOpen}
        style={customStyles}
      >
        <h2>are you sure to delete this user?</h2>
        <button onClick={setResult(true)}>Yes</button>
        <button onClick={setResult(false)}>No</button>
      </Modal> */}
    </div>

  );
}

export default App;
