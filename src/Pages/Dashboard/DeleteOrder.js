import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrder = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { name, _id: id } = deleteOrder;
    console.log(deleteOrder)

    const handleDelete = () => {
        fetch(`https://infinite-castle-74205.herokuapp.com/purchase/${id}`, {
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
                    toast.success(`Order: ${name} is deleted`)
                    setDeleteOrder(null)
                    refetch();
                }
            })
    }

    return (
        <div>
            <div>
                <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are You want to Delet ${name}</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <button onClick={() => handleDelete()} htmlFor="delete-modal" className="btn btn-xs btn-error">Delete</button>
                            <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancle</label>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DeleteOrder;