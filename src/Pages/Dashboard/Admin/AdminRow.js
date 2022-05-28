import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    // const [deletorder, setDeleteOrder] = useState([])

    const handleDelete = () => {
        fetch(`https://infinite-castle-74205.herokuapp.com/purchase/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                if (data.deletedCount) {
                    toast.success(`Order: ${user?.email} is deleted`)
                    refetch();
                }
            })
    }


    const makeadmin = () => {
        fetch(`https://infinite-castle-74205.herokuapp.com/user/${email}`, {
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
                <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeadmin}>Make Admin</button>}</td>
                <td><button onClick={() => handleDelete()} className="btn btn-xs text-red-500">Remove</button></td>
            </tr>
        </>
    );
};

export default AdminRow;