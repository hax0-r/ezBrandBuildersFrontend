import React, { useState } from 'react'
import './Services.css'
import { ServicesData } from '../../Data/ServicesData'
import { IoSearch } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom';

export default function DigitalMarketing() {

    const [filteredData, setFilteredData] = useState([]);
    let { id } = useParams()

    let filteredServicesCard = ServicesData.filter((card, index) => {
        return card.title === id
    })

    let [card] = filteredServicesCard

    const ServicesSearchHandler = (e) => {
        const value = e.target.value.trim().toLowerCase();
        const filtered = ServicesData.filter(item =>
            item.category === "Digital Marketing" && item.title.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    useState(() => {
        ServicesSearchHandler({ target: { value: '' } });
    }, []);

    return (
        <>
            <div className="ServicesPage">
                <div className="page1">
                    <div className="main">
                        <h1>Digital <br />Marketing</h1>
                        <p>Discover unparalleled service excellence with our top-tier provider, delivering excellence in every interaction</p>
                    </div>
                </div>
                <div className="page2">
                    <div className="main">
                        <div className="head">
                            <div className="servicesBtns">
                            </div>
                            <div className='servicesSearch'>
                                <input onChange={ServicesSearchHandler} type="text" placeholder='Search...' />
                                <IoSearch />
                            </div>
                        </div>
                        <div className="box">
                            <div className="right">
                                {
                                    filteredData.map(({ title, description, icon }, index) => (
                                        <>
                                            <Link to={`/services/ServicesCardPages/${title}`}>
                                                <div className="card" key={index}>
                                                    <h2>{title}</h2>
                                                    {icon}
                                                    <p>{description}</p>
                                                </div>
                                            </Link>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
