import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import Home from '../pages/views/home/Home'
import Login from '../pages/auth/Login'
import ProductsPage from '../pages/views/products/ProductsPage'

const Router = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Wrapper Page={<Home />} />} />
      <Route path='/products' element={<Wrapper Page={<ProductsPage />} />} />
    </Routes>
  )
}

export default Router
