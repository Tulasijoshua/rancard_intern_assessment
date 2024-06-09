import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import Home from '../pages/views/home/Home'
import Login from '../pages/auth/Login'
import ProductsPage from '../pages/views/products/ProductsPage'
import OrderPage from '../pages/views/order/OrderPage'
import Report from '../pages/views/report/Report'

const Router = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Wrapper Page={<Home />} />} />
      <Route path='/products' element={<Wrapper Page={<ProductsPage />} />} />
      <Route path='/orders' element={<Wrapper Page={<OrderPage />} />} />
      <Route path='/report' element={<Wrapper Page={<Report />} />} />
    </Routes>
  )
}

export default Router
