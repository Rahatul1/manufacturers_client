import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useParts from '../../Hooks/useParts';
import Lodding from '../../Shared/Lodding';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [parts, setParts] = useParts({});
    const { minOrderQuantity, name, price, stock, image } = parts;

    useEffect(() => {
        fetch(`http://localhost:4000/parts/${id}`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [id, setParts]);

    if (loading) {
        return <Lodding></Lodding>
    }

    const handleBooking = (event) => {
        event.preventDefault();
        const booking = {
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
                // if (data.success) {
                //     // toast.success(`Appointments seccess, ${minOrderQuantity} at ${stock}`)
                //     toast.success("Appointments seccess")
                // }
                // else {
                //     // toast.error(`You allready have an Appointment on: ${minOrderQuantity} at ${stock}`)
                //     toast.error("You allready have an Appointment on")
                // }
                // setParts(null);
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="cols-1">
                    <h2 className="card-title justify-center text-3xl text-accent mb-5">Your item</h2>
                    <div className="hero  bg-neutral text-white rounded">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image} alt="" className="max-w-sm rounded-lg w-80 shadow-2xl" />
                            <div>
                                <h2 className="text-2xl">{name}</h2>
                                <p><b>Price:</b> {price}/pcs</p>
                                <p><b>Available Stock: </b>{stock}</p>
                                <p><b>Minimun Order:</b> {minOrderQuantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="cols-1 pl-28">
                    <h2 className="card-title justify-center text-3xl text-accent">Purchase Now Your Item</h2>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 justify-items-center pt-5">
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
                            value={name}
                            name="name"
                            placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text"
                            name="address"
                            placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="phone"
                            placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="quantity"
                            placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                        <input
                            className="w-50 mx-auto btn btn-dark"
                            value="Purchase Booked"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;