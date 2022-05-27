import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

import Lodding from '../Shared/Lodding';
import DeleteOrder from './DeleteOrder';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const [user] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:4000/purchase?email=${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(orders)
    if (isLoading) {
        return <Lodding />
    }

    return (
        <div>
            <h2 className="text-3xl text-accent text-center pb-5">My orders: {orders.length}</h2>

            <table className="table w-full pl-20">
                <thead>
                    <tr>
                        <th></th>
                        <th>Gmail</th>
                        <th>Purchase Product</th>
                        <th>Address</th>
                        <th>Buy quantity</th>
                        <th>Paid</th>
                        <th>Delete item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <OrderRow order={order} index={index} key={order._id} setDeleteOrder={setDeleteOrder}></OrderRow>)
                    }
                </tbody>
            </table>
            {
                deleteOrder && <DeleteOrder
                    setDeleteOrder={setDeleteOrder}
                    refetch={refetch}
                    deleteOrder={deleteOrder}
                ></DeleteOrder>
            }
        </div >
    );
};

export default MyOrders;