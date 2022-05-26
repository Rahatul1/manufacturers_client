import React from 'react';
import { useQuery } from 'react-query'
import Lodding from '../../Shared/Lodding';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
        method: 'GET',
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()))

    if (isLoading) {
        return <Lodding />
    }

    // 

    return (
        <div>
            <h2>Make Admin: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AdminRow key={user._id} index={index} refetch={refetch} user={user}></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;