import React, { useEffect, useState } from 'react';
import "./Partners.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Partners = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 400) {
                setSlidesToShow(1);
            }
            else if (screenWidth < 660) {
                setSlidesToShow(2);
            }
            else if (screenWidth < 860) {
                setSlidesToShow(3);
            } else if (screenWidth < 1100) {
                setSlidesToShow(4);
            } else {
                setSlidesToShow(5);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={slidesToShow}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000, // Adjust delay as per your preference
                    disableOnInteraction: false, // Enable navigation when user interacts
                }}
                className="mySwiper"
            >
                <SwiperSlide><img src="/Logos/alFalak.png" alt="image" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/drSidra.png" alt="image" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/nazra.png" alt="image" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/psyche.jpg" alt="image" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/theAli.png" alt="image" /></SwiperSlide>
                <div className="divider"></div>
                <div className="divider"></div>
            </Swiper>
        </>
    )
}

export default Partners;
