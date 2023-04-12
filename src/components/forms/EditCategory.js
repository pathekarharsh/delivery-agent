import React from 'react'
import { useState } from "react";
// import { useForm } from "react-hook-form";
import '../../App.css';
import Navbar from '../Navbar';


export default function EditCategory() {

    

    const [catobj, setcatobj] = useState({ category: '',color:'',subcatallowed:0 });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catobj);
    }

    const onDiscard=(e)=>{
        e.preventDefault();
        setcatobj({ category: '',color:'',subcatallowed:0 });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }





    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='mx-auto p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center text-2xl'>CATEGORIES</h2>
                                <hr className='mt-2 w-48 border-2 mx-auto' />
                                <div className='flex py-4'>
                                    <div className='flex-col '>

                                        <label className='py-3 font-bold'>Enter a Category : </label>
                                    </div>
                                    <div className='flex-col justify-center'>

                                        <input value={catobj.category} style={{ width: "400px" }} required className='ml-4 p-2 resize-x border mt-2 rounded-md' type="text" name='category' onChange={onChange} placeholder='Enter Category' />
                                    </div>
                                </div>
                                <div className='flex py-2 '>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 font-bold'>Select Header Color : </label>
                                    </div>
                                    <div className='flex-col justify-center'>

                                        <input value={catobj.color} style={{ width: "400px" }} required className='ml-4 h-8 p-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />
                                    </div>
                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 font-bold'>Subcategory Allowed : yes no toggle button</label>
                                    </div>
                                    <div className='flex-col justify-center'>
                                        <input value={catobj.subcatallowed} type="" name="subcatallowed" id="subcatallowed" />
                                    </div>
                                </div>
                                <div className='flex mx-auto'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
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


