import React from 'react'
import './About.css'
import pg4 from '../../assets/Home/pg4.png'
import TeamMembers from '../../Components/TeamMembers/TeamMembers'
import Partners from '../../Components/Partners/Partners'
import ScrollProgress from '../../Components/ScrollProgress'

export default function About() {
  return (
    <>
      <ScrollProgress />
      <div className="about">
        <div className="page1">
          <div className="main">
            <h1>About us</h1>
            <p>Your premier destination for innovative software solutions tailored to elevate your business to new heights.</p>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <h1>Join to our partners, read author's analytics, explore the world of trading and cryptocurrencies. </h1>
          </div>
        </div>
        <div className="page4">
          <div className="main">
            <div className="container">
              <div className="left">
                <h1>EXPLORE MORE</h1>
                <h4><span>Here at EZ Brand Builders</span>  we are a team of devoted members who never cease to amaze. We are dedicated to your cause and genuinely care about your business which is why we vow to provide you with the best of services. Our services and motivation is unmatched and we deliver nothing short of perfection. Our extraordinary qualities is what will take your business from zero to a thousand within a short span of time. </h4>
              </div>
              <div className="right">
                <img src={pg4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="main">
            <div className="head">
              <h1>Our LeaderShip Team</h1>
              <p>Meet our senior team members. They bring experience, expertise, and leadership to our organization</p>
            </div>
            <div className="content">
              <TeamMembers />
            </div>
          </div>
        </div>
        <div className="numberCounter">
          <div className="main">
            <div className="first">
              <p id='num'>300+</p>
              <p>Happy Clients</p>
            </div>
            <div className="second">
              <p id='num'>30+</p>
              <p>Skilled Professional</p>
            </div>
            <div className="third">
              <p id='num'>290+</p>
              <p>Project Completed</p>
            </div>
            <div className="fourth">
              <p id='num'>95%</p>
              <p>CLIENT SATISFACTION INDEX</p>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="awarded">
          <div className="main">
            <h1> AWARDS & RECOGNITION</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse odio fugiat culpa consectetur illo ea quidem laborum error repellendus veniam?</p>
            <div className="content">
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
