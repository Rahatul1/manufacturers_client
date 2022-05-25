import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useParts from '../../Hooks/useParts';


const Purchase = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)
    const [parts, setParts] = useParts({});


    useEffect(() => {
        fetch(`http://localhost:4000/parts/${id}`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [id, setParts]);

    // dalibary
    const onSubmit = (data) => {
        console.log(user, data)
        const url = `http://localhost:4000/purchase`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Add Succesfully");
            });
    };

    return (
        <div className="flex justify-center mt-5">
            <div className="cols-1">
                <h2 className="card-title justify-center text-3xl text-accent mb-5">Your item</h2>
                <div className="hero  bg-neutral text-white rounded">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={parts.image} alt="" className="max-w-sm rounded-lg w-80 shadow-2xl" />
                        <div>
                            <h2 className="text-2xl">{parts.name}</h2>
                            <p><b>Price:</b> {parts.price}/pcs</p>
                            <p><b>Available Stock: </b>{parts.stock}</p>
                            <p><b>Minimun Order:</b> {parts.minOrderQuantity}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cols-1 pl-28">
                <h2 className="card-title justify-center text-3xl text-accent">Purchase Now Your Item</h2>
                <form className="grid mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        readOnly
                        value={user.displayName}
                        className="mb-5 border p-2 rounded"
                        {...register("displayName")}
                    />
                    <input
                        readOnly
                        value={user.email}
                        className="mb-5 border p-2 rounded"
                        {...register("email")}
                    />
                    <input
                        required
                        placeholder="Address"
                        className="mb-5 border p-2 rounded"
                        type="text"
                        {...register("address")}
                    />
                    <input
                        required
                        placeholder="Phone"
                        className="mb-5 border p-2 rounded"
                        type="text"
                        {...register("phone")}
                    />
                    <input
                        required
                        placeholder="Buy Quantity"
                        className="mb-5 border p-2 rounded"
                        type="number"
                        {...register("quantity")}
                    />
                    <input
                        className="w-50 mx-auto btn btn-dark mt-3"
                        value="Add Item"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Purchase;