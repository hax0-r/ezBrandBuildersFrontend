import './App.css'
import './Pages/Home/Home.scss'
import './Components/Navbar/Navbar.scss'
import './Components/Footer/Footer.scss'
import Navbar from './Components/Navbar/Navbar'
import Router from './Routers/Router'
import Footer from './Components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from './Components/Toastify/Toastify'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
