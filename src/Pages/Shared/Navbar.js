import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Lodding from './Lodding';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    // log out
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    // lodding
    if (loading) {
        return <Lodding></Lodding>
    }
    return (
        <div>
            <div className="navbar bg-neutral ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            <li><Link to="/parts">Parts</Link></li>
                            <li><Link to="/review">Review</Link></li>
                            <li><Link to="/">Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl w-28 "><img src="https://i.ibb.co/h8dfxCP/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-start hidden lg:flex text-white">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <li>{user ? <button onClick={logout} className="btn btn-accent btn-sm">Sign Out</button> : <Link to="/login" className="btn btn-secondary">Login</Link>}</li>
            </div>

        </div>
    );
};

export default Navbar;
