import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvide } from './context/AuthContext'







function App() {
  

  return (
    <>
    <AuthProvide>
    <Navbar/>
   <main className='min-h-screen max-w-7xl mx-auto px-6 py-8 font-primary'>
   
    <Outlet/>
    </main>
     
     
    </AuthProvide>
    
    </>
  )
}

export default App