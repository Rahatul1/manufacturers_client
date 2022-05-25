import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="grid justify-start">
            <div className="drawer drawer-mobile">
                <input id="manufacture-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Welcome to manufacture</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="manufacture-bar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Add a Review</Link></li>

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;