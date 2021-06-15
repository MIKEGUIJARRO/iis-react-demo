import React from 'react';
import { Table } from '../../components/Table/Table';
import { useFetch } from '../../hooks/useFetch';


export const Mail = () => {
    const columnTitles = [
        "First Name",
        "Middle Name",
        "Last Name",
        "Email",
    ];

    const { data } = useFetch("http://localhost:5000/api/v1/inmates/email");
    return (
        <div>
            <h1 className="pb-4">Mail</h1>
            {data === null ?
                <h2>Loading ...</h2> :
                <Table headers={columnTitles} rows={data.data} />
            }
        </div>
    )
}
