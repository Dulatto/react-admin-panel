import { GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import { Add } from '../../components/add/Add';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || '/noavatar.png'} alt="" />;
        },
    },

    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        type: 'string',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'phone',
        type: 'string',
        headerName: 'Phone',
        width: 200,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        type: 'string',
    },
    {
        field: 'verified',
        headerName: 'Verified',
        width: 150,
        type: 'boolean',
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) =>
    //         `${row.firstName || ''} ${row.lastName || ''}`,
    // },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    // const { isLoading, data } = useQuery({
    //     queryKey: ['allusers'],
    //     queryFn: () =>
    //         fetch('http://localhost:8800/api/users').then((res) => res.json()),
    // });
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            {/* {isLoading ? (
                'Loading...'
            ) : ( */}
            <DataTable slug="users" columns={columns} rows={userRows} />
            {/* )} */}
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    );
};
export default Users;
