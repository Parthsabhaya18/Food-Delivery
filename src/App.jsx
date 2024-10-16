import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar/'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Placeholder from './pages/placeHolder/Placeholder'
import Home1 from './pages/home/Home1'
import Cart from './pages/cart/Cart'
import Footer from './Footer/Footer'
import LoginPopUp from './component/LoginPopUp/LoginPopUp'
import ThankYou from './component/ThankYouPage/ThankYou'
const App = () => {

  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
        <Route path='/ThankYou' element={<ThankYou/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App