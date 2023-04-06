import React from 'react'

export default function AddProducts() {
    return (
        <div className='mt-12 p-8 h-screen w-full mx-auto rounded overflow-hidden'>
            <div className='transition duration-300 ease-in-out hover:scale-110 border border-2 max-w-sm mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2>
                    <div className='flex flex-col py-2'>
                        <label>Product Name</label>
                        <input className='border p-2' type="text" placeholder='Enter Product Name' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Product Price</label>
                        <input className='border p-2' type="number" placeholder='Enter Product Price' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Select Category</label>
                        <select className='border p-2' name="cars" id="cars" form="carform">
                            <option value="Food">Food</option>
                            <option value="Dairy">Dairy</option>
                            <option value="opel">Snacks</option>
                            <option value="audi">Cold-Drinks</option>
                        </select>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Select Sub-Category</label>
                        <select className='border p-2' name="cars" id="cars" form="carform">
                            <option value="sub1">sub1</option>
                            <option value="sub2">sub2</option>
                        </select>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Upload Product Image</label>
                        <input className='border p-2' type="file" id="myFile" name="filename" />
                    </div>
                    <button className='border w-full mt-3 mb-8 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Add Product</button>
                </form>
            </div>
        </div>
    )
}
