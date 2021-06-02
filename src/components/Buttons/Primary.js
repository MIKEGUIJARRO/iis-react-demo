import React from 'react'

export const Primary = ({children}) => {
    return (
        <button className="px-4 py-2 rounded-lg transition 
        duration-300 ease-in-out focus:ring 
        focus:outline-none focus:ring-gray-400 font-semibold">
            <div>
                <h6>
                    {children}
                </h6>
            </div>
        </button>
    )
}
