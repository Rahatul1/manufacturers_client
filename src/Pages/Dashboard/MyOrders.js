import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/purchase?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrder(data);
                });
        }
    }, [user, navigate])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
            //
            const url = `http://localhost:4000/purchase/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = myOrder.filter((product) => product._id !== id);
                    setMyOrder(remaining);
                    toast("Delete Success");
                });
        }
    };


    return (
        <div>
            <h2 className="text-3xl text-accent text-center pb-5">My orders: {myOrder.length}</h2>
            {/* <div className="overflow-x-auto"> */}
            <table className="table w-full pl-20">
                <thead>
                    <tr>
                        <th></th>
                        <th>Gmail</th>
                        <th>Purchase Product</th>
                        <th>Address</th>
                        <th>Buy quantity</th>
                        <th>Paid</th>
                        <th>Delete item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrder.map((a, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{a.email}</td>
                            <td>{a.name}</td>
                            <td>{a.address}</td>
                            <td>{a.quantity}</td>
                            <td><button className="btn btn-primary btn-xs">Paid</button></td>
                            <td><button onClick={() => handleDelete(myOrder._id)} className="btn btn-primary btn-xs">Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            {/* </div> */}

        </div >
    );
};

export default MyOrders;