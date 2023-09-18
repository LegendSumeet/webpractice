import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const layout = ({children}:{children : React.ReactNode}) => {
  return (
    <>
    <NavBar></NavBar>
    {children}
    <Footer></Footer>
    </>
  )
}

export default layout