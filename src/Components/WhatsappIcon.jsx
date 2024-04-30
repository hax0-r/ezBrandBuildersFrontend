import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappIcon = () => {
    return (
        <>
            <div className="whatsappIcon text-5xl text-[#845dc2] fixed bottom-7 right-5 cursor-pointer hover:text-purple hover:bottom-9 z-10 duration-200 transition-all">
                <FaWhatsapp />
            </div>
        </>
    )
}

export default WhatsappIcon