import React from "react";
import Navbar from "../components/Navbar";
import DeliveryDetails from "../components/DeliveryDetails";


const DeliveryPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0">
                <Navbar pagename="Delivery Agents Page"/>
                <DeliveryDetails/>
            </div>
        </div>
    );
};

export default DeliveryPage;
