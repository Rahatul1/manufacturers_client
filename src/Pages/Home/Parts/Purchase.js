import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import useParts from '../../Hooks/useParts';
import Lodding from '../../Shared/Lodding';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [parts, setParts] = useState({});
    const [btndisabled, setBtnDisabled] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:4000/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setParts(data)
            })
    }, [id]);



    const handleBooking = (event) => {
        event.preventDefault();
        const booking = {
            orderId: parts._id,
            price: parts.price,
            minOrderQuantity: parts.minOrderQuantity,
            available: parts.stock,
            displayName: user.displayName,
            email: user.email,
            name: event.target.name.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            quantity: event.target.quantity.value
        }
        fetch('http://localhost:4000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('add product')
            })
    }
    if (loading) {
        return <Lodding></Lodding>
    }

    const handleChange = (event) => {
        const quantity = event.target.value;
        if (quantity >= parts.minOrderQuantity && quantity <= parts.stock) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true);
        }
    }


    return (
        <>
            <div className="justify-center mt-5">
                <div className="cols-1">
                    <h2 className="card-title justify-center text-3xl text-accent mb-5">Your item</h2>
                    <div className="hero  bg-gray-100 rounded">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={parts?.image} alt="" className="max-w-sm rounded-lg w-80 shadow-2xl" />
                            <div>
                                <h2 className="text-2xl">{parts?.name}</h2>
                                <p><b>Price:</b> {parts?.price}/pcs</p>
                                <p><b>Available Stock: </b>{parts?.stock}</p>
                                <p><b>Minimun Order:</b> {parts?.minOrderQuantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cols-1 py-16">
                    <h2 className="card-title justify-center text-3xl text-accent pb-2">Purchase Now Your Item</h2>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 justify-items-center bg-gray-100 py-5">
                        <input type="text"
                            name="displayName"
                            disabled
                            value={user?.displayName}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="email"
                            disabled
                            value={user?.email}
                            name="email"
                            className="input input-bordered w-full max-w-xs" />
                        <input type="text"
                            disabled
                            value={parts?.name}
                            name="name"
                            placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text"
                            name="address"
                            placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="phone"
                            placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            onChange={handleChange}
                            name="quantity"
                            placeholder="quantity" className="mx-3 input input-bordered w-full max-w-xs" />

                        <input
                            disabled={btndisabled}
                            className="mt-4 w-full max-w-xs w-50 mx-auto btn btn-dark"
                            value="Purchase Booked"
                            type="submit"
                        />
                    </form>
                </div>
            </div >
        </>
    );
};

export default Purchase;