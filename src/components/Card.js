import React from 'react'

export default function Card({ title, image }) {
    return (

        // <div className="w-60 rounded overflow-hidden shadow-lg ml-4 mr-4 mb-6 pr-0 pl-0 col-lg-3 col-md-4 col-sm-6">
        //     <div className="w-64 overflow-hidden bg-cover bg-no-repeat pr-2">
        //         <img
        //             src="https://media.istockphoto.com/id/1136834574/photo/watzmann-in-alps-dramatic-reflection-at-sunset-national-park-berchtesgaden.jpg?s=612x612&w=0&k=20&c=TpbhKprAFth2Lss7ZCiK7R4d2N-YKt0d9Kh3BSpg9eI="
        //             className="w-64 transition duration-300 ease-in-out hover:scale-110"
        //             alt="Sunset In Mountains" />
        //     </div>
        //     <div className="">
        // <a href="/">
        //     <h6 class="pt-2 pb-2 pl-20 text-center flex font-bold tracking-tight text-2xl text-black dark:text-gray-900 bg-gray-300 hover:bg-green-500">Update
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 pl-2">
        //             <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        //         </svg>

        //     </h6>
        // </a>

        //         <a href="/">
        //             <h6 class="pt-2 pb-2 pl-24 text-center flex font-bold tracking-tight text-2xl text-black dark:text-gray-900 bg-white-500 hover:bg-red-600 ">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 pl-2">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        //                 </svg>
        //             </h6>
        //         </a>

        //     </div>
        //     <div>

        //     </div>
        // </div>


        <div className='py-5 mx-10'>
            <div className='rounded border-2 border-gray-200 overflow-hidden shadow-[0px_20px_20px_10px_#e2e8f0] max-w-sm'>
                <div className='flex justify-between overflow-hidden bg-cover bg-no-repeat'>
                    <img
                        src={image}
                        className="w-auto transition duration-300 ease-in-out hover:scale-110"
                        alt="Sunset In Mountains" />
                </div>
                <a href="/" className='pt-2 pb-2 flex font-bold tracking-tight text-xl text-black dark:text-gray-900 bg-gray-300 hover:bg-green-500'>
                    <p className='mx-auto flex'>{title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg></p>
                </a>
                <a href="/" className='py-2 text-center flex font-bold tracking-tight text-2xl text-black dark:text-gray-900 bg-white-500 hover:bg-red-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </a>
            </div>
        </div >
    )
}


