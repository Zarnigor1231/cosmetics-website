import React from 'react'
import { Outlet } from 'react-router'
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
     </footer>

    </>
  )
}

export default MainLayout