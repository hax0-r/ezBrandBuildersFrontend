import React, { useState } from 'react'
import './Services.css'
import { ServicesData } from '../../Data/ServicesData'
import { IoSearch } from 'react-icons/io5'
import ScrollProgress from '../../Components/ScrollProgress';
import SmoothScroll from '../../Components/SmoothScroll';

export default function Services() {

    const [filteredData, setFilteredData] = useState(ServicesData);

    const ServicesSearchHandler = (e) => {
        let value = e.target.value.trim().toLowerCase()
        console.log();
        const filtered = ServicesData.filter(item => item.title.toLowerCase().includes(value))
        setFilteredData(filtered);
    }

    const filterByCategory = (category) => {
        if (category === "All") {
            const uniqueTitles = new Set();
            const filtered = ServicesData.filter(service => {
                if (!uniqueTitles.has(service.title)) {
                    uniqueTitles.add(service.title);
                    return true;
                }
                return false;
            });
            setFilteredData(filtered);
        } else {
            let dataCategory = ServicesData.filter(service => service.category === category);
            setFilteredData(dataCategory);
        }
    }


    return (
        <>
            <ScrollProgress />
            <div className="ServicesPage">
                <div className="page1">
                    <div className="main">
                        <h1>Our <br /> Services</h1>
                        <p>Discover unparalleled service excellence with our top-tier provider, delivering excellence in every interaction</p>
                    </div>
                </div>
                <div className="page2">
                    <div className="main">
                        <div className="head">
                            <div className="servicesBtns">
                                <button onClick={() => filterByCategory("All")}>All</button>
                                <button onClick={() => filterByCategory("Digital Marketing")}>Digital Marketing</button>
                                <button onClick={() => filterByCategory("Web Development")}>Web Development</button>
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
