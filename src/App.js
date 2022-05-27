import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addreview from './Pages/Dashboard/Addreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Parts/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import 'react-toastify/dist/ReactToastify.css';
import ManageProduct from './Pages/Dashboard/Admin/ManageProduct';
import ManageAllOrder from './Pages/Dashboard/Admin/ManageAllOrder';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route >
        <Route path="purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <Dashboard />
        }>
          <Route index element={<Myprofile />}></Route>
          <Route path="review" element={
            <RequireAuth>
              <Addreview />
            </RequireAuth>
          }></Route>
          <Route path="payment/:payId" element={<Payment />}></Route>
          <Route path="orders" element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>}
          ></Route>
          <Route path="makeadmin" element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          }
          ></Route>
          <Route path="manageorder" element={
            <RequireAdmin>
              <ManageAllOrder />
            </RequireAdmin>
          }
          ></Route>
          <Route path="manageproduct" element={
            <RequireAdmin>
              <ManageProduct />
            </RequireAdmin>
          }
          ></Route>
          <Route path="addproduct" element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes >
      <ToastContainer />
    </div >
  );
}

export default App;
