import React from 'react';
import { toast } from 'react-toastify';
import useParts from '../../Hooks/useParts';

const ManageProduct = () => {
    const [parts, setParts] = useParts([])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
            const url = `https://infinite-castle-74205.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = parts.filter((product) => product._id !== id);
                    setParts(remaining);
                    toast.success("Delete Success");
                });
        }
    };
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table w-11/12">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Nmae</th>
                            <th>Price /psc</th>
                            <th>Min Order</th>
                            <th>Stock</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <tr className="border-2 rounded-lg">
                                <th>{index + 1}</th>
                                <td><img className="w-48" src={part.image} alt="" /></td>
                                <td>{part.name}</td>
                                <td>{part.price}</td>
                                <td>{part.minOrderQuantity}</td>
                                <td>{part.stock}</td>
                                <td><button onClick={() => handleDelete(parts._id)} className="btn btn-xs">delete Product</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;

/* <div className="text-center">
                    <Link to="/addItem">
                        <button className="btn btn-dark mb-5">Add new item</button>
                    </Link>
                </div> */