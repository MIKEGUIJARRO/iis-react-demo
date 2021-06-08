import React from 'react'
import { Table } from '../../components/Table'
import { useFetch } from '../../hooks/useFetch';

export const Users = () => {
    const columnTitles = [
        "Id",
        "Task",
        "UserId",
        "Status",
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
    ];

    const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");
    console.log(data);
    return (
        <div>
            <h1 className="pb-4">Users</h1>
            {data === null ?
                <h2>Loading ...</h2> :
                <Table columnTitles={columnTitles} rows={data} />
            }


        </div>
    )
}
