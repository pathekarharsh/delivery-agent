import React from 'react'

export default function AddInventoryManager() {
  return (
    <div className='mt-16 p-8 h-screen w-full mx-auto rounded overflow-hidden'>
            <div className='transition duration-300 ease-in-out hover:scale-110 border border-2 max-w-sm mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2>
                    <div className='flex flex-col py-2'>
                        <label>Name</label>
                        <input className='border p-2' type="text" placeholder='Enter Name' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input className='border p-2' type="email" placeholder='Enter Email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Contact Number</label>
                        <input className='border p-2' type="number" placeholder='Enter Contact Number' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Upload Inventory Manager's Image</label>
                        <input className='border p-2' type="file" id="myFile" name="filename" />
                    </div>
                    <button className='border w-full mt-3 mb-8 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Add Inventory Manager</button>
                </form>
            </div>
        </div>
  )
}
