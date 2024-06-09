import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/views/home/Home'
import Router from './utils/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <Router />
    </div>
  )
}

export default App
