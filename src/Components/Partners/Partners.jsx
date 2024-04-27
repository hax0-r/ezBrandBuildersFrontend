import React from 'react';
import "./Partners.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Partners = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
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
                <SwiperSlide><img src="/Logos/alFalak.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/drSidra.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/nazra.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/psyche.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/Logos/theAli.png" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Partners;
