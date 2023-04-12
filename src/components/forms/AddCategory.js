import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function AddCategory() {




    const [catobj, setcatobj] = useState({ category: '',color:'' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catobj);
    }

    const onDiscard=(e)=>{
        e.preventDefault();
        setcatobj({ category: '',color:'' });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }



    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                    <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                        <form className='mx-auto p-4' onSubmit={handleSubmit}>
                            <h2 className='text-center font-bold font-mono text-2xl'>CATEGORIES</h2>
                            <hr className='w-48 mt-2 border-2 mx-auto' />

                            <div className='flex py-2 justify-center'>
                                <div className='flex-col justify-center'>

                                    <label className='py-3 font-bold'>Enter a Category : </label>
                                </div>
                                <div className='flex-col justify-center'>

                                    <input style={{ width: "400px" }} required className='ml-4 p-2 resize-x border mt-2 rounded-md' type="text" name='category' value={catobj.category} onChange={onChange} placeholder='Enter Category' />
                                </div>
                            </div>
                            <div className='flex py-2 justify-center'>
                                <div className='flex-col justify-center'>

                                    <label className='py-3 font-bold'>Select Header Color : </label>
                                </div>
                                <div className='flex-col justify-center'>

                                    <input style={{ width: "400px" }} value={catobj.color} required className='ml-4 h-8 p-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />
                                </div>
                            </div>
                            

                            <div className='flex mx-auto'>
                                <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onSubmit={handleSubmit}>SAVE</button>
                                <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}


