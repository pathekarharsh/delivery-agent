import React from 'react'
import HomeCard from '../components/HomeCard'
import '../App.css';



export default function Home() {

    const titlearray = [{ title: "Add the Product Category", path: "/" }, { title: "Add the Product Items", path: "/" }, { title: "Add the Delivery Agent", path: "/AddDeliveryAgent" }, { title: "Add the Inventory Manager", path: "/AddInventoryManager" }];


    return (
        <div >
            {/* className='mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-center' */}
            {/* {titlearray.map((obj) => {
                return (
                    <HomeCard title={obj.title} path={obj.path} />
                )
            })} */}
            <h1 className='p-64 m-24 font-bold text-4xl text-center'>Welcome to the Admin Dashboard</h1>
        </div>
    )
}

