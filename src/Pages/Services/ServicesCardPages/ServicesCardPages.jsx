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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum dolores ipsa in necessitatibus inventore sit aperiam voluptatem tempora dolorum, dolor ea laudantium a, numquam voluptatum odit accusantium itaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse nemo nihil fuga rerum qui eaque pariatur voluptas a inventore. dolor sit amet consectetur adipisicing elit. Natus eum dolores ipsa in necessitatibus inventore sit aperiam voluptatem tempora dolorum, dolor ea laudantium a, numquam voluptatum odit accusantium itaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse nemo nihil fuga rerum qui eaque pariatur voluptas a inventore</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum dolores ipsa in necessitatibus inventore sit aperiam voluptatem tempora dolorum, dolor ea laudantium a, numquam voluptatum odit accusantium itaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse nemo nihil fuga rerum qui eaque pariatur voluptas a inventore. dolor sit amet consectetur adipisicing elit. Natus eum dolores ipsa in necessitatibus inventore sit aperiam voluptatem tempora dolorum, dolor ea laudantium a, numquam voluptatum odit accusantium itaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse nemo nihil fuga rerum qui eaque pariatur voluptas a inventore</p>
                    <div id="ServicesCardPagesBtn">
                        <Button button="Get it" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCardPages