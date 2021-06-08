import React from 'react'

export const Table = ({ rows, columnTitles }) => {
    return (
        <div>
            <table className="w-full table-auto overflow-x-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        {columnTitles.map((title, i, array) => {
                            return <th className={
                                `py-3 px-6 text-left 
                                ${i === 0 && "rounded-tl-lg"} 
                                ${i === array.length - 1 && "rounded-tr-lg"}`}>
                                {title}</th>
                        })}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        rows.map((item) => {
                            return <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap font-semibold whitespace-pre-wrap">{item.name}</td>
                                <td className="py-3 px-6 text-center whitespace-nowrap flex justify-center">
                                    <img className="rounded-full h-16 w-16 max-w-min" src={item.image} alt={item.name} />
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">${item.price}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{item.totalSales}</td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`select-none rounded-full py-1 px-2 text-xs font-semibold ${item.status ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"}`}>
                                        {item.status ? "Active" : "Inactive"}
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
