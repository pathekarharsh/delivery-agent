import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";



export default function AddProducts() {

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };
    console.log(errors);

    return (
        <div className='bg-gray-300 w-full'>
        
        {/* printing submitted data on screen */}
        <pre>{JSON.stringify(userInfo,undefined,2)}</pre>

            <div className='mt-8 p-8 h-screen mx-auto rounded overflow-hidden'>
                <div className='border border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2>


                        <div className='flex flex-col py-2'>
                            <label>Product Name</label>
                            <input className='border p-2 rounded-md' type="text" name='productname' placeholder='Enter Product Name' {...register('productname', { required: true })}/>
                        </div>
                        <p className='text-red-600'> {errors.productname && "Product Name is required"}</p>


                        <div className='flex flex-col py-2'>
                            <label>Product Price</label>
                            <input className='border p-2 rounded-md' type="number" name='productprice' placeholder='Enter Product Price' {...register('productprice', { required: true })}/>
                        </div>
                        <p className='text-red-600'>{errors.productprice && "Product Price is required"}</p>


                        <div className='flex flex-row py-2'>
                            <div>
                                <label>Category</label><br />
                                <select className='border px-2 py-2 w-full rounded-md' name="category" {...register('category', { required: true })}>
                                    <option value="streetfood">Streetfood</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="opel">Snacks</option>
                                    <option value="audi">Cold-Drinks</option>
                                </select>
                            </div>
                            {/* <p className='text-red-600'>{errors.category && "Category is required"}</p> */}
                            <div className='ml-8'>
                                <label>Subcategory</label><br />
                                <select className='border px-2 py-2 w-full rounded-md' name="subcategory" {...register('subcategory', { required: true })}>
                                    <option value="Manchurian">Manchurian</option>
                                    <option value="milk">milk</option>
                                </select>
                            </div>
                            {/* <p className='text-red-600'>{errors.subcategory && "Subcategory is required"}</p> */}
                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Upload Product Image</label>
                            <input className='border p-2 rounded-md' type="file" name="productimage" {...register('productimage', { required: true })}/>
                        </div>
                        <p className='text-red-600'>{errors.productimage && "Product Image is required"}</p>
                        
                        <button className='border w-32 mt-4 mb-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


