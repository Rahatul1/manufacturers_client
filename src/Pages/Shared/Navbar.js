import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/" className="btn btn-secondary">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;