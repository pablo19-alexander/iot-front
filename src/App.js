import React from 'react'
import Aside from './components/NavBar/Aside'
import Home from './components/Content/Home'
import About from './components/Content/About'
import Footer from './components/Footer'
import Header from './components/NavBar/Header'
import UserCrud from './components/cruds/UserCrud'
import DriverCrud from './components/cruds/DriverCrud'



import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      
      <Header/>
      <Aside/>
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/crud-user" element={<UserCrud />} />
            <Route path="/Driver-crud" element={<DriverCrud />} />

        </Routes>
      </div>
      <Footer/>
    </>
  )
}