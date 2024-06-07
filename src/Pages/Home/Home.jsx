import React, { useEffect, useState } from 'react'
import pg3 from '../../assets/Home/pg3.png'
import pg4 from '../../assets/Home/pg4.png'
import pg9 from '../../assets/Home/pg9.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from '../../Components/Card/Card'
import Button from '../../Components/Button/Button'
import Partners from '../../Components/Partners/Partners'
import PricingSection from '../../Components/PricingSection/PricingSection'
import gsap from "gsap";
import Model3D from '../../Components/Model3D/Model3D'
import ScrollProgress from '../../Components/ScrollProgress';
import Loader from '../../Components/Loader/Loader';
import TextAnimation from '../../Components/TextAnimation/TextAnimation';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  gsap.from(".home .Services .main .box .right .card", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5,
    stagger: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".home .Services .main .box",
      start: "top 95%",
      end: "bottom 80%",
      scrub: true,
      // markers: true
    }
  })

  gsap.from(".home .main .pg2Container .cardDiv .card ", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5,
    borderColor:"white",
    stagger: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".home .main .pg2Container",
      start: "top 95%",
      end: "bottom 80%",
      scrub: true,
    }
  })

  return (
    <>
      <ScrollProgress />
      <div className="home">
        <div className="page1">
          <div className="mainContainer">
            <div className="content">
              <div>
                <h1 className='gsap_p1_head'>
                  <TextAnimation
                    firstLine="Building Brand"
                    secondLine="& Solve IT"
                    thirdLine="Challenges"
                  />
                  {/* <span>& Solving IT Challenges</span> */}
                </h1>
                <p>At EZ Brand Builders, we provide top-tier IT services which your business needs. With expertise in Web Development, Digital Marketing, Cyber Security, Cloud Services, Software Development, Technology Trainig.Our expert team ensures efficiency and security for your operations.</p>
                <Link to="/signin">
                  <Button button="Register now" />
                </Link>
              </div>
            </div>
            <Model3D />
          </div>
          <div className="overlayBottom"></div>
        </div>
        <div className="Services">
          <div className="main">
            <div className="head">
              <h1>Demanded Services</h1>
              <p>Most Demended Services</p>
            </div>
            <div className="box">
              <div className="right">
                <Link to="/services/digital-marketing">
                  <div className="card">
                    <h2>Digital Marketing</h2>
                    <svg width="119" height="112" viewBox="0 0 119 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.4446 27.7409H27.7409L38.0373 43.1855H45.7596M17.4446 27.7409C17.4446 29.2683 16.9917 30.7613 16.1431 32.0312C15.2946 33.3012 14.0885 34.2909 12.6775 34.8754C11.2664 35.4599 9.71373 35.6128 8.21575 35.3148C6.71777 35.0169 5.34178 34.2814 4.26179 33.2014C3.18181 32.1214 2.44635 30.7454 2.14839 29.2475C1.85042 27.7495 2.00334 26.1968 2.58782 24.7857C3.17231 23.3747 4.16207 22.1686 5.43199 21.3201C6.70191 20.4715 8.19496 20.0187 9.72228 20.0187C11.7704 20.0187 13.7346 20.8322 15.1828 22.2805C16.631 23.7287 17.4446 25.6929 17.4446 27.7409ZM17.4446 56.056C17.4446 57.5833 16.9917 59.0763 16.1431 60.3463C15.2946 61.6162 14.0885 62.606 12.6775 63.1904C11.2664 63.7749 9.71373 63.9278 8.21575 63.6299C6.71777 63.3319 5.34178 62.5964 4.26179 61.5165C3.18181 60.4365 2.44635 59.0605 2.14839 57.5625C1.85042 56.0645 2.00334 54.5118 2.58782 53.1008C3.17231 51.6897 4.16207 50.4837 5.43199 49.6351C6.70191 48.7866 8.19496 48.3337 9.72228 48.3337C11.7704 48.3337 13.7346 49.1473 15.1828 50.5955C16.631 52.0437 17.4446 54.0079 17.4446 56.056ZM17.4446 56.056H61.2042M38.0373 14.8705L48.3337 30.315H61.2042M17.4446 84.371C17.4446 82.8437 16.9917 81.3506 16.1431 80.0807C15.2946 78.8108 14.0885 77.821 12.6775 77.2366C11.2664 76.6521 9.71373 76.4992 8.21575 76.7971C6.71777 77.0951 5.34178 77.8305 4.26179 78.9105C3.18181 79.9905 2.44635 81.3665 2.14839 82.8645C1.85042 84.3625 2.00334 85.9152 2.58782 87.3262C3.17231 88.7373 4.16207 89.9433 5.43199 90.7919C6.70191 91.6404 8.19496 92.0933 9.72228 92.0933C11.7704 92.0933 13.7346 91.2797 15.1828 89.8315C16.631 88.3833 17.4446 86.4191 17.4446 84.371ZM17.4446 84.371L27.7409 84.371L38.0373 68.9265H86.9451V76.3656L116.47 56.3649L86.9451 35.1801V43.1855H61.2042M38.0373 97.2415L48.3337 81.7969H61.2042M76.6487 56.056H81.7969M66.3524 56.056H71.5006M66.3524 30.315H71.5006M66.3524 81.7969H71.5006M56.056 43.1855H50.9078M40.6114 9.72228C40.6114 11.2496 40.1585 12.7426 39.31 14.0126C38.4615 15.2825 37.2554 16.2723 35.8443 16.8567C34.4333 17.4412 32.8806 17.5941 31.3826 17.2962C29.8846 16.9982 28.5086 16.2627 27.4286 15.1828C26.3487 14.1028 25.6132 12.7268 25.3152 11.2288C25.0173 9.73084 25.1702 8.17814 25.7547 6.76708C26.3392 5.35602 27.3289 4.14996 28.5988 3.30142C29.8688 2.45289 31.3618 2 32.8891 2C34.9372 2 36.9014 2.81359 38.3496 4.2618C39.7978 5.71001 40.6114 7.67421 40.6114 9.72228ZM40.6114 102.39C40.6114 100.862 40.1585 99.3693 39.31 98.0994C38.4615 96.8295 37.2554 95.8397 35.8443 95.2552C34.4333 94.6707 32.8806 94.5178 31.3826 94.8158C29.8846 95.1138 28.5086 95.8492 27.4286 96.9292C26.3487 98.0092 25.6132 99.3852 25.3152 100.883C25.0173 102.381 25.1702 103.934 25.7547 105.345C26.3392 106.756 27.3289 107.962 28.5988 108.811C29.8688 109.659 31.3618 110.112 32.8891 110.112C34.9372 110.112 36.9014 109.298 38.3496 107.85C39.7978 106.402 40.6114 104.438 40.6114 102.39Z" stroke="url(#paint0_linear_134_644)" strokeWidth="2.4" strokeMiterlimit="10" />
                      <defs>
                        <linearGradient id="paint0_linear_134_644" x1="59.235" y1="2" x2="59.235" y2="110.112" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5A2FED" />
                          <stop offset="1" stopColor="#C67EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Let us help you skyrocket your online presence and ignite audience engagement with our expert digital marketing strategies
                    </p>
                  </div>
                </Link>
                <Link to="/services/graphic-designing">
                  <div className="card">
                    <h2>Graphic Designing</h2>
                    <svg width="124" height="80" viewBox="0 0 124 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.0588 22.482C25.4512 19.1423 25.0311 15.7712 24.8003 12.3846C24.7553 11.7764 24.8847 11.168 25.1735 10.6309C25.4624 10.0938 25.8985 9.65028 26.4307 9.35247C37.813 3.8552 50.29 1 62.9302 1C75.5705 1 88.0475 3.8552 99.4298 9.35247C99.962 9.65028 100.398 10.0938 100.687 10.6309C100.976 11.168 101.105 11.7764 101.06 12.3846C100.276 24.2468 97.0637 35.8215 91.6216 46.3909C86.1794 56.9602 78.6239 66.2987 69.4235 73.8274L64.9898 77.4602C64.4128 77.9444 63.6835 78.2099 62.9302 78.2099C62.1769 78.2099 61.4477 77.9444 60.8707 77.4602L56.437 73.8274C50.1721 68.732 44.6546 62.7812 40.0465 56.1497M54.8065 56.4071C57.3127 59.2563 60.0282 61.9144 62.9302 64.3592C77.1164 52.3997 86.4112 35.6426 89.0463 17.276C72.232 10.8312 53.6285 10.8312 36.8142 17.276M48.6279 28.3746V51.2583M40.0465 36.956H48.6279M105.837 36.956V42.6769C105.837 44.1942 105.234 45.6493 104.162 46.7222C103.089 47.7951 101.634 48.3978 100.116 48.3978M123 28.3746V51.2583M114.419 36.956H123M8.5814 28.3746V51.2583M0 36.956H8.5814M25.7442 48.3978C24.2269 48.3978 22.7718 47.7951 21.6989 46.7222C20.626 45.6493 20.0233 44.1942 20.0233 42.6769V36.956C20.0233 35.4387 20.626 33.9835 21.6989 32.9106C22.7718 31.8378 24.2269 31.235 25.7442 31.235C27.2615 31.235 28.7166 31.8378 29.7895 32.9106C30.8624 33.9835 31.4651 35.4387 31.4651 36.956V42.6769C31.4651 44.1942 30.8624 45.6493 29.7895 46.7222C28.7166 47.7951 27.2615 48.3978 25.7442 48.3978Z" stroke="url(#paint0_linear_134_769)" strokeWidth="2" strokeMiterlimit="10" />
                      <defs>
                        <linearGradient id="paint0_linear_134_769" x1="61.5" y1="1" x2="61.5" y2="78.2099" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5A2FED" />
                          <stop offset="1" stopColor="#C67EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Attract, engage, and convert. Our expert graphic design ignites your brand, leaving a lasting impression that drives results.
                    </p>
                  </div>
                </Link>
                <Link to="/services/web-development">
                  <div className="card">
                    <h2>Web Development</h2>
                    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.8696 95.3739C39.5323 95.3739 40.0696 94.8367 40.0696 94.1739C40.0696 93.5112 39.5323 92.9739 38.8696 92.9739V95.3739ZM6.6087 94.1739H5.4087V95.3739H6.6087V94.1739ZM7.8087 66.5217C7.8087 65.859 7.27144 65.3217 6.6087 65.3217C5.94595 65.3217 5.4087 65.859 5.4087 66.5217H7.8087ZM108 15.8261H109.2V14.6261H108V15.8261ZM29.2835 9.53519L29.752 10.6399L30.238 10.4338L30.4144 9.93639L29.2835 9.53519ZM31.9565 2V0.8H31.1089L30.8256 1.5988L31.9565 2ZM41.1739 2L42.3038 1.59573L42.0191 0.8H41.1739V2ZM43.87 9.53519L42.7402 9.93946L42.9188 10.4385L43.4079 10.6427L43.87 9.53519ZM50.5526 12.3235L50.0905 13.431L50.5857 13.6376L51.0699 13.4063L50.5526 12.3235ZM57.7882 8.86698L58.6413 8.023L58.0411 7.41632L57.271 7.78419L57.7882 8.86698ZM64.2174 15.3652L65.3002 15.8824L65.6639 15.121L65.0704 14.5212L64.2174 15.3652ZM60.7609 22.6009L59.6781 22.0836L59.4468 22.5678L59.6534 23.063L60.7609 22.6009ZM63.5491 29.2835L62.4416 29.7455L62.647 30.2378L63.1501 30.4152L63.5491 29.2835ZM71.1304 31.9565H72.3304V31.1072L71.5295 30.8248L71.1304 31.9565ZM71.1304 41.1739L71.5347 42.3038L72.3304 42.0191V41.1739H71.1304ZM63.5952 43.87L63.191 42.7402L62.6919 42.9188L62.4878 43.4079L63.5952 43.87ZM60.8069 50.5526L59.6995 50.0905L59.4929 50.5857L59.7241 51.0699L60.8069 50.5526ZM64.2635 57.7882L65.1074 58.6413L65.7141 58.0411L65.3462 57.271L64.2635 57.7882ZM57.7652 64.2174L57.248 65.3002L58.0094 65.6639L58.6092 65.0704L57.7652 64.2174ZM50.5296 60.7609L51.0468 59.6781L50.5627 59.4468L50.0675 59.6534L50.5296 60.7609ZM43.847 63.5491L43.3849 62.4416L42.8926 62.647L42.7152 63.1501L43.847 63.5491ZM41.1739 71.1304V72.3304H42.0232L42.3056 71.5295L41.1739 71.1304ZM31.9565 71.1304L30.8267 71.5347L31.1114 72.3304H31.9565V71.1304ZM29.2604 63.5952L30.3903 63.191L30.2117 62.6919L29.7225 62.4878L29.2604 63.5952ZM22.5778 60.8069L23.0399 59.6995L22.5473 59.4939L22.0648 59.7221L22.5778 60.8069ZM15.3652 64.2174L14.5167 65.0659L15.1142 65.6635L15.8781 65.3022L15.3652 64.2174ZM8.91304 57.7652L7.83025 57.248L7.46446 58.0137L8.06452 58.6138L8.91304 57.7652ZM12.3696 50.5296L13.4524 51.0468L13.6836 50.5627L13.477 50.0675L12.3696 50.5296ZM9.58132 43.847L10.6888 43.3849L10.4834 42.8926L9.98035 42.7152L9.58132 43.847ZM2 41.1739H0.8V42.0232L1.60098 42.3056L2 41.1739ZM2 31.9565L1.59573 30.8267L0.8 31.1114V31.9565H2ZM9.53519 29.2604L9.93946 30.3903L10.4385 30.2117L10.6427 29.7225L9.53519 29.2604ZM12.3235 22.5778L13.431 23.0399L13.6365 22.5473L13.4083 22.0648L12.3235 22.5778ZM8.91304 15.3652L8.06451 14.5167L7.46698 15.1142L7.82821 15.8781L8.91304 15.3652ZM15.3652 8.91304L15.8824 7.83025L15.1167 7.46446L14.5167 8.06451L15.3652 8.91304ZM22.6009 12.3696L22.0836 13.4524L22.5716 13.6855L23.0694 13.4743L22.6009 12.3696ZM75.7391 23.8435C75.0764 23.8435 74.5391 24.3807 74.5391 25.0435C74.5391 25.7062 75.0764 26.2435 75.7391 26.2435V23.8435ZM108 26.2435C108.663 26.2435 109.2 25.7062 109.2 25.0435C109.2 24.3807 108.663 23.8435 108 23.8435V26.2435ZM38.8696 92.9739H6.6087V95.3739H38.8696V92.9739ZM7.8087 94.1739V66.5217H5.4087V94.1739H7.8087ZM48.087 99.9826H52.6957V97.5826H48.087V99.9826ZM57.3043 99.9826H61.913V97.5826H57.3043V99.9826ZM66.5217 99.9826H80.3478V97.5826H66.5217V99.9826ZM84.9565 99.9826H89.5652V97.5826H84.9565V99.9826ZM94.1739 99.9826H98.7826V97.5826H94.1739V99.9826ZM48.087 90.7652H52.6957V88.3652H48.087V90.7652ZM57.3043 90.7652H61.913V88.3652H57.3043V90.7652ZM66.5217 90.7652H71.1304V88.3652H66.5217V90.7652ZM75.7391 90.7652H80.3478V88.3652H75.7391V90.7652ZM84.9565 90.7652H89.5652V88.3652H84.9565V90.7652ZM94.1739 90.7652H98.7826V88.3652H94.1739V90.7652ZM57.3043 81.5478H103.391V79.1478H57.3043V81.5478ZM103.391 81.5478C104.295 81.5478 105.162 81.907 105.802 82.5462L107.499 80.8492C106.409 79.7598 104.932 79.1478 103.391 79.1478V81.5478ZM105.802 82.5462C106.441 83.1855 106.8 84.0525 106.8 84.9565H109.2C109.2 83.416 108.588 81.9385 107.499 80.8492L105.802 82.5462ZM106.8 84.9565V103.391H109.2V84.9565H106.8ZM106.8 103.391C106.8 104.295 106.441 105.162 105.802 105.802L107.499 107.499C108.588 106.409 109.2 104.932 109.2 103.391H106.8ZM105.802 105.802C105.162 106.441 104.295 106.8 103.391 106.8V109.2C104.932 109.2 106.409 108.588 107.499 107.499L105.802 105.802ZM103.391 106.8H43.4783V109.2H103.391V106.8ZM43.4783 106.8C42.5742 106.8 41.7072 106.441 41.0679 105.802L39.3709 107.499C40.4602 108.588 41.9377 109.2 43.4783 109.2V106.8ZM41.0679 105.802C40.4287 105.162 40.0696 104.295 40.0696 103.391H37.6696C37.6696 104.932 38.2815 106.409 39.3709 107.499L41.0679 105.802ZM40.0696 103.391V84.9565H37.6696V103.391H40.0696ZM40.0696 84.9565C40.0696 84.0525 40.4287 83.1855 41.0679 82.5462L39.3709 80.8492C38.2815 81.9385 37.6696 83.416 37.6696 84.9565H40.0696ZM41.0679 82.5462C41.7072 81.907 42.5742 81.5478 43.4783 81.5478V79.1478C41.9377 79.1478 40.4602 79.7598 39.3709 80.8492L41.0679 82.5462ZM43.4783 81.5478H52.6957V79.1478H43.4783V81.5478ZM86.1565 80.3478V51.5435H83.7565V80.3478H86.1565ZM86.1565 51.5435C86.1565 50.3339 86.637 49.1738 87.4924 48.3185L85.7953 46.6214C84.4899 47.9268 83.7565 49.6973 83.7565 51.5435H86.1565ZM87.4924 48.3185C88.3477 47.4631 89.5078 46.9826 90.7174 46.9826V44.5826C88.8712 44.5826 87.1007 45.316 85.7953 46.6214L87.4924 48.3185ZM90.7174 46.9826C91.927 46.9826 93.0871 47.4631 93.9424 48.3185L95.6395 46.6214C94.334 45.316 92.5635 44.5826 90.7174 44.5826V46.9826ZM93.9424 48.3185C94.7977 49.1738 95.2783 50.3339 95.2783 51.5435H97.6783C97.6783 49.6973 96.9449 47.9268 95.6395 46.6214L93.9424 48.3185ZM95.2783 51.5435V67.6739H97.6783V51.5435H95.2783ZM95.2783 67.6739C95.2783 69.5201 96.0117 71.2906 97.3171 72.596L99.0141 70.8989C98.1588 70.0436 97.6783 68.8835 97.6783 67.6739H95.2783ZM97.3171 72.596C98.6225 73.9014 100.393 74.6348 102.239 74.6348V72.2348C101.03 72.2348 99.8695 71.7543 99.0141 70.8989L97.3171 72.596ZM102.239 74.6348C104.085 74.6348 105.856 73.9014 107.161 72.596L105.464 70.8989C104.609 71.7543 103.449 72.2348 102.239 72.2348V74.6348ZM107.161 72.596C108.467 71.2906 109.2 69.5201 109.2 67.6739H106.8C106.8 68.8835 106.319 70.0436 105.464 70.8989L107.161 72.596ZM109.2 67.6739V15.8261H106.8V67.6739H109.2ZM108 14.6261H63.0652V17.0261H108V14.6261ZM30.4144 9.93639L33.0875 2.4012L30.8256 1.5988L28.1525 9.134L30.4144 9.93639ZM31.9565 3.2H41.1739V0.8H31.9565V3.2ZM40.0441 2.40427L42.7402 9.93946L44.9999 9.13093L42.3038 1.59573L40.0441 2.40427ZM43.4079 10.6427L50.0905 13.431L51.0147 11.216L44.3321 8.42773L43.4079 10.6427ZM51.0699 13.4063L58.3055 9.94977L57.271 7.78419L50.0354 11.2407L51.0699 13.4063ZM56.9352 9.71096L63.3643 16.2092L65.0704 14.5212L58.6413 8.023L56.9352 9.71096ZM63.1346 14.8479L59.6781 22.0836L61.8437 23.1181L65.3002 15.8824L63.1346 14.8479ZM59.6534 23.063L62.4416 29.7455L64.6566 28.8214L61.8683 22.1388L59.6534 23.063ZM63.1501 30.4152L70.7314 33.0882L71.5295 30.8248L63.9481 28.1518L63.1501 30.4152ZM69.9304 31.9565V41.1739H72.3304V31.9565H69.9304ZM70.7262 40.0441L63.191 42.7402L63.9995 44.9999L71.5347 42.3038L70.7262 40.0441ZM62.4878 43.4079L59.6995 50.0905L61.9144 51.0147L64.7027 44.3321L62.4878 43.4079ZM59.7241 51.0699L63.1807 58.3055L65.3462 57.271L61.8897 50.0354L59.7241 51.0699ZM63.4195 56.9352L56.9213 63.3643L58.6092 65.0704L65.1074 58.6413L63.4195 56.9352ZM58.2825 63.1346L51.0468 59.6781L50.0123 61.8437L57.248 65.3002L58.2825 63.1346ZM50.0675 59.6534L43.3849 62.4416L44.309 64.6566L50.9916 61.8683L50.0675 59.6534ZM42.7152 63.1501L40.0422 70.7314L42.3056 71.5295L44.9787 63.9481L42.7152 63.1501ZM41.1739 69.9304H31.9565V72.3304H41.1739V69.9304ZM33.0864 70.7262L30.3903 63.191L28.1305 63.9995L30.8267 71.5347L33.0864 70.7262ZM29.7225 62.4878L23.0399 59.6995L22.1157 61.9144L28.7983 64.7027L29.7225 62.4878ZM22.0648 59.7221L14.8522 63.1325L15.8781 65.3022L23.0908 61.8918L22.0648 59.7221ZM16.2137 63.3689L9.76157 56.9167L8.06452 58.6138L14.5167 65.0659L16.2137 63.3689ZM9.99584 58.2825L13.4524 51.0468L11.2868 50.0123L7.83025 57.248L9.99584 58.2825ZM13.477 50.0675L10.6888 43.3849L8.47386 44.309L11.2621 50.9916L13.477 50.0675ZM9.98035 42.7152L2.39902 40.0422L1.60098 42.3056L9.1823 44.9787L9.98035 42.7152ZM3.2 41.1739V31.9565H0.8V41.1739H3.2ZM2.40427 33.0864L9.93946 30.3903L9.13093 28.1305L1.59573 30.8267L2.40427 33.0864ZM10.6427 29.7225L13.431 23.0399L11.216 22.1157L8.42773 28.7983L10.6427 29.7225ZM13.4083 22.0648L9.99788 14.8522L7.82821 15.8781L11.2387 23.0908L13.4083 22.0648ZM9.76157 16.2137L16.2137 9.76157L14.5167 8.06451L8.06451 14.5167L9.76157 16.2137ZM14.8479 9.99584L22.0836 13.4524L23.1181 11.2868L15.8824 7.83025L14.8479 9.99584ZM23.0694 13.4743L29.752 10.6399L28.8149 8.43045L22.1323 11.2648L23.0694 13.4743ZM44.0065 37.0952C44.0065 41.2049 40.6749 44.5365 36.5652 44.5365V46.9365C42.0004 46.9365 46.4065 42.5304 46.4065 37.0952H44.0065ZM36.5652 44.5365C32.4555 44.5365 29.1239 41.2049 29.1239 37.0952H26.7239C26.7239 42.5304 31.13 46.9365 36.5652 46.9365V44.5365ZM29.1239 37.0952C29.1239 32.9855 32.4555 29.6539 36.5652 29.6539V27.2539C31.13 27.2539 26.7239 31.66 26.7239 37.0952H29.1239ZM36.5652 29.6539C40.6749 29.6539 44.0065 32.9855 44.0065 37.0952H46.4065C46.4065 31.66 42.0004 27.2539 36.5652 27.2539V29.6539ZM75.7391 26.2435H108V23.8435H75.7391V26.2435Z" fill="url(#paint0_linear_134_649)" />
                      <defs>
                        <linearGradient id="paint0_linear_134_649" x1="55" y1="2" x2="55" y2="108" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5A2FED" />
                          <stop offset="1" stopColor="#C67EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Take control of your online experience. Let us develop a state-of-the-art website that
                      captivates users, drives engagement, and elevates your brand</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="overlayBottom"></div>
          <div className="main">
            <div className="numbers">
              <h1>Why Choose us</h1>
              <p>Since 2019</p>
            </div>
            <div className="pg2Container">
              <div className="total">
                {/* <h1>s18.5 B </h1> */}
                <p> At EZ Brand Builders, we're your strategic partner for success. With IT services including digital marketing, design, web development, and cybersecurity, we offer end-to-end solutions. Our experienced team is committed to elevating your brand
                </p>
              </div>
              <div className="cardDiv">
                <div className="card">
                  <h1>300+</h1>
                  <p>Happy Clients</p>
                </div>
                <div className="twoCard">
                  <div className="card">
                    <h1>290+</h1>
                    <p>Project <br />Completed</p>
                  </div>
                  <div className="card">
                    <h1>30+
                    </h1>
                    <p>Skilled Services<br />
                      Providers</p>
                  </div>
                </div>
              </div>
              {/* <div className="actual">
                <p>Registered Company <br /> on 19.07.2022</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="page3">
          <div className="main">
            <div className="numbers">
              <h1>Digital Marketing</h1>
              <p>Top-Notch Offering </p>
            </div>
            <div className="container">
              <div className="left">
                <img src={pg3} alt="" />
              </div>
              <div className="right">
                <h1>SEO</h1>
                <div>
                  {/* <h5>Customize <br />
                    your website</h5> */}
                  <h4>In today's digital landscape, SEO is essential for standing out. Our expert strategies enhance your website's visibility, driving organic traffic and attracting quality leads. From keyword research to content optimization, we ensure your business stays ahead and achieves sustainable growth.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page4">
          <div className="main">
            <div className="container">
              <div className="left">
                <h1>Social Media Ads</h1>
                <h4>Supercharge your social media presence with targeted ads. We craft engaging campaigns
                  that reach the right audience, boosting brand awareness and driving results.  Maximize
                  your ROI with laser-focused targeting and compelling creatives. Grow your social media
                  game and unlock new opportunities.</h4>
              </div>
              <div className="right">
                <img src={pg4} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="page7">
          <div className="main">
            <div className="head">
              <h1>features</h1>
              <p>Manage positions on </p>
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
        </div> */}
        <div className="page9">
          <div className="main">
            <div className="head">
              <h1>Cyber Security</h1>
              <p>Highest Security</p>
            </div>
            <div className="box">
              <img src={pg9} alt="" />
              <div className="right">
                <div className="card">
                  <h2>Cloud Security</h2>
                  <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.4348 59.4348L75.9061 75.9061M26.5652 17.4348L30.2174 21.087V35.6957M30.2174 35.6957C31.3009 35.6957 32.3601 36.0169 33.261 36.6189C34.1619 37.2209 34.864 38.0765 35.2786 39.0775C35.6933 40.0785 35.8018 41.18 35.5904 42.2427C35.379 43.3054 34.8573 44.2815 34.0911 45.0476C33.325 45.8138 32.3488 46.3355 31.2861 46.5469C30.2235 46.7583 29.122 46.6498 28.1209 46.2352C27.1199 45.8205 26.2643 45.1184 25.6624 44.2175C25.0604 43.3166 24.7391 42.2574 24.7391 41.1739C24.7391 39.721 25.3163 38.3276 26.3437 37.3002C27.371 36.2728 28.7645 35.6957 30.2174 35.6957ZM44.8261 32.0435V44.8261L48.4783 48.4783M24.7391 13.7826L21.087 10.1304M19.2609 59.4348L15.6087 55.7826M43 4.65217L39.3478 1M55.7826 55.7826L52.1304 52.1304M15.6087 32.0435V44.8261L26.5652 55.7826H43L50.3043 63.087H53.9565L57.6087 66.7391V70.3913L61.2609 74.0435H64.913L66.7391 75.8696V79.5217L72.2174 85H85V74.0435L57.6087 46.6522V19.2609L46.6522 8.30435M39.3478 13.7826L28.3913 2.82609H19.2609L1 21.087V41.1739L11.9565 52.1304M44.8261 21.087C45.9096 21.087 46.9688 21.4083 47.8697 22.0102C48.7706 22.6122 49.4727 23.4678 49.8873 24.4688C50.302 25.4698 50.4105 26.5713 50.1991 27.634C49.9877 28.6967 49.466 29.6728 48.6998 30.4389C47.9337 31.2051 46.9575 31.7268 45.8948 31.9382C44.8322 32.1496 43.7307 32.0411 42.7296 31.6265C41.7286 31.2118 40.873 30.5097 40.2711 29.6088C39.6691 28.7079 39.3478 27.6487 39.3478 26.5652C39.3478 25.1123 39.925 23.7189 40.9524 22.6915C41.9797 21.6641 43.3732 21.087 44.8261 21.087ZM15.6087 21.087C16.6922 21.087 17.7514 21.4083 18.6523 22.0102C19.5532 22.6122 20.2553 23.4678 20.6699 24.4688C21.0846 25.4698 21.1931 26.5713 20.9817 27.634C20.7703 28.6967 20.2486 29.6728 19.4824 30.4389C18.7163 31.2051 17.7401 31.7268 16.6774 31.9382C15.6148 32.1496 14.5133 32.0411 13.5122 31.6265C12.5112 31.2118 11.6556 30.5097 11.0537 29.6088C10.4517 28.7079 10.1304 27.6487 10.1304 26.5652C10.1304 25.1123 10.7076 23.7189 11.735 22.6915C12.7623 21.6641 14.1558 21.087 15.6087 21.087Z" stroke="url(#paint0_linear_134_757)" strokeWidth="1.5" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_757" x1="43" y1="1" x2="43" y2="85" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Ensure the integrity and confidentiality of your cloud infrastructure and data with our advanced security solutions.</p>
                </div>
                <div className="card">
                  <h2>Application Security</h2>
                  <svg width="124" height="80" viewBox="0 0 124 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0588 22.482C25.4512 19.1423 25.0311 15.7712 24.8003 12.3846C24.7553 11.7764 24.8847 11.168 25.1735 10.6309C25.4624 10.0938 25.8985 9.65028 26.4307 9.35247C37.813 3.8552 50.29 1 62.9302 1C75.5705 1 88.0475 3.8552 99.4298 9.35247C99.962 9.65028 100.398 10.0938 100.687 10.6309C100.976 11.168 101.105 11.7764 101.06 12.3846C100.276 24.2468 97.0637 35.8215 91.6216 46.3909C86.1794 56.9602 78.6239 66.2987 69.4235 73.8274L64.9898 77.4602C64.4128 77.9444 63.6835 78.2099 62.9302 78.2099C62.1769 78.2099 61.4477 77.9444 60.8707 77.4602L56.437 73.8274C50.1721 68.732 44.6546 62.7812 40.0465 56.1497M54.8065 56.4071C57.3127 59.2563 60.0282 61.9144 62.9302 64.3592C77.1164 52.3997 86.4112 35.6426 89.0463 17.276C72.232 10.8312 53.6285 10.8312 36.8142 17.276M48.6279 28.3746V51.2583M40.0465 36.956H48.6279M105.837 36.956V42.6769C105.837 44.1942 105.234 45.6493 104.162 46.7222C103.089 47.7951 101.634 48.3978 100.116 48.3978M123 28.3746V51.2583M114.419 36.956H123M8.5814 28.3746V51.2583M0 36.956H8.5814M25.7442 48.3978C24.2269 48.3978 22.7718 47.7951 21.6989 46.7222C20.626 45.6493 20.0233 44.1942 20.0233 42.6769V36.956C20.0233 35.4387 20.626 33.9835 21.6989 32.9106C22.7718 31.8378 24.2269 31.235 25.7442 31.235C27.2615 31.235 28.7166 31.8378 29.7895 32.9106C30.8624 33.9835 31.4651 35.4387 31.4651 36.956V42.6769C31.4651 44.1942 30.8624 45.6493 29.7895 46.7222C28.7166 47.7951 27.2615 48.3978 25.7442 48.3978Z" stroke="url(#paint0_linear_134_769)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_769" x1="61.5" y1="1" x2="61.5" y2="78.2099" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Protect your applications from cyber threats and vulnerabilities with our comprehensive security services..
                  </p>
                </div>
                <div className="card">
                  <h2>Firewall</h2>
                  <span>ss</span>
                  <svg width="84" height="81" viewBox="0 0 84 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.2552 67.381V79.0952H14.7448V67.381M26.381 26.381V16.619C26.381 12.4766 28.0265 8.50384 30.9557 5.5747C33.8848 2.64556 37.8576 1 42 1C46.1424 1 50.1152 2.64556 53.0443 5.5747C55.9735 8.50384 57.619 12.4766 57.619 16.619V26.381M34.1905 26.381V16.619C34.1905 14.5478 35.0133 12.5614 36.4778 11.0969C37.9424 9.63231 39.9288 8.80952 42 8.80952C44.0712 8.80952 46.0576 9.63231 47.5222 11.0969C48.9867 12.5614 49.8095 14.5478 49.8095 16.619V26.381M51.0395 41.5705L53.7143 38.0952H75.1905M75.1905 38.0952C75.1905 40.2518 76.9387 42 79.0952 42C81.2518 42 83 40.2518 83 38.0952C83 35.9387 81.2518 34.1905 79.0952 34.1905C76.9387 34.1905 75.1905 35.9387 75.1905 38.0952ZM51.0395 58.0486L53.7143 61.5238H75.1905M75.1905 61.5238C75.1905 63.6804 76.9387 65.4286 79.0952 65.4286C81.2518 65.4286 83 63.6804 83 61.5238C83 59.3673 81.2518 57.6191 79.0952 57.6191C76.9387 57.6191 75.1905 59.3673 75.1905 61.5238ZM32.9605 41.5705L30.2857 38.0952H8.80952M8.80952 38.0952C8.80952 40.2518 7.0613 42 4.90476 42C2.74822 42 1 40.2518 1 38.0952C1 35.9387 2.74822 34.1905 4.90476 34.1905C7.0613 34.1905 8.80952 35.9387 8.80952 38.0952ZM32.9605 58.0486L30.2857 61.5238H8.80952M8.80952 61.5238C8.80952 63.6804 7.0613 65.4286 4.90476 65.4286C2.74822 65.4286 1 63.6804 1 61.5238C1 59.3673 2.74822 57.6191 4.90476 57.6191C7.0613 57.6191 8.80952 59.3673 8.80952 61.5238ZM14.7448 32.2381V26.381H69.2552V32.2381M69.2552 44.0695V55.6667M14.7448 44.0695V55.6667M49.8095 49.8095C49.8144 48.4375 49.4576 47.0884 48.7753 45.8981C48.093 44.7078 47.1091 43.7183 45.9227 43.0291C44.7363 42.34 43.3893 41.9755 42.0173 41.9725C40.6452 41.9695 39.2966 42.328 38.1072 43.0119C36.9178 43.6958 35.9296 44.681 35.242 45.8683C34.5544 47.0556 34.1918 48.4031 34.1905 49.7751C34.1893 51.1471 34.5496 52.4952 35.2351 53.6837C35.9205 54.8723 36.907 55.8592 38.0952 56.5452V69.3333H45.9048V56.5452C47.0879 55.8621 48.0712 54.8806 48.7564 53.6987C49.4416 52.5167 49.8047 51.1757 49.8095 49.8095Z" stroke="url(#paint0_linear_134_768)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_768" x1="42" y1="1" x2="42" y2="79.0952" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Strengthen your network security with our next-generation firewall solutions, equipped with advanced threat detection capabilities..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="page8">
          <div className="main">
            <h1>Who we are</h1>
            <p>We are prepared to offer our client Services of the highest Quality and give them in-depth advice about their brands. <br />  <br />
              <b>EZ Brand Builders</b> has established a reputation among its client in the it industry for professional and commitment fulfillment.</p>
            <div>
              <Button button="Get a free consultant " />
            </div>
          </div>
        </div> */}

        {/* <div className="whoWeAre">
          <div className="overlaybottom"></div>
          <div className="main">
            <div className="content">
              <h1>Who we are</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in velit. Quia, rerum voluptate vel excepturi autem asperiores vitae explicabo qui adipisci labore repellat eligendi cumque magnam corporis perferendis? Voluptate consectetur at omnis dolores quo minima maiores ad est. Laborum, natus? Laborum quod beatae neque ex, hic vero nulla suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio magnam commodi enim vel. Voluptate illum id illo corrupti dicta quod ipsum, ducimus quis provident voluptates quidem praesentium. Quisquam voluptatem doloremque necessitatibus ullam enim neque, quaerat similique impedit amet doloribus laborum aliquid officiis itaque ipsum! Architecto quod soluta assumenda officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur mollitia et necessitatibus eaque consectetur repellat perferendis, beatae voluptate delectus quas, magni vel incidunt dolores expedita assumenda, ipsum quos! Vel voluptates amet accusantium fuga explicabo tempore, autem asperiores, deleniti esse corporis illum at, soluta fugit temporibus nam reprehenderit unde optio. </p>
            </div>
            <img src={man} alt="" />
          </div>
        </div> */}

        <div className="whyChooseUs">
          <div className="main">
            <div className="left">
              <h5>We Offerings</h5>
              <h1>Web Development</h1>
              <p>At EZ Brand Builders, we craft powerful and engaging web experiences. We specialize in building websites and applications that  meet your specific needs and goals. From user-friendly design to cutting-edge development, we'll help you establish a strong online presence and achieve your business objectives.</p>
              <Button button="Get Started " />
            </div>
            <div className="right">
              <div className="first">
                <Card
                  title="CMS Development"
                  para="Our custom CMS empowers effortless website management with user-friendly interfaces & robust functionality."
                />
                <Card
                  title="Web Development"
                  para="Our experts build new websites or transform your existing one We deliver custom solutions to achieve your unique goals."
                />
              </div>
              <div className="second">

                <Card
                  title="API Integration"
                  para="Boost website functionality with our API integrations. Leverage external data & services for a richer user experience."
                />
                <Card
                  title="Web Applications"
                  para="Build custom web applications for efficiency & innovation. From enterprise to SaaS, we tailor solutions to streamline processes & achieve your goals."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pricingSec">
          <PricingSection />
        </div>
        <div className="page10">
          <div className="main">
            <div className="head">
              <h1>our partners</h1>
              <p><span>Our Most Dependable Allies</span></p>
            </div>
            <div className="box">
              <Partners />
            </div>
          </div>
        </div>
        <div className="page11">
          <div className="main">
            <h1>Do you want professionals to handle your project? Let's discuss it!</h1>
            <Link to="https:/Wa.me/+923201091220" target='_blank'>
              <Button button="Talk To Us" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
