import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCaretForward, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { CLOUD_SERVICES, CYBER_SECURITY, DIGITAL_MARKETING, NAV_DATA, SEO, SIGN_IN, SOFTWARE_DEVELOPMENT, TECHNOLOGY, WEB_DEVELOPMENT, graphic_designing } from './NAV_DATA';
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import Logo from '../Logo';
import Button from '../Button/Button';
import { MdNotificationAdd } from 'react-icons/md';


export default function Navbar() {

    const navHideShow = useRef();
    const [overlayNav, setOverlayNav] = useState(false)


    const navToggle = () => {
        navHideShow.current.classList.toggle("responsiveNavbarClose");
    }


    const rotateSVG = () => {
        gsap.to(".left h2", {
            color: "#5f29b7"
        });
        gsap.to(".left h1", {
            color: "#5f29b7"
        });
    }
    const reverseRotateSVG = () => {
        gsap.to(".left h2", {
            color: "white"
        });
        gsap.to(".left h1", {
            color: "white"
        });
    }


    return (
        <>
            <nav>
                <div className="main">
                    <Logo />
                    <div className="right">
                        <ul>
                            <li className='servicesDropDown'><NavLink to="/">Home</NavLink></li>
                            <li className='servicesDropDown'><NavLink to="/about">About Us</NavLink></li>
                            <div>
                                <li className='servicesDropDown'><NavLink to="/services">Service</NavLink>
                                    <ul>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/web-development">Web Development <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    WEB_DEVELOPMENT.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/digital-marketing">Digial Marketing<IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    DIGITAL_MARKETING.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/seo">SEO <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    SEO.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/graphic-designing">Graphic Designing <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    graphic_designing.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/cyber-security">Cyber Security <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    CYBER_SECURITY.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title} <span>....</span></Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/cloud-services">Cloud Services  <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    CLOUD_SERVICES.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}<span>.</span> </Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/software-development">Software Development <span>...</span> <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    SOFTWARE_DEVELOPMENT.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='sub-dropdown'>
                                            <Link to="/services/technology-training">Technology Training <span>...</span> <IoCaretForward /></Link>
                                            <div className="sub-div">
                                                {
                                                    TECHNOLOGY.map(({ title, path }, index) => (
                                                        <Link key={index} to={path}>{title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </ul>
                                </li>
                                <IoIosArrowDown className='main-arrow' />
                            </div>
                            {/* <li className='servicesDropDown'><NavLink to="/partners">Partners</NavLink></li> */}
                            <li className='servicesDropDown'><NavLink to={NAV_DATA[3].navPath}>{NAV_DATA[3].navTitle}</NavLink></li>
                            <li className='servicesDropDown'><NavLink to="/contactus">ContactUs</NavLink></li>
                            {/* <li className='servicesDropDown'><NavLink to="/pricing">Pricing</NavLink></li> */}
                            <div className='notificationIcon'>
                                <MdNotificationAdd id='notificationIcon' />
                            </div>
                        </ul>
                        <Link to={SIGN_IN.signPath}>
                            <button className="button">
                                <span>{SIGN_IN.signTitle}   <i> .</i>
                                    <svg width="25" height="10" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <   path d="M1 5L23.3333 5M23.3333 5L18.3333 0.999999M23.3333 5L19.3333 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="navToggle" >
                        {
                            !overlayNav &&
                            <FaBars onClick={() => {
                                setOverlayNav(true),
                                    navToggle()
                            }
                            } />
                        }
                        {
                            overlayNav &&
                            <IoClose onClick={() => {
                                setOverlayNav(false),
                                    navToggle()
                            }
                            } />
                        }
                    </div>

                </div>
            </nav>
            <div className="overlayclick">
                <div className="responsiveNavbar responsiveNavbarClose" ref={navHideShow}>
                    <div className="main">
                        <div className="up">
                            <ul>
                                {
                                    NAV_DATA.map(({ navPath, navTitle }, index) => (
                                        <NavLink key={index} onClick={() => {
                                            setOverlayNav(false),
                                                navToggle()
                                        }
                                        } to={navPath}>{navTitle}</NavLink>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link

                            onClick={() => {
                                setOverlayNav(false),
                                    navToggle()
                            }}
                            to='/signin'>
                            <button >
                                {SIGN_IN.signTitle}
                            </button>
                        </Link>
                    </div>
                </div>
                {
                    overlayNav && <div onClick={() => {
                        setOverlayNav(false),
                            navToggle()
                    }
                    }
                        className="overlay"></div>
                }
            </div>
        </>
    )
}
