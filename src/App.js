import React from 'react'
import { Routes, Route } from 'react-router-dom'


import NavbarComponent from './Components/NavbarComponent'
import Auth from './AuthComponents/auth';
// pages
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Services from './Pages/Services';
import Pricing from "./Pages/Pricing";
import Contract from "./Pages/Contract"
import SignIn from './AuthComponents/SignIn';



const App = () => {

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<Auth />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contract" element={<Contract />} />
        </Route>

      </Routes>


    </div>
  )
}

export default App