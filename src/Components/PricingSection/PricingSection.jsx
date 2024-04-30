import React, { useState } from 'react'
import './PricingSection.css'
import { FaCheck } from 'react-icons/fa'
import SimpleButton from '../SimpleButton/SimpleButton';

const PricingSection = () => {

    const [currency, setCurrency] = useState("USD");
    const [prices, setPrices] = useState({
        USD: { basic: 29, professional: 39, premium: 120 },
        PKR: { basic: 6999, professional: 11999, premium: 20000 }
    });

    const currencyHandler = (selectedCurrency) => {
        setCurrency(selectedCurrency);
    }

    return (
        <>
            <div className="planeAndPricing">
                <div className="main">
                    <div className="head">
                        <div className="left">
                            <h1>Social media management plan</h1>
                            <p>Choose from our three comprehensive packages to meet your social media needs.</p>
                        </div>
                        <div className="right">
                            <button className={currency === "USD" ? "selectedPrice" : ""} onClick={() => currencyHandler("USD")}>USD</button>
                            <button className={currency === "PKR" ? "selectedPrice" : ""} onClick={() => currencyHandler("PKR")}>PKR</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="CMain">
                            <div className="first">
                                <h1>{currency === "USD" ? `$${prices.USD.basic}` : `${prices.PKR.basic}`}<span> /month</span> </h1>
                                <h3>Basic</h3>
                                <p>Unleash the power of automation.</p>
                                <li> <FaCheck /> 2 Social Network</li>
                                <li> <FaCheck /> 13 Posts Per Month</li>
                                <li> <FaCheck /> Basic Content Research</li>
                                <li> <FaCheck /> Platfrom Maintainance </li>
                                <li> <FaCheck /> Monthly Report </li>
                                <li> <FaCheck /> 24/7 Support </li>
                                <li> .</li>
                                <SimpleButton button="Select" />
                            </div>
                            <div className="second">
                                <h1>{currency === "USD" ? `$${prices.USD.professional}` : `${prices.PKR.professional}`} <span> /month</span> </h1>
                                <h3>Advance</h3>
                                <p>Advanced tools to take your work to the next level.</p>
                                <li> <FaCheck /> 5 Social Network</li>
                                <li> <FaCheck /> 30 Posts per Month</li>
                                <li> <FaCheck /> Advance Content Research </li>
                                <li> <FaCheck /> Platfrom Maintainance</li>
                                <li> <FaCheck /> Weekly Report</li>
                                <li> <FaCheck /> 24/7 Support</li>
                                <li>     .</li>
                                <SimpleButton button="Select" />
                            </div>
                            <div className="third">
                                <h5>MOST POPULAR</h5>
                                <h1>{currency === "USD" ? `$${prices.USD.premium}` : `${prices.PKR.premium}`} <span> /month</span> </h1>
                                <h3>Premium</h3>
                                <p>Automation plus enterprise-grade features.</p>
                                <li> <FaCheck /> 10 Social Networks</li>
                                <li> <FaCheck /> 30  Posts Per Month </li>
                                <li> <FaCheck /> Professional  Content Research</li>
                                <li> <FaCheck /> Platfrom Maintainance</li>
                                <li> <FaCheck /> Weekly Report</li>
                                <li> <FaCheck /> 24/7 Support</li>
                                <li>     .</li>
                                <div>
                                    <SimpleButton button="Select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingSection