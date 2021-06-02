import React from 'react'
import { Table } from '../../components/Table'

export const Users = () => {
    const columnTitles = [
        "title 1",
        "title 2",
        "title 3",
        "title 4",
        "title 5"
    ];

    
    const items = [
        {
            id: 1,
            name: "Item super cool para enseñar todo el conocimiento que me cargo papirrin",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: false,
        },
        {
            id: 2,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        },
        {
            id: 3,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        },
        {
            id: 4,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        }
    ]

    return (
        <div>
            <h1 className="pb-4">Users</h1>
            <Table cols={columnTitles} rows={items} />
        </div>
    )
}
