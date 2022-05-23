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
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>MinOrderQuantity: ${minOrderQuantity}</p>
                    <p>stock: ${stock}</p>
                    <p>stock: ${discription}</p>
                    <div className="card-actions">
                        <Link to="/Purchase"><button className="btn btn-secondary">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;