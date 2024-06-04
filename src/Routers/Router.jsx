import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Error from '../Pages/Error/Error';
import { NAV_DATA } from '../Components/Navbar/NAV_DATA';
import SignIn from '../Pages/SignIn/SignIn';
import Partners from '../Pages/Partners/Partners';
import Pricing from '../Pages/Pricing/Pricing';
import Services from '../Pages/Services/Services';
import WebDevelopment from '../Pages/Services/WebDevelopment';
import DigitalMarketing from '../Pages/Services/DigitalMarketing';
import CyberSecurity from '../Pages/Services/CyberSecurity';
import CloudeServices from '../Pages/Services/CloudeServices';
import SoftwareDevelopment from '../Pages/Services/SoftwareDevelopment';
import TechnologyTaning from '../Pages/Services/TechnologyTaning';
import Seo from '../Pages/Services/Seo';
import GraphicDesigning from '../Pages/Services/GraphicDesigning';
import Blog from '../Pages/Blog/Blog';
import ServicesCardPages from '../Pages/Services/ServicesCardPages/ServicesCardPages';
import CreateAccount from '../Pages/CreateAccount/CreateAccount';
import SubBlog from '../Pages/Blog/SubBlog';

export default function Router() {
    const location = useLocation();

    return (
        <>
                <Routes location={location} key={location.pathname}>
                    <Route path={NAV_DATA[0].navPath} element={<Home />} />
                    <Route path={NAV_DATA[1].navPath} element={<About />} />
                    <Route path={NAV_DATA[2].navPath} element={<ContactUs />} />
                    <Route path={NAV_DATA[3].navPath} element={<Blog />} />
                    <Route path={NAV_DATA[4].navPath} element={<CreateAccount />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/sub-blog/:id" element={<SubBlog />} />
                    <Route path='/services'>
                        <Route path="web-development" element={<WebDevelopment />} />
                        <Route path="digital-marketing" element={<DigitalMarketing />} />
                        <Route path="cyber-security" element={<CyberSecurity />} />
                        <Route path="cloud-services" element={<CloudeServices />} />
                        <Route path="software-development" element={<SoftwareDevelopment />} />
                        <Route path="technology-training" element={<TechnologyTaning />} />
                        <Route path="graphic-designing" element={<GraphicDesigning />} />
                        <Route path="seo" element={<Seo />} />
                        <Route path="ServicesCardPages/:id" element={<ServicesCardPages />} />
                    </Route>
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </>
    );
}
