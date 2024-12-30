import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import SideBar from './components/SideBar'
import Layout from './Layout'
import WebService from './pages/WebService'
import AppService from './pages/AppService'
import SoftwareService from './pages/SoftwareService'

function App() {
  return (
    <>
    <Router>
      <div className='flex min-h-screen'>
        <SideBar />
        <div className='flex-1 p-4'>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/webservice' element={<WebService />} />
            <Route path='appservice' element={<AppService />} />
            <Route path='softwareservice' element={<SoftwareService />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
