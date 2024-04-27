import React, { useEffect, useState } from 'react'
import "./Loader.css"

const Loader = () => {

  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {
        isLoading && <Loader />
      }
      <div className="LoaderDiv">
        <span className="loader"></span>
      </div>
    </>
  )
}

export default Loader