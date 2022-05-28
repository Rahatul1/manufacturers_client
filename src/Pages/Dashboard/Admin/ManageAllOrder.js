import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Lodding from '../../Shared/Lodding';
import DeleteOrder from '../DeleteOrder';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrder = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://infinite-castle-74205.herokuapp.com/manageAllOrder`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Lodding />
    }
    return (
        <>
            <div>
                <h2 className="text-3xl text-accent text-center pb-5">Manage All Order {orders.length}</h2>
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
                            orders.map((order, index) => <ManageOrderRow order={order} index={index} key={order.id} setDeleteOrder={setDeleteOrder}></ManageOrderRow>)
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
        </>
    );
};

export default ManageAllOrder;