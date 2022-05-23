import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        const purchase = {
            purchase: user.email,
            purchaseName: user.displayName,
            name: data.target.ProductName.value,
            phone: data.target.phone.value,
            address: data.target.address.value,
            quantity: data.target.quantity.value,
        }

        const url = "http://localhost:4000/purchase";
        fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(purchase),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast("Add Succesfully");
            });
    };
    return (
        <div className="card bg-base-100  shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl text-accent">Purchase Now</h2>
                <form className="grid justify-center" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        disabled
                        value={user.displayName}
                        className="mb-5 my-2 py-1 px-20 border-2"
                        {...register("name", { required: true, maxLength: 20 })}
                    />
                    <input
                        disabled
                        value={user.email}
                        placeholder="Enter Email"
                        className="mb-5 border-2 p-2"
                        {...register("email")}
                    />
                    <input
                        required
                        placeholder="Product Name"
                        className="mb-3 border-2 p-2"
                        type="text"
                        {...register("ProductName")}
                    />
                    <input
                        required
                        placeholder="Address"
                        className="mb-3 border-2 p-2"
                        type="text"
                        {...register("address")}
                    />
                    <input
                        required
                        placeholder="Number"
                        className="mb-3 border-2 p-2"
                        type="text"
                        {...register("number")}
                    />
                    <input
                        placeholder="Quantity"
                        className="mb-3 border-2 p-2"
                        type="number"
                        {...register("quantity")}
                    />
                    <input
                        className="card-actions justify-center btn"
                        value="Purchase Now"
                        type="submit"
                    />
                </form>
            </div>
            <div className="divider mx-40">-</div>
        </div>
    );
};

export default Purchase;