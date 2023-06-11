import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import ProductDatails from '../Pages/ProductDatails';
import Checkout from '../Pages/Checkout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import AllProducts from '../admin/AllProducts';
import AddProducts from '../admin/AddProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import StripeContainer from '../components/StripeContainer';
import PaymentScreen from '../Pages/PaymentScreen';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="shop/:id" element={<ProductDatails/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path='payment' element={<StripeContainer/>}/>
        <Route path='/*' element={<ProtectedRoute/>}>
            <Route path='checkout' element={<Checkout/>} />
            {/* <Route path='payment-screen' element={<PaymentScreen/>} /> */}
            {/* <Route path='dashboard/all-products' element={<AllProducts/>} />
            <Route path='dashboard/add-product' element={<AddProducts/>} />
            <Route path='dashboard/users' element={<Users/>} /> */}
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
    </Routes>
};

export default Routers;