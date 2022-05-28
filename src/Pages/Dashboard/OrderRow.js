import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const { email, name, address, quantity } = order;

    return (
        <>

            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>{quantity}</td>
                <td>
                    {(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-primary btn-xs">Paid Now</button></Link>}

                    {(order?.price && order?.paid) && <div>
                        <p><span className='text-success'>Paid</span></p>
                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                    </div>}
                </td>

                <td>
                    <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs modal-button btn-error">Delete Item</label>
                </td>
            </tr>
        </>
    );
};

export default OrderRow;