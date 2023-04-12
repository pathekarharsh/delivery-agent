import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';



export default function AddInventoryManager() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };
    console.log(errors);

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Inventory Manager Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
                                {/* <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2> */}
                                <h2 className='text-center font-bold font-mono text-2xl'>INVENTORY MANAGER</h2>
                                <hr className='w-36 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Name</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="text" name='name' placeholder='Enter Name' {...register('name', { required: true })} />
                                </div>
                                <p className='text-red-600'> {errors.name && "Inventory Manager Name is required"}</p>


                                <div className='flex flex-col py-2'>
                                    <label>Email</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="email" name='email' placeholder='Enter Email' {...register('email', { required: true })} />
                                </div>
                                <p className='text-red-600'>{errors.email && "Inventory Manager Email is required"}</p>


                                <div className='flex flex-col py-2'>
                                    <label>Contact Number</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="text" name='contact' placeholder='Enter Contact Number' {...register('contact', { required: true })} />
                                </div>
                                <p className='text-red-600'> {errors.contact && "Inventory Manager Contact Number is required"}</p>

                                <div className='flex flex-col py-2'>
                                    <label>Upload Delivery Agent Image</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="file" name="managerimage" {...register('managerimage', { required: true })} />
                                </div>
                                <p className='text-red-600'>{errors.managerimage && "Inventory Manager Image is required"}</p>

                                <div className='flex mx-auto mt-2'>

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


