import React from 'react'
import { Headers } from "./Headers";
import { Row } from "./Row";

export const Table = ({ rows, headers }) => {
    return (
        <div>
            <table className="w-full table-auto overflow-x-auto">
                <Headers titles={headers} />
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        rows.map((cells, i) => {
                            return <Row key={i} cells={cells}></Row>
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}