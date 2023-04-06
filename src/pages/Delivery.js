import React from 'react'
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';



export default function Delivery() {

    let arr = [{ name: "Chinmay Patil" }, { name: "Ajinkya Rane" }]
    return (
        <div className="bg-gray-200 m-10 p-0 justify-center w-full flex-col border-gray-300 border-2 rounded-lg">
            <div className="p-4 bg-white flex justify-center">
                <SearchBar />
            </div>
            <div className='mx-auto flex justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4'>
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
                <ProfileCard name="Rohan Patil" role="Delivery Agent" />
            </div>


        </div>
    )
}
