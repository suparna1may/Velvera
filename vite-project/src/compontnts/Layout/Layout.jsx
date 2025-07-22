import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


function Layout({children}) {
 
  return (
    <>
    <Header></Header>
    
       {children}
     
    <Footer></Footer>
    </>
  )
}

export default Layout
