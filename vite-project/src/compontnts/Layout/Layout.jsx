import React from 'react'
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
