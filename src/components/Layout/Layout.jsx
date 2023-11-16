import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routers from '../../routers/Routers.js'
import HeaderTop from '../UI/HeaderTop.jsx'


const Layout = () => {
  return (
    <>
    <HeaderTop/>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout