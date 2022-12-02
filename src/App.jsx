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
import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'

function App() {
  const isLoading = useSelector((state) => state.isLoading)
  const [cart, setCart] = useState(false)
  const [modalShowed, setModalShowed] = useState(false)

  // console.log(isLoading)

  return (
    <HashRouter>
      <Navbar
        cart={cart}
        setCart={setCart}
        modalShowed={modalShowed}
        setModalShowed={setModalShowed}
      />

      {isLoading && <Loading />}

      <Routes>
        <Route
          path='/'
          element={
            <Home
              cart={cart}
              setCart={setCart}
              modalShowed={modalShowed}
              setModalShowed={setModalShowed}
            />
          }
        />
        <Route
          path='/login'
          element={<Login cart={cart} setCart={setCart} />}
        />
        <Route path='/signup' element={<SignUp setCart={setCart} />} />
        <Route
          path='/products/:id'
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path='/purchases'
            element={<Purchases cart={cart} setCart={setCart} />}
          />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  )
}

export default App
