import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import { useQuery } from 'react-query';
import Lodding from '../Shared/Lodding';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Profile from './Profile';


const Myprofile = () => {
    const [user, loading] = useAuthState(auth);
    //------------------------------------------

    const [profile, setMyOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch("http://localhost:4000/profileUpdated", {
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
                    console.log(data);
                    setMyOrder(data);
                });
        }
    }, [user, navigate])
    //----------------------------------------
    const handleUpdate = (event) => {
        event.preventDefault();
        const booking = {
            displayName: user.displayName,
            email: user.email,
            education: event.target.education.value,
            phone: event.target.phone.value,
            location: event.target.location.value,
            linkdin: event.target.linkdin.value
        }
        fetch('http://localhost:4000/profileUpdate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Updated Profile')
            })
    }

    if (loading) {
        return <Lodding></Lodding>
    }
    return (
        <>
            <div className="justify-center mt-5">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className="text-xl"><b>Name:</b> {user?.displayName}</h2>
                        <p><b>Email:</b> {user?.email}</p>
                        {
                            profile.map(p => <Profile profile={p}></Profile>)
                        }
                    </div>
                </div>
                <div className="cols-1 py-16">
                    <h2 className="card-title justify-center text-3xl text-accent pb-2">Updated Your Profile</h2>
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-5 justify-items-center rounded bg-gray-100 py-5">
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
                            name="education"
                            placeholder="Education" className="input input-bordered w-full max-w-xs" />
                        <input type="text"
                            name="location"
                            placeholder="Location/City" className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="phone"
                            placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="url"
                            name="linkdin"
                            placeholder="Linkdin Account Link" className="input input-bordered w-full max-w-xs" />
                        <input
                            className="w-1/2 mx-auto btn btn-dark"
                            value="Update"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Myprofile;