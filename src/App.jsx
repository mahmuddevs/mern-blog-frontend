import React, { useEffect } from 'react'
import { Outlet,useLocation } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App