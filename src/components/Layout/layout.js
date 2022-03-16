import React from "react"
import Navbar from "../navbar"
import Footer from "../Footer/footer"

import "../../variables.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
