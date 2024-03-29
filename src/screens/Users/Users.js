import React from 'react'
import { Table } from '../../components/Table/Table';
import { useFetch } from '../../hooks/useFetch';

export const Users = () => {
    const columnTitles = [
        "First Name",
        "Middle Name",
        "Last Name",
    ];

    const { data } = useFetch("http://localhost:5000/api/v1/inmates");
    return (
        <div>
            <h1 className="pb-4">Users</h1>
            {data === null ?
                <h2>Loading ...</h2> :
                <Table headers={columnTitles} rows={data.data} />
            }
        </div>
    )
}
