import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NAV_DATA } from '../Navbar/NAV_DATA';
import { FiYoutube } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import Logo from '../Logo';



export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="main">
                    <div className="first">
                        <Logo />
                        <h6>Get a free consultation by registering now.</h6>
                        <p>copyrights © 2024  ezbrand builders  solution. All right reserved </p>
                    </div>
                    <div className="second">
                        <p>We are in social networks</p>
                        <div className="links">
                            <Link to="https://www.facebook.com/ez.brandbuilders" target='_blank' ><RiFacebookCircleLine /></Link>
                            <Link to="https://www.instagram.com/ez.brandbuilders/ " target='_blank'><FaInstagram /></Link>
                            <Link to="https://www.linkedin.com/company/ez-brand-builders/ " target='_blank'><AiOutlineLinkedin /></Link>
                            <Link to="https://whatsapp.com/channel/0029Va7ENGAFcow2jWwEpg2B" target='_blank'><FaWhatsapp /></Link>
                            <Link to="https://www.youtube.com/ez.brandbuilders" target='_blank'><FiYoutube /></Link>
                        </div>
                        <NavLink to="mailto:info@ezbrandbuilders.com ">info@ezbrandbuilders.com</NavLink>
                    </div>
                    <div className="third">
                        <h1>Documents</h1>
                        <ul>
                            <li><NavLink>Terms of use</NavLink></li>
                            <li><NavLink>Privacy Policy</NavLink></li>
                            <li><NavLink>Referral Agreement</NavLink></li>
                            <p>Referral Agreeme</p>
                        </ul>
                    </div>
                    <div className="forth">
                        <h1>Short Links</h1>
                        <ul>
                            {
                                NAV_DATA.map(({ navTitle, navPath }, index) => (
                                    <li key={index}><NavLink to={navPath}>{navTitle}</NavLink></li>
                                ))
                            }
                            <p>Referral Agreem</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
