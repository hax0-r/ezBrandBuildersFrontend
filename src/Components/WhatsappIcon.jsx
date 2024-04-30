import React, { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const WhatsappIcon = () => {


    useEffect(() => {

        const shakeInterval = setInterval(() => {
            const element = document.getElementById('shakeElement');
            element.classList.add('animate-horizontal-shake');
            setTimeout(() => {
                element.classList.remove('animate-horizontal-shake');
            }, 800);
        }, 8000);

        return () => clearInterval(shakeInterval);

    }, []);


    return (
        <>
            <Link to="https:/Wa.me/+923201091220">
                <div id='shakeElement' className="whatsappIcon  text-5xl text-[#845dc2] fixed bottom-7 right-5 cursor-pointer hover:text-purple hover:bottom-9 z-10 duration-200 transition-all">
                    <FaWhatsapp />
                </div>
            </Link>
        </>
    )
}

export default WhatsappIcon