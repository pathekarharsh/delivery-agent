import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';



export default function EditDeliveryAgent() {

    const navigate = useNavigate();

    const [obj, setobj] = useState({
        name: '',
        email: '',
        contact: '',
        agentimage: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard/viewdeliveryagents')
        console.log(obj);
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Delivery Agent Page" />
                    <div className='h-screen items-center flex pb-32'>

                    <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                       <form className='mx-auto bg-white p-4' onSubmit={handleSubmit}>
                        <h2 className='text-center font-bold font-mono text-2xl'>DELIVERY AGENT</h2>
                        <hr className='w-36 mt-2 border-2 mx-auto' />

                        <div className='flex flex-col py-2'>
                            <label>Name</label>
                            <input onChange={onChange} required className='mt-1 border p-2 rounded-md' type="text" name='name' placeholder='Enter Name' />
                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input onChange={onChange} required className='mt-1 border p-2 rounded-md' type="email" name='email' placeholder='Enter Email' />
                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Contact Number</label>
                            <input onChange={onChange} required className='mt-1 border p-2 rounded-md' type="text" name='contact' placeholder='Enter Contact Number' />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Upload Delivery Agent Image</label>
                            <input onChange={onChange} required className='mt-1 border p-2 rounded-md' type="file" name="agentimage" />
                        </div>

                        <div className='flex mx-auto'>

<button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black'>SAVE</button>
<button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black'>DISCARD</button>
</div>                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}


