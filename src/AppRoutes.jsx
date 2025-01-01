import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Navbar from "./components/layout/Navbar"

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/products"} element={<Products />} />
      </Routes>
    </>
  )
}

export default AppRoutes