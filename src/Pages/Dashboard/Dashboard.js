import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="grid justify-start">
            <div class="drawer drawer-mobile">
                <input id="manufacture-bar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Welcome to manufacture</label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label htmlFor="manufacture-bar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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