import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Purchases from './pages/Purchases'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import { useSelector } from 'react-redux'

function App() {
  const isLoading = useSelector((state) => state.isLoading)

  // console.log(isLoading)

  return (
    <HashRouter>
      <Navbar />
      {isLoading && <Loading />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </HashRouter>
  )
}

export default App
