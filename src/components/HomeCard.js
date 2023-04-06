import React from 'react';
import '../App.css';

export default function HomeCard({ title, path }) {
    return (
        <div>
            {/* <div className='container w-fit shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded overflow-hidden m-6 p-8 col-lg-3 col-md-6 col-sm-12'>
                <a href={path} class="block w-56 bg-white border border-gray-900 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-sm transition duration-300 ease-in-out hover:scale-110">
                    <div className='flex justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-9 w-36 h-36 bg-gray">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='bg-gray-500'>
                        <h6 class="text-center flex mb-2 p-2 font-bold tracking-tight text-2xl text-white dark:text-gray-900">{title.toUpperCase()}</h6>
                    </div>
                </a>
            </div> */}
                <div className='py-10'>
                    <div className='mx-6 hover:bg-white-200 py-10 px-10 rounded overflow-hidden shadow-lg max-w-sm w-fit shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] container'>
                        <a href={path} class="block bg-white border border-gray-900 rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-sm transition duration-300 ease-in-out hover:scale-110">
                            <div className='flex justify-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className='bg-slate-500 hover:bg-black'>
                                <h6 class="text-center flex mb-2 p-2 font-bold tracking-tight text-2xl text-white dark:text-gray-900">{title.toUpperCase()}</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    )
}
