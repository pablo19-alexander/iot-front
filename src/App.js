import React from 'react'
import Aside from './components/NavBar/Aside'
import Home from './components/Content/Home'
import About from './components/Content/About'
import Footer from './components/Footer/Footer'
import Header from './components/NavBar/Header'
// userCrud
import UserList from './components/cruds/UserCrud/UserList'
import UserUpdate from './components/cruds/UserCrud/UserUpdate'
import UserCreate from './components/cruds/UserCrud/UserCreate'
//userDriver
import DriverList from './components/cruds/DriverCrud/DriverList'

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
            {/* // route of userCrud */}
            <Route path="/UserList" element={<UserList />} />
            <Route path="/UserUpdate" element={<UserUpdate />} />
            <Route path="/UserCreate" element={<UserCreate />} />

            {/* // route of userCrud */}
            <Route path="/DriverList" element={<DriverList />} />

        </Routes>
      </div>
      <Footer/>
    </>
  );
}