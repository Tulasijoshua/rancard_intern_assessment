import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import Home from '../pages/views/home/Home'
import Login from '../pages/auth/Login'

const Router = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Wrapper Page={<Home />} />} />
    </Routes>
  )
}

export default Router
