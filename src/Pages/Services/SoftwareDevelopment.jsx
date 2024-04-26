import React, { useState } from 'react'
import './Services.css'
import { ServicesData } from '../../Data/ServicesData'
import { IoSearch } from 'react-icons/io5'

export default function SoftwareDevelopment() {

    const [filteredData, setFilteredData] = useState([]);

    const ServicesSearchHandler = (e) => {
        const value = e.target.value.trim().toLowerCase();
        const filtered = ServicesData.filter(item =>
            item.category === "Software Development" && item.title.toLowerCase().includes(value)
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
                        <h1>Software <br /> Development</h1>
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
                                        <div className="card" key={index}>
                                            <h2>{title}</h2>
                                            {icon}
                                            <p>{description}</p>
                                        </div>
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
