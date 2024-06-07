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
import WhatsappIcon from './Components/WhatsappIcon'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>

      <Helmet>
        <title>EZ Brand Builders</title>
        <meta name='description' content='We provide top-tier IT services which your business needs. With expertise in Web Development, Digital Marketing, Cyber Security, Cloud Services, Software Development, Technology Trainig.Our expert team ensures efficiency and security for your operations.' />
      </Helmet>
      {/* <Loader /> */}
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
      <WhatsappIcon />
      <Footer />
    </>
  )
}

export default App
