import React from 'react'

export const Row = ({ cells }) => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            {Object.keys(cells).map((keyName, i) => {
                return <td key={i} className="py-3 px-6 text-left whitespace-nowrap">{cells[keyName]}</td>
            })}
        </tr>
    )
}
