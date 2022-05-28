import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, price, minOrderQuantity, stock, discription, image } = part;

    const navigate = useNavigate();
    const navigatePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="bg-neutral text-white rounded-lg">
            <div className="card w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Parts" className="rounded-xl" />
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title">{name}</h2>
                    <p><b>Price:</b> ${price}/pcs</p>
                    <p><b>M.O.Q:</b> {minOrderQuantity}</p>
                    <p><b>stock:</b> {stock}</p>
                    <p><b>discription:</b> {discription}</p>
                    <div className="card-actions pt-5">
                        <button onClick={() => navigatePurchase(_id)} className="btn btn-secondary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;