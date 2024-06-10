import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import Home from '../pages/views/home/Home'
import Login from '../pages/auth/Login'
import OrderPage from '../pages/views/order/OrderPage'
import Report from '../pages/views/report/Report'
import Register from '../pages/auth/Register'
import { useSelector } from 'react-redux'
import ProductsPage from '../pages/views/products/ProductsPage'

const Router = () => {
    const location = useLocation();
    const {isAuthenticated} = useSelector((state) => state.auth);

    function Protected ({children}){
        useEffect(()=>{
          if(!isAuthenticated && !location.pathname.includes('login')){
            window.location.href = '/login'
          }
        }, [isAuthenticated])
          return children
      }

  return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Protected><Wrapper Page={<Home />} /></Protected>} />
            <Route path='/products' element={<Protected><Wrapper Page={<ProductsPage />} /></Protected>} />
            <Route path='/orders' element={<Protected><Wrapper Page={<OrderPage />} /></Protected>} />
            <Route path='/report' element={<Protected><Wrapper Page={<Report />} /></Protected>} />
        </Routes>
  )
}

export default Router
