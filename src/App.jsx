import './App.css'
import './Pages/Home/Home.scss'
import './Components/Navbar/Navbar.scss'
import './Components/Footer/Footer.scss'
import Navbar from './Components/Navbar/Navbar'
import Router from './Routers/Router'
import Footer from './Components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from './Components/Toastify/Toastify'
import Loader from './Components/Loader/Loader'
import { useEffect, useState } from 'react'
import WhatsappIcon from './Components/WhatsappIcon'

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
      <WhatsappIcon />
    </>
  )
}

export default App
