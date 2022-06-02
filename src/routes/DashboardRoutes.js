import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../components/Detail'
import Home from '../components/Home'
import Info from '../components/Info'
import NavBar from '../components/NavBar'

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes