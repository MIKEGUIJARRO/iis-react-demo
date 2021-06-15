import React from 'react'

export const Headers = ({ titles }) => {
    return (
        <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                {titles.map((title, i, array) => {
                    return <th key={i} className={
                        `py-3 px-6 text-left 
                                ${i === 0 && "rounded-tl-lg"} 
                                ${i === array.length - 1 && "rounded-tr-lg"}`}>
                        {title}</th>
                })}
            </tr>
        </thead>
    )
}
