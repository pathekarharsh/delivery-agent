import React, { useState } from 'react';
import SearchBar from './SearchBar';



export default function Nav() {
    let Links = [
        { name: "Category", link: "/" },
        { name: "Products", link: "/" },
        { name: "Delivery", link: "/" },
        { name: "Orders", link: "/" },
        { name: "Inventory", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-3 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>

                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <i class="fa-solid fa-wheat"></i>
                    </span>
                    Agriculture


                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                        <li key="Home" className="md:ml-8 text-xl md:my-0 my-7">
                            <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Home
                            </a>
                        </li>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='justify-center pd:pl-2 md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}




