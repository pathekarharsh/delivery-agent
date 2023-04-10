import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import '../../App.css';



export default function EditDeliveryAgent() {

    const navigate = useNavigate();


    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const [userInfo, setUserInfo] = useState();

    // const onSubmit = (data) => {
    //     setUserInfo(data);
    //     console.log(data);
    // };
    // console.log(errors);

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
        <div className=''>
            {/* <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage' /> */}

            {/* printing submitted data on screen */}
            {/* <pre className='text-white'>{JSON.stringify(obj, undefined, 2)}</pre> */}




            <div className='p-2 mx-auto rounded overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    <form className='mx-auto bg-white p-4' onSubmit={handleSubmit}>
                        {/* <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2> */}
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

                        <button type='submit' className='font-poppins font-bold border w-full mt-3 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black'>EDIT DELIVERY AGENT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


