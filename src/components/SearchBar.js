import React from 'react';

export default function SearchBar() {
    return (
        <div className="flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 bg-gray-200 text-black-700 rounded-md focus:border-purple-700 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-gray-400 rounded-full">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    )
}
