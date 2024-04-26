import React from 'react'
import "./Button.css"

const Button = (prop) => {
    return (
        <>
            <div id='button'>
                <button className='btn'>{prop.button}<svg width="89" height="83" viewBox="0 0 89 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.4" cx="47.5" cy="41.5" r="41" transform="rotate(-90 47.5 41.5)" stroke="white" />
                    <path d="M1 41.5L56 41.5M56 41.5L48.5 34M56 41.5L48.5 49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
            </div>
        </>
    )
}

export default Button