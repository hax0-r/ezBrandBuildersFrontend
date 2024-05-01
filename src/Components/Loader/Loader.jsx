import React, { useEffect } from 'react'
import "./Loader.css"
import { gsap } from 'gsap';

const Loader = () => {


  useEffect(() => {

    gsap.to(".LoaderDiv", {
      delay: 3,
      duration: .5,
      top: "-100%",
      ease: "power4.in"
    })
    gsap.to(".LoaderDiv2", {
      delay: 4,
      display: "none"
    })

  }, [])

  return (
    <>
      <div className="LoaderDiv LoaderDiv2">
        <span className="loader"></span>
      </div>
    </>
  )
}

export default Loader