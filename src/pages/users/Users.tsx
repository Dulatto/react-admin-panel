import { GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';

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
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: true },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        age: 31,
        status: true,
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        age: 31,
        status: false,
    },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, status: true },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        age: null,
        status: true,
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: null,
        age: 150,
        status: false,
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        age: 44,
        status: true,
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        age: 36,
        status: true,
    },
    {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        age: 65,
        status: false,
    },
];
const Users = () => {
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
        </div>
    );
};
export default Users;
