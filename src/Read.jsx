import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Read() {



    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://61b1f303c8d4640017aaf0a6.mockapi.io/data/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
    }

    const onDelete = (id) => {
        axios.delete(`https://61b1f303c8d4640017aaf0a6.mockapi.io/data/${id}`)
            .then(() => {
                getData();
            })
    }

    const getData = () => {
        axios.get(`https://61b1f303c8d4640017aaf0a6.mockapi.io/data/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>

                    </Table.Row>

                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>

                                <Link to='/update'>
                                    <Table.Cell>
                                        <button onClick={() => setData(data)}>Update</button>
                                        <button onClick={() => onDelete(data.id)}>Delete</button>
                                    </Table.Cell>
                                </Link>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}