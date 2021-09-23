import React from "react"
import Header from "./Header"
import {GlobalStyle} from './styles/GlobalStyle'
import Footer from '../components/Footer'


const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle />
      <Header  />
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
