import React, { useEffect } from 'react'
import "./textAnimation.css"
import gsap from 'gsap'

const TextAnimation = (props) => {

    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(".word", {
            y: 100,
            delay: 3.3,
            stagger: {
                each: 0.03
            }
        })
    }, [])

    return (
        <>
            <div className="textAnimation" style={{ overflow: 'hidden', color: '#fff' }}>
                <div style={{ display: 'flex' }}>
                    {
                        'Building Brands'.split('').map((word, index) => {
                            return word === ' ' ? <div key={index} className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TextAnimation