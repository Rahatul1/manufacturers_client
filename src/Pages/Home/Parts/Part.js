import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, price, minOrderQuantity, stock, discription, image } = part;
    return (
        <div className="">
            <div className="card w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Parts" className="rounded-xl" />
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title">{name}</h2>
                    <p><b>Price:</b> ${price}</p>
                    <p><b>MinOrderQuantity:</b> {minOrderQuantity}</p>
                    <p><b>stock:</b> {stock}</p>
                    <p><b>discription:</b> {discription}</p>
                    <div className="card-actions pt-5">
                        <Link to="/Purchase"><button className="btn btn-secondary">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;