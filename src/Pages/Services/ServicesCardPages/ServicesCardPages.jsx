import React from 'react'
import "./ServicesCardPages.scss"
import Button from '../../../Components/Button/Button'
import { useParams } from 'react-router-dom'
import { ServicesData } from '../../../Data/ServicesData'

const ServicesCardPages = () => {

    let { id } = useParams()

    let filteredServicesCard = ServicesData.filter((card) => {
        return card.title === id
    })

    let [card] = filteredServicesCard


    return (
        <>
            <div className="ServicesCardPages">
                <div className="main">
                    <h1>{card.title}</h1>
                    <p>{card.subDescription1}</p><br />
                    <p>{card.subDescription2}</p><br />
                    <p>{card.subDescription3}</p><br />
                    <p>{card.subDescription4}</p><br />
                    <p>{card.subDescription5}</p>
                    <div id="ServicesCardPagesBtn">
                        <Button button="Get it" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCardPages