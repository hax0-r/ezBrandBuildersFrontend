import React from 'react'
import "./TeamMembers.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const TeamMembers = () => {
    return (
        <>
            <div className="teamMember">
                <Swiper
                    slidesPerView={3}
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
                        <h1>Muhammad Falak</h1>
                        <p>CFO at EZ Brand Builders</p>
                        </div>
                    </SwiperSlide>                   
                </Swiper>
            </div>
        </>
    )
}

export default TeamMembers