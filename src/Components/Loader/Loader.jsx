import React, { useEffect } from 'react'
import "./Loader.css"
import { gsap } from 'gsap';

const Loader = () => {


  useEffect(() => {

    gsap.to(".LoaderDiv",{
      delay:3,
      duration:.5,
      top:"-100%",
      ease: "power4.in"
    })
    
  }, [])

  return (
    <>
      <div className="LoaderDiv">
        <span className="loader"></span>
      </div>
    </>
  )
}

export default Loader