import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const imagesKey = "5a993d703b11eb468bb0957665eaf634";

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagesKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const parts = {
                        image: img,
                        name: data.name,
                        price: data.price,
                        discription: data.discription,
                        minOrderQuantity: data.minOrderQuantity,
                        stock: data.stock,
                    }
                    // send to your database 
                    fetch('https://infinite-castle-74205.herokuapp.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(parts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success(' Added Product successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to Added Product');
                            }
                        })

                }

            })
    }


    return (
        <div className="grid">
            <h2 className="text-2xl text-accent text-center">Add Product</h2>
            <div className="cols-1 pl-28">
                <h2 className="card-title justify-center text-3xl text-accent">Purchase Now Your Item</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid  gap-5 pt-5">
                    <input type="text"
                        required
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")} />
                    <input type="number"
                        required
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price")}
                    />
                    <input type="number"
                        required
                        placeholder="Min Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minOrderQuantity")}
                    />
                    <input type="number"
                        required
                        placeholder="My Stock"
                        className="input input-bordered w-full max-w-xs"
                        {...register("stock")}
                    />
                    <textarea id=""
                        placeholder="discription"
                        className="input input-bordered w-full max-w-xs"
                        cols="30"
                        rows="10"
                        {...register("discription")} />
                    <input
                        type="file"
                        required
                        className="input input-bordered w-full max-w-xs"
                        {...register("image")}
                    />
                    <input
                        className="w-50 mx-auto btn btn-dark"
                        value="Add Item"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;