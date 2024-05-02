import React, { useEffect, useState } from 'react'
import "./TeamMembers.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const TeamMembers = () => {

    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 550) {
                setSlidesToShow(1);
            } else if (screenWidth < 880) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
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
            <div className="teamMember">
                <Swiper
                    slidesPerView={slidesToShow}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000, // Adjust delay as per your preference
                        disableOnInteraction: false, // Enable navigation when user interacts
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className='swiper-slide-team-member'>
                        <div className='dataTeamMember'>
                            <img src="/TeamMembers/Talha.png" alt="" />
                            <h1>Muhammad Talha</h1>
                            <p>Co-founder of EZ Brand Builders</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-team-member'>
                        <div className='dataTeamMember'>
                            <img src="/TeamMembers/ali.png" alt="" />
                            <h1>Muhammad Ali</h1>
                            <p>CEO & Founder of EZ Brand Builders</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-team-member'>
                        <div className='dataTeamMember'>
                            <img src="/TeamMembers/aliFather.png" alt="" />
                            <h1>Falak Sher</h1>
                            <p>CFO at EZ Brand Builders</p>
                        </div>
                    </SwiperSlide>
                        <div className="divider"></div>
                </Swiper>
            </div>
        </>
    )
}

export default TeamMembers