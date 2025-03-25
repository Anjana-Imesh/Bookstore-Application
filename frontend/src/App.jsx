import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import CustomerInventory from './pages/CustomerInventory';
import CustomerOrder from './pages/CustomerOrder';
import AdminOrder from './pages/AdminOrder';
import AdminDeleteOrder from './pages/AdminDeleteOrder';
import AdminEditOrder from './pages/AdminEditOrder';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/books/AdminInventory" element={<AdminInventory />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/CustomerInventory" element={<CustomerInventory />} />
        <Route path="/orders/CustomerPutOrders" element={<CustomerOrder />} />
        <Route path="/orders/AdminViewOrders" element={<AdminOrder />} />
        <Route path="/orders/AdminDeleteOrder/:id" element={<AdminDeleteOrder />} />
        <Route path="/orders/AdminEditOrder/:id" element={<AdminEditOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path = "/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path = "/AdminDashboard" element={<AdminDashboard />}></Route>
      </Routes>
    
  );
};

export default App;
