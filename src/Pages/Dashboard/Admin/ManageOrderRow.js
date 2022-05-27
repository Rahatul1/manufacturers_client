import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteOrder }) => {

    const { email, name, address, quantity } = order;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-primary btn-xs">Shipping</button></td>
                <td>
                    <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" className="btn btn-xs modal-button btn-error">Delete Item</label>
                </td>
            </tr>
        </>
    );
};

export default ManageOrderRow;