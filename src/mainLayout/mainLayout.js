import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import {Header} from '../Components/Header/Header'

function MainLayout() {
  return (
    <>
     <header>
        <Header />
     </header>

     <main>
        <Outlet />
     </main>

     <footer>
        <Footer />
     </footer>

    </>
  )
}

export default MainLayout