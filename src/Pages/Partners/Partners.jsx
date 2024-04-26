import React from 'react'
import './Partners.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Partners() {
  return (
    <>
      <div className="partners">
        <div className="page1">
          <div className="main">
            <h1>Our <br /> partners</h1>
            <p>Popular crypto communities and well-known traders trade on the Capico platform.</p>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <h1>Join to our partners, read author's analytics, explore the world of trading and cryptocurrencies. </h1>
          </div>
        </div>
        <div className="page3">
          <div className="main">
            <div className="head">
              <h1>Partners</h1>
              <p>Our Partners </p>
            </div>
            <div className="container">
              <div className="left">
                <ul>
                  <li> Stop Loss and Take Profit</li>
                  <li> Trailing</li>
                  <li> Timeout and Candle Stop Loss</li>
                  <li> Pending orders</li>
                  <li> Trading on the chart channel bot</li>
                  <li> Ladder and averaging</li>
                  <li> Automatic breakeven</li>
                  <li> Booster</li>
                  <li> Panic Sell</li>
                </ul>
              </div>
              <div className="right">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
