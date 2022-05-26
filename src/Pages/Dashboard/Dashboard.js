import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto  bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {user && <>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Add a Review</Link></li>
                    </>}
                    <>
                        {admin && <>
                            <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageorder">Manage All Order</Link></li>
                            <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                            <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        </>}
                    </>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;