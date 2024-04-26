import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Error from '../Pages/Error/Error'
import { NAV_DATA } from '../Components/Navbar/NAV_DATA'
import SignIn from '../Pages/SignIn/SignIn'
import Partners from '../Pages/Partners/Partners'
import Pricing from '../Pages/Pricing/Pricing'
import Services from '../Pages/Services/Services'
import WebDevelopment from '../Pages/Services/WebDevelopment'
import DigitalMarketing from '../Pages/Services/DigitalMarketing'
import CyberSecurity from '../Pages/Services/CyberSecurity'
import CloudeServices from '../Pages/Services/CloudeServices'
import SoftwareDevelopment from '../Pages/Services/SoftwareDevelopment'
import TechnologyTaning from '../Pages/Services/TechnologyTaning'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path={NAV_DATA[0].navPath} element={<Home />} />
                <Route path={NAV_DATA[1].navPath} element={<About />} />
                <Route path={NAV_DATA[2].navPath} element={<Partners />} />
                <Route path={NAV_DATA[3].navPath} element={<ContactUs />} />
                {/* <Route path={NAV_DATA[4].navPath} element={<Pricing />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/cloud-services" element={<CloudeServices />} />
                <Route path="/software-development" element={<SoftwareDevelopment />} />
                <Route path="/technology-training" element={<TechnologyTaning />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}
