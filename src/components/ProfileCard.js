import React from 'react'
import banner from './images/bg-pattern-card.svg'
import pic from './images/image-victor.jpg'

const ProfileCard = ({ name, role }) => {
    return (
        <div className='m-2'>
            <div className='max-h-sm max-w-sm bg-white mx-auto my-auto rounded-lg overflow-hidden'>
                <div className=''>
                    <img className='top-0 z-10' src={banner} alt=''></img>
                </div>
                <div className='relative'>
                    <img className='z-0 mx-auto mt-[-45px] rounded-full w-48 border-[5px] border-white' src="https://indiadailydigital.com/wp-content/uploads/2021/11/Hritik-Roshan-4.jpg" alt=''></img>
                </div>
                <div className='flex-col'>
                    <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>{name}</h2>
                    <hr className='w-24 mx-auto m-2' />
                    <h2 className='text-center font-main text-[14px] mt-[10px]'>{role}</h2>
                    <div className='border mt-[16px]'></div>
                    <div className='flex flex-row justify-between pt-3 pb-3'>
                        <div className='flex-col m-auto'>
                            <button className='flex w-32 border-2 rounded-lg p-2 bg-gray-100 hover:bg-green-500 text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg></button>
                        </div>
                        <div className='flex-col m-auto'>
                            <button className='border w-32 rounded-lg p-2 bg-gray-100 hover:bg-red-600 text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard