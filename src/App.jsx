import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin.jsx';
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser.jsx';
import { Toaster } from "react-hot-toast";

import Home from './pages/home/Home.jsx';
import Nopage from './pages/nopage/Nopage.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';
import Productinfo from './components/productInfo/ProductInfo.jsx';
import CartPage from './pages/cart/CartPage.jsx';
import Product from './pages/allProduct/Product.jsx';
import Signup from './pages/registration/Signup.jsx';
import Login from './pages/registration/Login.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AddProductPage from './pages/admin/AddProductPage.jsx';
import UpdateProductPage from './pages/admin/UpdateProductPage.jsx';
import MyState from './context/myState.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';


const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/*' element={<Nopage />}></Route>
          <Route path='/productinfo/:id' element={<Productinfo />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/category/:categoryname" element={<CategoryPage />} />

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />

          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />

        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App;
