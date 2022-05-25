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
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Myprofile />}></Route>
          <Route path="review" element={<Addreview />}></Route>
          <Route path="orders" element={<MyOrders />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
