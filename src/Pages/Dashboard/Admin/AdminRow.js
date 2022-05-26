import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    console.log(user)

    const makeadmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made an admin')
                    refetch()
                }
            })
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeadmin}>Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove</button></td>
            </tr>
        </>
    );
};

export default AdminRow;