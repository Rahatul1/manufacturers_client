import React from 'react';
import { useQuery } from 'react-query'
import Lodding from '../../Shared/Lodding';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://infinite-castle-74205.herokuapp.com/user', {
        method: 'GET',
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()))

    if (isLoading) {
        return <Lodding />
    }

    return (
        <>
            <div className="overflow-x-auto">
                <h2 className="text-3xl text-accent py-5 text-center bg-gray-100">Make Admin: {users.length}</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {
                            users.map((user, index) => <AdminRow key={user._id} index={index} refetch={refetch} user={user}></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MakeAdmin;