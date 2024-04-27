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
                        {/* <Link to="/">
                            <svg width="60" height="40" viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M163.904 46.8424C166.047 55.3549 165.049 64.354 161.094 72.191C157.139 80.028 150.491 86.1782 142.368 89.5146C134.246 92.8511 125.193 93.1505 116.868 90.358C108.542 87.5655 101.502 81.868 97.0377 74.3094C104.871 70.3256 111.12 63.8036 114.765 55.8095C118.409 47.8154 119.233 38.822 117.101 30.2993C116.4 27.4947 115.382 24.7787 114.069 22.2033C115.867 21.4449 117.722 20.8269 119.616 20.3549C124.27 19.1748 129.112 18.9242 133.863 19.6174C138.614 20.3105 143.182 21.9338 147.304 24.3943C151.427 26.8548 155.024 30.1041 157.888 33.9561C160.752 37.8081 162.828 42.1872 163.997 46.8424H163.904Z" fill="white" />
                                <path d="M146.929 145.953C139.521 150.678 130.657 152.574 121.963 151.295C113.27 150.015 105.329 145.645 99.598 138.987C93.867 132.328 90.73 123.828 90.7624 115.044C90.7948 106.26 93.9945 97.7829 99.7745 91.1667C103.388 94.753 107.674 97.5919 112.387 99.521C117.099 101.45 122.146 102.432 127.238 102.409C132.331 102.387 137.369 101.361 142.064 99.3909C146.76 97.4206 151.02 94.5442 154.603 90.9264C158.121 94.8716 160.739 99.5344 162.275 104.592C163.811 109.649 164.229 114.979 163.499 120.214C162.769 125.449 160.909 130.462 158.048 134.906C155.186 139.351 151.392 143.12 146.929 145.953Z" fill="white" />
                                <path d="M47.794 160.703C41.0561 155.07 36.5749 147.199 35.1719 138.531C33.7689 129.864 35.538 120.982 40.155 113.512C44.772 106.043 51.9275 100.487 60.31 97.863C68.6924 95.2391 77.7401 95.7229 85.7947 99.2257C81.7966 107.047 80.5706 115.993 82.3172 124.602C84.0638 133.21 88.6796 140.972 95.4104 146.618C97.625 148.468 100.037 150.068 102.604 151.387C101.613 153.054 100.487 154.636 99.2382 156.119C96.1628 159.799 92.3921 162.836 88.1416 165.058C83.8912 167.28 79.2443 168.643 74.4666 169.068C69.6889 169.494 64.874 168.975 60.2974 167.539C55.7207 166.104 51.472 163.781 47.794 160.703Z" fill="white" />
                                <path d="M2.60001 71.5368C5.86548 63.4148 11.9419 56.7361 19.7217 52.7178C27.5016 48.6995 36.4669 47.6091 44.9838 49.6456C53.5006 51.682 61.0018 56.7096 66.1203 63.8121C71.2389 70.9145 73.6339 79.6188 72.8689 88.3387C64.1766 86.977 55.2796 88.6149 47.643 92.9826C40.0064 97.3503 34.0855 104.187 30.8555 112.368C29.7806 115.05 29.0174 117.847 28.581 120.704C23.4272 119.546 18.5851 117.286 14.3873 114.081C10.1895 110.875 6.73526 106.8 4.26177 102.134C1.78829 97.4686 0.354114 92.3231 0.0576919 87.0512C-0.23873 81.7792 0.609633 76.5056 2.54453 71.5923L2.60001 71.5368Z" fill="white" />
                                <path d="M73.738 0.540131C82.5778 0.934034 90.9738 4.52251 97.3659 10.6386C103.758 16.7547 107.711 24.9825 108.491 33.7928C109.271 42.6032 106.824 51.3969 101.605 58.5397C96.3865 65.6824 88.751 70.6884 80.1177 72.6274C78.6417 63.9659 74.2697 56.0612 67.7163 50.2056C61.1629 44.35 52.816 40.8901 44.0402 40.3914C41.1527 40.243 38.2576 40.4042 35.4045 40.872C35.2127 38.9497 35.1694 37.0155 35.275 35.0866C35.535 30.2991 36.7364 25.6097 38.8105 21.2866C40.8847 16.9635 43.7908 13.0914 47.3629 9.89157C50.935 6.69179 55.103 4.22708 59.6286 2.63836C64.1542 1.04963 68.9487 0.368051 73.738 0.632557V0.540131Z" fill="white" />
                            </svg>
                            <h1>Web Wise</h1>
                        </Link> */}

                        <Logo />
                        <h6>Get a free consultation by registering now.</h6>
                        <p>copyrights © 2024 <Link to={NAV_DATA[0].navPath}>ezbrand builders</Link>  solution. All right reserved</p>
                    </div>
                    <div className="second">
                        <p>We are in social networks</p>
                        <div className="links">
                            <Link to="https://www.facebook.com/ez.brandbuilders"><RiFacebookCircleLine /></Link>
                            <Link to="https://www.instagram.com/ez.brandbuilders/"><FaInstagram /></Link>
                            <Link to="https://www.linkedin.com/company/ez-brand-builders/"><AiOutlineLinkedin /></Link>
                            <Link to="https://whatsapp.com/channel/0029Va7ENGAFcow2jWwEpg2B"><FaWhatsapp /></Link>
                            <Link to="https://www.youtube.com/ez.brandbuilders"><FiYoutube /></Link>
                        </div>
                        <NavLink>ezbrandbuilders@gmail.com</NavLink>
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
